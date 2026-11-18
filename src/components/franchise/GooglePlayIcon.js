import React from "react";

/**
 * High-precision authentic Google Play Store vector icon
 */
export default function GooglePlayIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Cyan/Blue Left Triangle */}
      <path
        d="M52.4 28.5C47.2 34.1 44 42.6 44 53.6v404.8c0 11 3.2 19.5 8.4 25.1l230.9-227.5L52.4 28.5z"
        fill="#00D3FF"
      />
      {/* Top Green Piece */}
      <path
        d="M327.8 211.5l-44.5 44.5-230.9-227.5c4.7-2.7 10.4-4.5 17.1-4.5 9.4 0 19.5 3.5 30.2 9.6l228.1 131.6v46.3z"
        fill="#00F076"
      />
      {/* Bottom Red Piece */}
      <path
        d="M283.3 256l44.5 44.5-228.1 131.6c-10.7 6.1-20.8 9.6-30.2 9.6-6.7 0-12.4-1.8-17.1-4.5L283.3 256z"
        fill="#FF3A44"
      />
      {/* Yellow Right Piece */}
      <path
        d="M451.7 232.7l-79.4-45.8-44.5 24.6 44.5 44.5 44.5 24.6 79.4-45.8c14.1-8.1 22.3-21.3 22.3-36.1 0-14.7-8.2-27.9-22.3-36z"
        fill="#FFE000"
      />
    </svg>
  );
}
