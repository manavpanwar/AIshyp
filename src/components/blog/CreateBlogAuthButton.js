"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlogAuthButton() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Focus input automatically when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close when clicked outside or Escape key pressed
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setPassword("");
        setError(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
        setPassword("");
        setError(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const verifyAndNavigate = (val) => {
    if (val === "123456") {
      try {
        sessionStorage.setItem("blog_auth_token", "authorized_123456");
      } catch (err) {
        console.error(err);
      }
      setIsSuccess(true);
      setError(false);
      setTimeout(() => {
        router.push("/blog/create");
      }, 150);
      return true;
    }
    return false;
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (error) setError(false);

    // Auto-navigate as soon as default password is typed
    if (val === "123456") {
      verifyAndNavigate(val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verifyAndNavigate(password)) {
      setError(true);
      if (inputRef.current) {
        inputRef.current.select();
      }
    }
  };

  const toggleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setError(false);
      setPassword("");
    } else {
      setIsOpen(false);
      setPassword("");
      setError(false);
    }
  };

  return (
    <div ref={containerRef} className="relative inline-flex items-center gap-2 flex-wrap sm:flex-nowrap">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleOpen}
        className="bg-[#D8331F] hover:bg-[#c02816] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-1.5 cursor-pointer"
      >
        <span>✍️</span>
        <span>+ Create Blog Article</span>
      </button>

      {/* Inline Small Input Box (No Popup) */}
      {isOpen && (
        <div className="relative inline-flex items-center">
          <form
            onSubmit={handleSubmit}
            className={`inline-flex items-center gap-1.5 bg-white border ${error
              ? "border-red-500 ring-2 ring-red-100"
              : isSuccess
                ? "border-emerald-500 ring-2 ring-emerald-100"
                : "border-slate-300 focus-within:border-[#D8331F] focus-within:ring-2 focus-within:ring-red-100"
              } rounded-xl px-2.5 py-1.5 shadow-md transition-all`}
          >
            <span className="text-slate-400 text-xs">🔒</span>
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password..."
              disabled={isSuccess}
              className="w-24 sm:w-28 text-xs font-semibold text-slate-800 placeholder:text-slate-400 bg-transparent outline-none tracking-widest"
              autoComplete="off"
            />

            {isSuccess ? (
              <span className="text-emerald-600 text-xs font-bold px-1.5 animate-pulse">
                ✓
              </span>
            ) : (
              <button
                type="submit"
                className="bg-[#D8331F] hover:bg-[#c02816] text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold transition-all active:scale-95 cursor-pointer"
                title="Enter"
              >
                →
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setPassword("");
                setError(false);
              }}
              className="text-slate-400 hover:text-slate-600 w-5 h-5 flex items-center justify-center text-xs rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              title="Close"
            >
              ✕
            </button>
          </form>

          {/* Error Message Tooltip */}
          {error && (
            <span className="absolute -bottom-6 right-0 whitespace-nowrap text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-200 shadow-xs z-10">
              Incorrect password
            </span>
          )}
        </div>
      )}
    </div>
  );
}
