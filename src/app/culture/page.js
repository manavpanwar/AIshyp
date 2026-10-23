"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  PartyPopper,
  X,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
  Calendar,
  Sparkles,
  Compass,
  Camera,
  Heart,
  Users,
  Award,
  Coffee,
  Flame,
  ArrowRight,
  Layers,
  Search,
} from "lucide-react";
import { getCulturePageSchema, getBreadcrumbSchema } from "../../lib/seo";


export const ALL_CULTURE_PHOTOS = [
  {
    id: 1,
    file: "/team/1.jpeg",
    title: "Nahargarh Fort Panoramic Summit",
    category: "trips",
    categoryLabel: "Offsites & Treks",
    tag: "Jaipur Offsite",
    location: "Nahargarh Fort, Jaipur",
    date: "Feb 2024",
    aspect: "landscape",
    caption:
      "The AIshyp team overlooking the vast historic Pink City skyline from the ramparts of Nahargarh Fort after an intensive quarterly planning sprint.",
  },
  {
    id: 2,
    file: "/team/2.jpeg",
    title: "Fortress Ramparts Team Gathering",
    category: "trips",
    categoryLabel: "Offsites & Treks",
    tag: "Jaipur Offsite",
    location: "Nahargarh Fort, Jaipur",
    date: "Feb 2024",
    aspect: "landscape",
    caption:
      "Sunlight, smiles, and shared laughter as engineering and operations squads recharge amidst historic Rajasthani architecture.",
  },
  {
    id: 3,
    file: "/team/3.jpeg",
    title: "Leadership & Product Summit",
    category: "trips",
    categoryLabel: "Offsites & Treks",
    tag: "Jaipur Offsite",
    location: "Jaipur, Rajasthan",
    date: "Feb 2024",
    aspect: "landscape",
    caption:
      "Taking a breather to celebrate hitting 29,000+ serviceable pin codes across Bharat with panoramic mountain views.",
  },
  {
    id: 4,
    file: "/team/4.jpeg",
    title: "Naini Lake Boating Expedition",
    category: "trips",
    categoryLabel: "Offsites & Treks",
    tag: "Mountain Retreat",
    location: "Naini Lake, Nainital",
    date: "Jan 2024",
    aspect: "portrait",
    caption:
      "Crisp mountain breeze, life jackets, and rowing across the emerald waters of Naini Lake on our winter company retreat.",
  },
  {
    id: 5,
    file: "/team/5.jpeg",
    title: "Pink City Horizon Crew",
    category: "trips",
    categoryLabel: "Offsites & Treks",
    tag: "Jaipur Offsite",
    location: "Nahargarh, Jaipur",
    date: "Feb 2024",
    aspect: "landscape",
    caption:
      "A grand panorama of the team celebrating unity, freedom, and audacious 10x logistics milestones under the desert sun.",
  },
  {
    id: 6,
    file: "/team/6.jpeg",
    title: "Diwali Hamper Felicitation",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Diwali 2024",
    location: "AIshyp HQ Lounge",
    date: "Nov 2024",
    aspect: "portrait",
    caption:
      "Exchanging bespoke festive gift baskets, artisanal sweets, and warm wishes in front of the handcrafted office rangoli.",
  },
  {
    id: 7,
    file: "/team/7.jpeg",
    title: "Open-Air Terrace Luncheon",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Team Lunch",
    location: "CyberHub Terrace, Gurgaon",
    date: "Oct 2024",
    aspect: "portrait",
    caption:
      "A sunlit afternoon feast under breezy cabana umbrellas celebrating our multi-carrier automated aggregator release.",
  },
  {
    id: 8,
    file: "/team/8.jpeg",
    title: "Evening Food Court Catchup",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Evening Outing",
    location: "CyberHub, Gurgaon",
    date: "Sep 2024",
    aspect: "portrait",
    caption:
      "Unwinding after high-velocity sprint reviews with steaming dimsums, spicy desi chaat, and heartfelt team laughter.",
  },
  {
    id: 9,
    file: "/team/9.jpeg",
    title: "Sprint Roadmap Birthday Cake Bash",
    category: "celebrations",
    categoryLabel: "Milestones & Celebrations",
    tag: "Office Birthday",
    location: "War Room, AIshyp HQ",
    date: "Aug 2024",
    aspect: "portrait",
    caption:
      "Cutting celebratory chocolate cake right alongside our whiteboard architecture blueprints and carrier dispatch APIs.",
  },
  {
    id: 10,
    file: "/team/10.jpeg",
    title: "Garden Cabana Squad Chill",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Team Lunch",
    location: "CyberHub, Gurgaon",
    date: "Oct 2024",
    aspect: "portrait",
    caption:
      "Good food, great minds, and zero hierarchy — catching up on life, side projects, and books beyond code and shipping labels.",
  },
  {
    id: 11,
    file: "/team/11.jpeg",
    title: "Diwali Festive Recognition",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Diwali 2024",
    location: "AIshyp HQ",
    date: "Nov 2024",
    aspect: "portrait",
    caption:
      "Founder Mohit Panwar presenting festival gift hampers to team leads honoring their round-the-clock commitment to customer delight.",
  },
  {
    id: 12,
    file: "/team/12.jpeg",
    title: "Victory Poses at Terrace Celebration",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Team Bonding",
    location: "CyberHub, Gurgaon",
    date: "Oct 2024",
    aspect: "portrait",
    caption:
      "Smiles and victory signs following the successful rollout of the sub-120ms rate calculator and real-time tracking webhook engine.",
  },
  {
    id: 13,
    file: "/team/13.jpeg",
    title: "Diwali Festive Warmth & Gifts",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Diwali 2024",
    location: "AIshyp HQ",
    date: "Nov 2024",
    aspect: "portrait",
    caption:
      "Spreading festive illumination, handmade diyas, and joy across every corner of our Gurgaon headquarters.",
  },
  {
    id: 14,
    file: "/team/14.jpeg",
    title: "Festive Traditions & Gratitude",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Diwali 2024",
    location: "AIshyp HQ",
    date: "Nov 2024",
    aspect: "portrait",
    caption:
      "Celebrating the festival of lights with traditional mithai boxes, custom gift packages, and team camaraderie.",
  },
  {
    id: 15,
    file: "/team/15.jpeg",
    title: "Rangoli & Ethnic Kurta Gifting",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Diwali 2024",
    location: "AIshyp HQ",
    date: "Nov 2024",
    aspect: "portrait",
    caption:
      "Golden ethnic kurtas, vibrant geometric rangolis, and festive honors celebrating our team members' landmark contributions.",
  },
  {
    id: 16,
    file: "/team/16.jpeg",
    title: "Chaat & Dimsum Food Court Outing",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Casual Outing",
    location: "Gurgaon Food Court",
    date: "Sep 2024",
    aspect: "portrait",
    caption:
      "Fueling late-night debugging marathons with tasty local delicacies and lighthearted team banter.",
  },
  {
    id: 17,
    file: "/team/17.jpeg",
    title: "Festival Gift Box Felicitation",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Diwali 2024",
    location: "AIshyp HQ",
    date: "Nov 2024",
    aspect: "portrait",
    caption:
      "Honoring our core developers with custom curated gift packages and heartfelt festive wishes.",
  },
  {
    id: 18,
    file: "/team/18.jpeg",
    title: "Birthday Cake Sharing Tradition",
    category: "celebrations",
    categoryLabel: "Milestones & Celebrations",
    tag: "Office Birthday",
    location: "Conference Hall",
    date: "Aug 2024",
    aspect: "portrait",
    caption:
      "Office traditions — teammates feeding the first delicious bite of birthday cake to the birthday champion!",
  },
  {
    id: 19,
    file: "/team/19.jpeg",
    title: "Team Milestone Cake Cutting",
    category: "celebrations",
    categoryLabel: "Milestones & Celebrations",
    tag: "Office Birthday",
    location: "Conference Hall",
    date: "Aug 2024",
    aspect: "portrait",
    caption:
      "Gathering around the conference table to celebrate personal birthdays and shared company milestones.",
  },
  {
    id: 20,
    file: "/team/20.jpeg",
    title: "Camaraderie & Birthday Cheers",
    category: "celebrations",
    categoryLabel: "Milestones & Celebrations",
    tag: "Office Birthday",
    location: "AIshyp HQ",
    date: "Aug 2024",
    aspect: "portrait",
    caption:
      "Warm smiles, sweet treats, and cheering for each other's growth making work feel like a second family.",
  },
  {
    id: 21,
    file: "/team/21.jpeg",
    title: "Diwali Token of Appreciation",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Diwali 2024",
    location: "AIshyp HQ",
    date: "Nov 2024",
    aspect: "portrait",
    caption:
      "Celebrating each team member's role in scaling AIshyp to millions in monthly GMV across India.",
  },
  {
    id: 22,
    file: "/team/22.jpeg",
    title: "Birthday Wish & Candle Moment",
    category: "celebrations",
    categoryLabel: "Milestones & Celebrations",
    tag: "Office Birthday",
    location: "Meeting Room",
    date: "Aug 2024",
    aspect: "portrait",
    caption:
      "Blowing out candles, making a secret wish, and getting ready for another blockbuster year of product delivery.",
  },
  {
    id: 23,
    file: "/team/23.jpeg",
    title: "Diwali Blessings & Gift Exchange",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Diwali 2024",
    location: "AIshyp HQ",
    date: "Nov 2024",
    aspect: "portrait",
    caption:
      "Festive spirits soaring high with tokens of appreciation and warm wishes for our team and their families.",
  },
  {
    id: 24,
    file: "/team/24.jpeg",
    title: "Studio Ghibli Team Art Tribute",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Creative Art",
    location: "AIshyp Studio",
    date: "Dec 2024",
    aspect: "landscape",
    caption:
      "A bespoke anime-style illustration commemorating the core engineering team behind AIshyp's next-gen logistics OS.",
  },
  {
    id: 25,
    file: "/team/25.jpeg",
    title: "Smaaash Bowling Alley Squad",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Gaming Night",
    location: "Smaaash, CyberHub",
    date: "Jul 2024",
    aspect: "landscape",
    caption:
      "Strikes, spares, and high-energy bowling showdowns during our mid-year sports & arcade gaming night.",
  },
  {
    id: 26,
    file: "/team/26.jpeg",
    title: "Neon Bowling Champions",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Gaming Night",
    location: "Smaaash, CyberHub",
    date: "Jul 2024",
    aspect: "landscape",
    caption:
      "Under the neon lights, the engineering squad proved they can bowl strikes just as well as they optimize shipping manifests.",
  },
  {
    id: 27,
    file: "/team/27.jpeg",
    title: "Diwali Smiles & Festive Hampers",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Diwali 2024",
    location: "AIshyp HQ",
    date: "Nov 2024",
    aspect: "portrait",
    caption:
      "Festive smiles lighting up the lobby during the annual Diwali gift distribution ceremony.",
  },
  {
    id: 28,
    file: "/team/28.jpeg",
    title: "Holi Rangotsav Vibrant Gulal Selfie",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Holi 2024",
    location: "Office Terrace",
    date: "Mar 2024",
    aspect: "landscape",
    caption:
      "Splashed with yellow, green, and azure organic gulal — celebrating spring, happiness, and unstoppable team spirit.",
  },
  {
    id: 29,
    file: "/team/29.jpeg",
    title: "Balcony Post-Holi Trio Smiles",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Holi 2024",
    location: "Office Balcony",
    date: "Mar 2024",
    aspect: "portrait",
    caption:
      "Sunlit terrace smiles drenched in festival colors following our traditional Holi color battle and gujiya feast.",
  },
  {
    id: 30,
    file: "/team/30.jpeg",
    title: "Holi Rangotsav Full Team Gathering",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Holi 2024",
    location: "Office Terrace",
    date: "Mar 2024",
    aspect: "portrait",
    caption:
      "Every engineer and operator united in festival colors, celebratory beats, and high spirits on the office terrace.",
  },
  {
    id: 31,
    file: "/team/31.jpeg",
    title: "AIM CDO Vision 2024 Mumbai Keynote",
    category: "celebrations",
    categoryLabel: "Milestones & Celebrations",
    tag: "Industry Leadership",
    location: "Mumbai Convention",
    date: "May 2024",
    aspect: "portrait",
    caption:
      "Founder Mohit Panwar representing AIshyp at the CDO Vision 2024 Mumbai summit, showcasing our automated white-label courier OS.",
  },
  {
    id: 32,
    file: "/team/32.jpeg",
    title: "Engineering Deep Work Flow",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Developer Bay",
    location: "Gurgaon Tech Floor",
    date: "Daily Reality",
    aspect: "portrait",
    caption:
      "Laser-focused engineering — crafting low-latency microservices, isolated multi-tenant DBs, and high-throughput parcel routing algorithms.",
  },
  {
    id: 33,
    file: "/team/33.jpeg",
    title: "Wicker Lantern Cafe Ideation",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Brainstorm Session",
    location: "Artisan Cafe, Gurgaon",
    date: "Dec 2024",
    aspect: "landscape",
    caption:
      "Brainstorming AI-powered rate recommendation heuristics and merchant growth tools over hot cappuccinos and chill cafe vibes.",
  },
  {
    id: 34,
    file: "/team/34.jpeg",
    title: "Holi Joy & Festive Harmony",
    category: "festivals",
    categoryLabel: "Festivals & Traditions",
    tag: "Holi 2024",
    location: "Office Terrace",
    date: "Mar 2024",
    aspect: "portrait",
    caption:
      "Laughter, sweet treats, and vibrant colors uniting our logistics product squads across departments.",
  },
  {
    id: 35,
    file: "/team/35.jpeg",
    title: "Quiet Reflection & System Design",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Turf Lounge",
    location: "AIshyp Green Zone",
    date: "Jan 2025",
    aspect: "portrait",
    caption:
      "Taking dedicated thinking time away from notifications to architect intuitive merchant onboarding journeys.",
  },
  {
    id: 36,
    file: "/team/36.jpeg",
    title: "Sunlit Cafe Strategy Corner",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Turf Lounge",
    location: "AIshyp Green Zone",
    date: "Jan 2025",
    aspect: "portrait",
    caption:
      "Stepping away from computer monitors to rethink logistics UX and automated NDR workflows from first principles.",
  },
  {
    id: 37,
    file: "/team/37.jpeg",
    title: "Thumbs-Up Sprint Celebration",
    category: "hangouts",
    categoryLabel: "Hangouts & Socials",
    tag: "Sprint Win",
    location: "Artisan Cafe, Gurgaon",
    date: "Dec 2024",
    aspect: "landscape",
    caption:
      "Enthusiastic thumbs-up and genuine joy following an on-time production deployment of our WhatsApp NDR recovery engine.",
  },
  {
    id: 38,
    file: "/team/38.jpeg",
    title: "Founder Leadership @ AIshyp Entrance",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "HQ Leadership",
    location: "Viz Libs / AIshyp HQ",
    date: "2024",
    aspect: "portrait",
    caption:
      "Founder Mohit Panwar at the entrance of AIshyp headquarters — leading with humility, high conviction, and relentless customer empathy.",
  },
  {
    id: 39,
    file: "/team/39.jpeg",
    title: "AIshyp HQ Entrance Gathering",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Lobby Squad",
    location: "Viz Libs / AIshyp HQ",
    date: "2024",
    aspect: "portrait",
    caption:
      "The core crew gathered at the marble entrance lobby, ready to power millions of frictionless parcel shipments across India.",
  },
  {
    id: 40,
    file: "/team/40.jpeg",
    title: "AIshyp Headquarters Family Selfie",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Family Spirit",
    location: "Viz Libs / AIshyp HQ",
    date: "2024",
    aspect: "portrait",
    caption:
      "True friendship, mutual respect, and proud teamwork — the authentic spirit that makes the AIshyp team truly unstoppable.",
  },
  {
    id: 41,
    file: "/team/41.jpeg",
    title: "AIshyp Headquarters Family Selfie",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Family Spirit",
    location: "Viz Libs / AIshyp HQ",
    date: "2024",
    aspect: "portrait",
    caption:
      "True friendship, mutual respect, and proud teamwork — the authentic spirit that makes the AIshyp team truly unstoppable.",
  },

  {
    id: 43,
    file: "/team/43.png",
    title: "AIshyp Headquarters Family Selfie",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Family Spirit",
    location: "Viz Libs / AIshyp HQ",
    date: "2024",
    aspect: "portrait",
    caption:
      "True friendship, mutual respect, and proud teamwork — the authentic spirit that makes the AIshyp team truly unstoppable.",
  },
  {
    id: 44,
    file: "/team/44.png",
    title: "AIshyp Headquarters Family Selfie",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Family Spirit",
    location: "Viz Libs / AIshyp HQ",
    date: "2024",
    aspect: "portrait",
    caption:
      "True friendship, mutual respect, and proud teamwork — the authentic spirit that makes the AIshyp team truly unstoppable.",
  },
  {
    id: 45,
    file: "/team/45.png",
    title: "AIshyp Headquarters Family Selfie",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Family Spirit",
    location: "Viz Libs / AIshyp HQ",
    date: "2024",
    aspect: "portrait",
    caption:
      "True friendship, mutual respect, and proud teamwork — the authentic spirit that makes the AIshyp team truly unstoppable.",
  },
  {
    id: 46,
    file: "/team/46.png",
    title: "AIshyp Headquarters Family Selfie",
    category: "office",
    categoryLabel: "Office & Engineering",
    tag: "Family Spirit",
    location: "Viz Libs / AIshyp HQ",
    date: "2024",
    aspect: "portrait",
    caption:
      "True friendship, mutual respect, and proud teamwork — the authentic spirit that makes the AIshyp team truly unstoppable.",
  },
];


const TEAMWORK_TENETS = [
  {
    id: "problem-solving",
    label: "Enhanced Problem Solving",
    tagline: "First-principles engineering over endless corporate debate",
    desc: "When hard logistics bottlenecks arise — from warehouse OCR mismatches to WhatsApp NDR drops — multidisciplinary squads swarm together to resolve issues in hours, not sprints.",
    metric: "Sub-120ms API response",
    image: "/team/31.jpeg",
    caption: "Deep Engineering Focus • Live Production Deployment",
    date: "Tech Floor",
  },
  {
    id: "productivity",
    label: "Increased Productivity",
    tagline: "Autonomous ownership with zero micromanagement",
    desc: "Every team member owns feature delivery end-to-end. We minimize status meetings and protect uninterrupted deep-work flow blocks for shipping high-impact code.",
    metric: "Daily production deploys",
    image: "/team/1.jpeg",
    caption: "High-Agency Offsite Summit • Nahargarh Fort, Jaipur",
    date: "Feb 2024",
  },
  {
    id: "creativity",
    label: "Improved Creativity",
    tagline: "Practical innovation solving real Indian commerce",
    desc: "From smart rate-recommendation algorithms to automated return-to-origin rescues, our best ideas come from listening directly to courier franchise owners and D2C brands.",
    metric: "29,000+ Pincodes impact",
    image: "/team/4.jpeg",
    caption: "Mountain Offsite Inspiration • Naini Lake, Nainital",
    date: "Jan 2024",
  },
  {
    id: "learning",
    label: "Better Communication and Learning",
    tagline: "Open feedback, shared architectures & radical transparency",
    desc: "Zero corporate hierarchy. Anyone from fresh junior developers to principal architects can challenge architectural proposals, share technical teardowns, and level up together.",
    metric: "100% meritocratic ethos",
    image: "/team/33.jpeg",
    caption: "Brainstorming & Architecture Critique • Artisan Cafe",
    date: "Dec 2024",
  },
  {
    id: "satisfaction",
    label: "Enhanced Employee Satisfaction",
    tagline: "Work with immense pride, celebrate every single milestone",
    desc: "We work hard on solving tough national supply chain problems, but we celebrate even harder — with bowling nights, festive kurta days, and scenic mountain retreats.",
    metric: "Top talent retention",
    image: "/team/25.jpeg",
    caption: "Squad Camaraderie & Gaming Night • Smaaash CyberHub",
    date: "Jul 2024",
  },
];

const CHEERS_GALLERY = [
  {
    id: "cheers-1",
    title: "Sprint Roadmap Birthday Cake Bash",
    image: "/team/9.jpeg",
    occasion: "Office Milestone",
    date: "Aug 2024",
    location: "AIshyp War Room",
  },
  {
    id: "cheers-2",
    title: "Neon Bowling Night Champions",
    image: "/team/26.jpeg",
    occasion: "Sports & Gaming Night",
    date: "Jul 2024",
    location: "Smaaash CyberHub",
  },
  {
    id: "cheers-3",
    title: "CDO Vision 2024 Mumbai Keynote",
    image: "/team/31.jpeg",
    occasion: "Industry Leadership",
    date: "May 2024",
    location: "Mumbai Convention",
  },
  {
    id: "cheers-4",
    title: "High Agency Sprint Victory Toast",
    image: "/team/37.jpeg",
    occasion: "Production Ship Day",
    date: "Dec 2024",
    location: "Gurgaon Cafe",
  },
];


const FESTIVAL_MEMORIES = [
  {
    id: "holi-2024",
    festivalKey: "holi",
    festivalName: "Holi Rangotsav",
    year: "2024",
    month: "March",
    headline: "Vibrant Rangotsav: Splashing Colors of Togetherness",
    description:
      "Immersed in a kaleidoscope of organic herbal gulal colors on the AIshyp office terrace! A day of non-stop joy, traditional dhol beats, festive thandai, sweet gujiyas, and celebrating the triumphs of our unified squad.",
    heroImage: "/team/28.jpeg",
    badgeColor: "bg-pink-500/10 text-pink-600 border-pink-300/60 dark:text-pink-400",
    icon: "🎨",
    vibe: "#RangBarseAIShyp",
    gallery: [
      {
        id: "h24-1",
        title: "Full Team Rangotsav Gathering",
        image: "/team/30.jpeg",
        date: "March 2024",
      },
      {
        id: "h24-2",
        title: "Sunlit Balcony Gulal Trio",
        image: "/team/29.jpeg",
        date: "March 2024",
      },
      {
        id: "h24-3",
        title: "Festive Joy & Shared Smiles",
        image: "/team/34.jpeg",
        date: "March 2024",
      },
    ],
  },
  {
    id: "diwali-2024",
    festivalKey: "diwali",
    festivalName: "Diwali Dhamaka",
    year: "2024",
    month: "November",
    headline: "Diwali Dhamaka: Celebrating Lights, Diyas & Prosperity",
    description:
      "Lighting up our Gurgaon HQ with golden fairy lights, earthen diyas, handmade flower rangolis, and traditional ethnic kurtas. Celebrated with heartfelt gift hampers, sweet feasts, and immense gratitude for everyone powering millions of shipments across Bharat.",
    heroImage: "/team/15.jpeg",
    badgeColor: "bg-amber-500/10 text-amber-700 border-amber-300/60 dark:text-amber-400",
    icon: "🪔",
    vibe: "#DiwaliAtAIShyp",
    gallery: [
      {
        id: "d24-1",
        title: "Festive Hamper Felicitation",
        image: "/team/6.jpeg",
        date: "November 2024",
      },
      {
        id: "d24-2",
        title: "Team Recognition & Gifts",
        image: "/team/11.jpeg",
        date: "November 2024",
      },
      {
        id: "d24-3",
        title: "Traditional Rangoli & Blessings",
        image: "/team/21.jpeg",
        date: "November 2024",
      },
    ],
  },
  {
    id: "anniversary-2024",
    festivalKey: "milestones",
    festivalName: "Anniversary & Milestones",
    year: "2024",
    month: "July",
    headline: "Terrace Celebrations: Marking Monumental Growth",
    description:
      "Commemorating exponential platform expansion with an open-air garden terrace banquet at CyberHub. Founder keynote, milestone recognition for engineering squads, delicious multi-course lunches, and celebrating freedom for logistics entrepreneurs.",
    heroImage: "/team/7.jpeg",
    badgeColor: "bg-red-500/10 text-[#D8331F] border-red-300/60",
    icon: "🎉",
    vibe: "#AIShypMilestones",
    gallery: [
      {
        id: "ann24-1",
        title: "Terrace Victory Poses",
        image: "/team/12.jpeg",
        date: "October 2024",
      },
      {
        id: "ann24-2",
        title: "Founder Leadership @ Entrance",
        image: "/team/38.jpeg",
        date: "July 2024",
      },
      {
        id: "ann24-3",
        title: "Headquarters Family Spirit",
        image: "/team/40.jpeg",
        date: "July 2024",
      },
    ],
  },
  {
    id: "offsites-2024",
    festivalKey: "offsites",
    festivalName: "Offsites & Treks",
    year: "2024",
    month: "Feb & Jan",
    headline: "Mountain & Heritage Expeditions: Nainital & Jaipur",
    description:
      "Stepping outside office walls to explore India's royal forts and tranquil mountain lakes. From rowing on Naini Lake to strategizing on the battlements of Nahargarh Fort overlooking Jaipur.",
    heroImage: "/team/1.jpeg",
    badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-300/60 dark:text-emerald-400",
    icon: "🏔️",
    vibe: "#WanderlustAIShyp",
    gallery: [
      {
        id: "off24-1",
        title: "Naini Lake Boating Trek",
        image: "/team/4.jpeg",
        date: "January 2024",
      },
      {
        id: "off24-2",
        title: "Pink City Ramparts Crew",
        image: "/team/2.jpeg",
        date: "February 2024",
      },
      {
        id: "off24-3",
        title: "Fortress Panoramic Summit",
        image: "/team/5.jpeg",
        date: "February 2024",
      },
    ],
  },
  {
    id: "hangouts-2024",
    festivalKey: "hangouts",
    festivalName: "Gaming & Hangouts",
    year: "2024",
    month: "Year-Round",
    headline: "Arcade Bowling, Street Food & Artisan Cafes",
    description:
      "When the monitors sleep, our competitive spirits awaken. From neon bowling showdowns at Smaaash to late-night dimsum feasts and artisan coffee ideation sessions.",
    heroImage: "/team/25.jpeg",
    badgeColor: "bg-blue-500/10 text-blue-700 border-blue-300/60 dark:text-blue-400",
    icon: "🎳",
    vibe: "#GameOnAIShyp",
    gallery: [
      {
        id: "soc24-1",
        title: "Smaaash Bowling Champions",
        image: "/team/26.jpeg",
        date: "July 2024",
      },
      {
        id: "soc24-2",
        title: "Late-Night Dimsum & Chaat",
        image: "/team/16.jpeg",
        date: "September 2024",
      },
      {
        id: "soc24-3",
        title: "Wicker Lantern Cafe Session",
        image: "/team/33.jpeg",
        date: "December 2024",
      },
    ],
  },
];

// Categories for the Master 40-Photo Mosaic
const GALLERY_CATEGORIES = [
  { id: "all", label: "All 40 Photos", icon: Sparkles, count: 40 },
  { id: "trips", label: "Offsites & Treks", icon: Compass, count: 5 },
  { id: "festivals", label: "Festivals: Diwali & Holi", icon: PartyPopper, count: 13 },
  { id: "celebrations", label: "Milestones & Cakes", icon: Award, count: 6 },
  { id: "hangouts", label: "Hangouts & Gaming", icon: Coffee, count: 10 },
  { id: "office", label: "Office & Dev Life", icon: Users, count: 6 },
];

export default function CulturePage() {
  // Interactive States
  const [activeTenetIndex, setActiveTenetIndex] = useState(0);
  const [activeFestivalKey, setActiveFestivalKey] = useState("holi");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllGrid, setShowAllGrid] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlayingVideo) {
        videoRef.current.pause();
        setIsPlayingVideo(false);
      } else {
        videoRef.current.play();
        setIsPlayingVideo(true);
      }
    }
  };

  const cultureSchema = getCulturePageSchema();
  const cultureBreadcrumbs = getBreadcrumbSchema([{ name: "culture@aishyp", item: "/culture" }]);

  // Current active festival memory
  const currentFestival = useMemo(() => {
    return (
      FESTIVAL_MEMORIES.find((f) => f.festivalKey === activeFestivalKey) || FESTIVAL_MEMORIES[0]
    );
  }, [activeFestivalKey]);

  // Filtered 40 photos for the mosaic
  const filteredPhotos = useMemo(() => {
    return ALL_CULTURE_PHOTOS.filter((photo) => {
      const matchesCategory = activeCategory === "all" || photo.category === activeCategory;
      const matchesQuery =
        !searchQuery.trim() ||
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.caption.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  // Visible items in the 40-photo mosaic (initial 12 or all)
  const visiblePhotos = useMemo(() => {
    if (showAllGrid || searchQuery.trim().length > 0 || activeCategory !== "all") {
      return filteredPhotos;
    }
    return filteredPhotos.slice(0, 12);
  }, [filteredPhotos, showAllGrid, searchQuery, activeCategory]);

  // Lightbox navigation helpers
  const activePhoto = useMemo(() => {
    if (activeLightboxIndex === null) return null;
    return ALL_CULTURE_PHOTOS[activeLightboxIndex] || null;
  }, [activeLightboxIndex]);

  const handleOpenLightboxByFile = (filePath) => {
    const idx = ALL_CULTURE_PHOTOS.findIndex((p) => p.file === filePath);
    if (idx !== -1) {
      setActiveLightboxIndex(idx);
    } else {
      setActiveLightboxIndex(0);
    }
  };

  const handleNextPhoto = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev + 1) % ALL_CULTURE_PHOTOS.length);
  }, [activeLightboxIndex]);

  const handlePrevPhoto = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev - 1 + ALL_CULTURE_PHOTOS.length) % ALL_CULTURE_PHOTOS.length);
  }, [activeLightboxIndex]);

  const handleCloseLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowRight") handleNextPhoto();
      if (e.key === "ArrowLeft") handlePrevPhoto();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeLightboxIndex, handleCloseLightbox, handleNextPhoto, handlePrevPhoto]);

  return (
    <main className="w-full bg-white text-slate-900 font-sans overflow-hidden pt-[116px] sm:pt-[128px]">
      {/* ── JSON-LD SCHEMAS ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cultureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cultureBreadcrumbs) }}
      />

      {/* Semantic Summary for Answer Engines */}
      <div className="sr-only" itemScope itemType="https://schema.org/AboutPage">
        <span itemProp="name">culture@aishyp | Life, Culture & Celebrations</span>
        <span itemProp="description">
          Explore culture@aishyp — a culture built on teamwork, celebrations, learning, and employee happiness.
          See 40+ authentic office moments, offsites, festive events, and how we grow together.
        </span>
      </div>

      <section className="relative bg-[#101B3D] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-slate-800">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-b from-red-600/15 via-[#D8331F]/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl space-y-6">
          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Company
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#FF8A6E] font-bold">culture@aishyp</li>
            </ol>
          </nav>

          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-[#FF8A6E] backdrop-blur-md shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A6E]" />
            <span>AUTHENTIC TEAM MOMENTS • HIGH AGENCY SQUAD</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight"
          >
            culture<span className="text-[#D8331F]">@</span>aishyp
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Where first-principles engineering meets unforgettable celebrations. From midnight production
            deploys to mountain lake treks and vibrant festive rangolis — experience the authentic heartbeat of
            India&apos;s fastest growing courier OS.
          </motion.p>

          {/* Quick Anchor Navigation Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-2.5"
          >
            <a
              href="#teamwork-power"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all backdrop-blur-md flex items-center gap-1.5"
            >
              <span>⚡</span> Power of Teamwork
            </a>
            <a
              href="#office-jubilation"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all backdrop-blur-md flex items-center gap-1.5"
            >
              <span>🎥</span> Jubilation Reel
            </a>
            <a
              href="#champagne-cheers"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all backdrop-blur-md flex items-center gap-1.5"
            >
              <span>🥂</span> Cheers &amp; Milestones
            </a>
            <a
              href="#festival-celebrations"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all backdrop-blur-md flex items-center gap-1.5"
            >
              <span>🪔</span> Colorful Festivals
            </a>
            <a
              href="#life-mosaic"
              className="px-4 py-2 rounded-full bg-[#D8331F] hover:bg-[#c02816] text-xs font-bold text-white transition-all shadow-md flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>360° Photo Mosaic (40 Photos)</span>
            </a>
          </motion.div>

          {/* Key Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <span className="text-2xl sm:text-3xl font-black text-white">40+</span>
              <p className="text-xs text-slate-400 mt-0.5">Authentic Snapshots</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <span className="text-2xl sm:text-3xl font-black text-[#FF8A6E]">5+</span>
              <p className="text-xs text-slate-400 mt-0.5">Offsites &amp; Treks</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">100%</span>
              <p className="text-xs text-slate-400 mt-0.5">High Agency Spirit</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <span className="text-2xl sm:text-3xl font-black text-amber-400">29K+</span>
              <p className="text-xs text-slate-400 mt-0.5">Pin Codes Impacted</p>
            </div>
          </motion.div>
        </div>
      </section>


      <section
        id="teamwork-power"
        className="py-16 sm:py-24 bg-white border-b border-slate-200/90 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] px-3.5 py-1 bg-red-50 rounded-full border border-red-200/80 inline-block">
              // Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Unlocking Success Through the Power of Teamwork
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Behind every sub-second rate quote and automated WhatsApp NDR recovery is an aligned squad executing
              with velocity, creativity, and extreme mutual trust.
            </p>
          </div>

          {/* 2-Column Split: Left Sticky List / Tenets + Right Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: Sticky List of Tenets */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-4">
              <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    How Teamwork Drives High Velocity
                  </h3>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{activeTenetIndex + 1} / 0{TEAMWORK_TENETS.length}
                  </span>
                </div>

                {/* Tenets List */}
                <div className="space-y-2">
                  {TEAMWORK_TENETS.map((tenet, idx) => {
                    const isActive = activeTenetIndex === idx;
                    return (
                      <button
                        key={tenet.id}
                        type="button"
                        onClick={() => setActiveTenetIndex(idx)}
                        className={`w-full text-left p-3.5 rounded-2xl transition-all cursor-pointer flex flex-col justify-between ${isActive
                          ? "bg-white border border-[#D8331F] shadow-sm ring-2 ring-[#D8331F]/20"
                          : "hover:bg-white/80 border border-transparent text-slate-700"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-sm font-bold flex items-center gap-2 ${isActive ? "text-[#D8331F]" : "text-slate-900"
                              }`}
                          >
                            <span className="text-xs">▪️</span>
                            <span>{tenet.label}</span>
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            0{idx + 1}
                          </span>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-600 leading-relaxed"
                          >
                            <p className="font-semibold text-slate-800">{tenet.tagline}</p>
                            <p className="mt-1">{tenet.desc}</p>
                            <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{tenet.metric}</span>
                            </div>
                          </motion.div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fast Stats Badge */}
              <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-[#101B3D] text-white p-5 rounded-2xl flex items-center justify-between shadow-md border border-slate-800">
                <div className="space-y-0.5">
                  <p className="text-[10px] font-mono uppercase text-[#FF8A6E] font-bold">
                    Ground Reality
                  </p>
                  <p className="text-sm font-bold text-white">Daily Production Deployments</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-emerald-400">&lt; 120ms</span>
                  <p className="text-[10px] text-slate-400">API Response</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Real Photos Showcase */}
            <div className="lg:col-span-7 space-y-6">
              {/* Active Tenet Large Showcase Card */}
              <div
                onClick={() => handleOpenLightboxByFile(TEAMWORK_TENETS[activeTenetIndex].image)}
                className="bg-slate-950 rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg group cursor-pointer relative"
              >
                <div className="relative aspect-[16/10] bg-slate-950">
                  <Image
                    src={TEAMWORK_TENETS[activeTenetIndex].image}
                    alt={TEAMWORK_TENETS[activeTenetIndex].label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Floating Date Badge */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-white bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      {TEAMWORK_TENETS[activeTenetIndex].date}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-slate-950/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  {/* Floating Caption Overlay */}

                </div>
              </div>

              {/* Supplementary Team Grid (4 Thumbnails with real team moments) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { file: "/team/2.jpeg", title: "Jaipur Fort Ramparts", tag: "Jaipur" },
                  { file: "/team/3.jpeg", title: "Summit Planning", tag: "Rajasthan" },
                  { file: "/team/5.jpeg", title: "Pink City Horizon", tag: "Summit" },
                  { file: "/team/37.jpeg", title: "Cafe Victory Win", tag: "Celebration" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleOpenLightboxByFile(item.file)}
                    className="relative aspect-[4/3] bg-slate-950 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md cursor-pointer group"
                  >
                    <Image
                      src={item.file}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-2.5 flex items-end justify-between">
                      <p className="text-[11px] font-bold text-white line-clamp-1">
                        {item.title}
                      </p>
                      <span className="text-[9px] font-mono text-slate-300 bg-slate-950/60 px-1.5 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id="office-jubilation"
        className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/90 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] px-3.5 py-1 bg-red-50 rounded-full border border-red-200/80 inline-block">
              // Live Atmosphere
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
              Office Jubilation: Celebrating Success &amp; Team Spirit
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              When monumental logistics release milestones are reached, terminals celebrate and applause erupts
              across our tech and operations bays.
            </p>
          </div>

          {/* Large Video Display Container */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
            <video
              ref={videoRef}
              src="/video1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Top Badge */}
            <div className="absolute top-5 left-5 pointer-events-none">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-white/20 text-white text-xs font-mono font-bold backdrop-blur-md shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span>AIshyp Engineering Jubilation • Spaze i-Tech Park</span>
              </span>
            </div>

            {/* Video Control Bar */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
              <div className="space-y-0.5">
                <p className="text-xs font-mono text-[#FF8A6E]">Live Team Spirit Reel</p>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Celebrating Product Milestones &amp; Merchant Wins
                </h4>
              </div>

              <button
                type="button"
                onClick={toggleVideo}
                className="px-4 py-2 rounded-xl bg-white/90 hover:bg-white text-slate-950 text-xs font-bold shadow-lg flex items-center gap-2 transition-transform hover:scale-105 cursor-pointer backdrop-blur-md"
              >
                {isPlayingVideo ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#D8331F]" />
                    <span>Pause Reel</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#D8331F]" />
                    <span>Play Reel</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Snapshot Highlight Strip below video */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              {
                file: "/team/9.jpeg",
                title: "Sprint Roadmap & Birthday Bash",
                desc: "Whiteboard architecture session & cake cutting.",
              },
              {
                file: "/team/10.jpeg",
                title: "Garden Cabana Squad Luncheon",
                desc: "Outdoor terrace lunch celebration at CyberHub.",
              },
              {
                file: "/team/24.jpeg",
                title: "Studio Ghibli Team Art Tribute",
                desc: "Custom anime illustration of our developer squad.",
              },
            ].map((card, i) => (
              <div
                key={i}
                onClick={() => handleOpenLightboxByFile(card.file)}
                className="bg-white border border-slate-200/90 rounded-2xl p-3 flex items-center gap-3.5 shadow-xs hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-950">
                  <Image
                    src={card.file}
                    alt={card.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#D8331F] transition-colors truncate">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section
        id="champagne-cheers"
        className="py-16 sm:py-24 bg-white border-b border-slate-200/90 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] px-3.5 py-1 bg-red-50 rounded-full border border-red-200/80 inline-block">
              // Landmark Milestones
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
              Champagne and Cheers: A Celebration to Remember
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Reflecting on milestones achieved, lessons mastered, and setting our sights on even grander horizons.
            </p>
          </div>

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT SIDE: 4-Photo Collage Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {CHEERS_GALLERY.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenLightboxByFile(item.image)}
                  className="relative aspect-[4/3] bg-slate-950 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg cursor-pointer group"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent p-3.5 flex flex-col justify-between">
                    <span className="self-end text-[10px] font-mono text-white bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-md">
                      {item.date}
                    </span>
                    <div>
                      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                        {item.occasion}
                      </span>
                      <p className="text-xs font-bold text-white line-clamp-1">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE: Narrative Text + 2 Photos Underneath */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <p>
                  In this moment of celebration, we cherish our achievements and look forward to an even brighter
                  future. Reflecting on the milestones we&apos;ve reached, it&apos;s a testament to our dedication,
                  hard work, and the incredible support of the thousands of merchants and franchise owners trusting AIshyp.
                </p>
                <p>
                  As we embark on the journey ahead, let&apos;s carry the lessons learned and the experiences
                  gained. Each challenge has been a stepping stone, propelling us toward new heights. Our success is
                  never individual — it is a collective triumph fueled by the high-agency collaborative spirit of a
                  remarkable team.
                </p>
                <p className="font-semibold text-slate-900 border-t border-slate-200 pt-3">
                  Together, we celebrate not only the accomplishments of today but also the potential that tomorrow
                  holds. Cheers to the memories we&apos;ve created and the ones yet to come – a toast to the
                  continuous pursuit of excellence and the bright future that awaits us.
                </p>
              </div>

              {/* 2 Featured Photos Directly Below Text */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => handleOpenLightboxByFile("/team/10.jpeg")}
                  className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
                >
                  <Image
                    src="/team/10.jpeg"
                    alt="Terrace Luncheon Squad"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-3 flex items-end justify-between">
                    <p className="text-xs font-bold text-white line-clamp-1">Terrace Luncheon Squad</p>
                    <span className="text-[10px] font-mono text-slate-300">CyberHub</span>
                  </div>
                </div>

                <div
                  onClick={() => handleOpenLightboxByFile("/team/33.jpeg")}
                  className="relative aspect-[16/10] bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer group"
                >
                  <Image
                    src="/team/33.jpeg"
                    alt="Wicker Lantern Cafe Jam"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-3 flex items-end justify-between">
                    <p className="text-xs font-bold text-white line-clamp-1">Wicker Cafe Ideation</p>
                    <span className="text-[10px] font-mono text-slate-300">Dec 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        id="festival-celebrations"
        className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/90 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F] shadow-2xs">
              <PartyPopper className="h-3.5 w-3.5 text-[#D8331F]" />
              <span>Festivals &amp; Traditions @ AIshyp</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {currentFestival.headline}
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              {currentFestival.description}
            </p>
          </div>

          {/* Festival Switcher Tabs & Info Tag */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm">
            {/* Festival Switcher Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
              {FESTIVAL_MEMORIES.map((fest) => {
                const isActive = activeFestivalKey === fest.festivalKey;
                return (
                  <button
                    key={fest.id}
                    type="button"
                    onClick={() => setActiveFestivalKey(fest.festivalKey)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${isActive
                      ? "bg-[#D8331F] text-white shadow-sm shadow-red-500/20"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                      }`}
                  >
                    <span>{fest.icon}</span>
                    <span>{fest.festivalName}</span>
                  </button>
                );
              })}
            </div>

            {/* Year & Vibe Badge */}
            <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
              <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>
                  {currentFestival.month} {currentFestival.year}
                </span>
              </span>
              <span className="text-xs font-bold text-[#D8331F] bg-red-50 px-3 py-1.5 rounded-xl border border-red-200">
                {currentFestival.vibe}
              </span>
            </div>
          </div>

          {/* Big Hero Image for the Active Festival */}
          <div
            onClick={() => handleOpenLightboxByFile(currentFestival.heroImage)}
            className="bg-slate-950 rounded-3xl border border-slate-200/90 overflow-hidden shadow-lg group cursor-pointer relative"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-slate-950">
              <Image
                src={currentFestival.heroImage}
                alt={currentFestival.headline}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md backdrop-blur-md border ${currentFestival.badgeColor}`}
                >
                  {currentFestival.icon} {currentFestival.festivalName}
                </span>
              </div>

              {/* Bottom Scrim */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-5 sm:p-6 flex items-end justify-between">
                <div>
                  <p className="text-xs font-mono text-[#FF8A6E]">{currentFestival.festivalName} Showcase</p>
                  <h3 className="text-sm sm:text-xl font-bold text-white">{currentFestival.headline}</h3>
                </div>
                <span className="text-xs font-bold text-white/90 bg-white/20 px-3 py-1 rounded-lg backdrop-blur-md">
                  Click to inspect
                </span>
              </div>
            </div>
          </div>

          {/* 3-Column Photo Grid Below Hero */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentFestival.gallery.map((card) => (
              <div
                key={card.id}
                onClick={() => handleOpenLightboxByFile(card.image)}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="text-[10px] font-mono font-bold text-white bg-slate-950/80 px-2.5 py-0.5 rounded backdrop-blur-md">
                      {card.date}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#D8331F] transition-colors line-clamp-1">
                    {card.title}
                  </h4>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>{currentFestival.festivalName}</span>
                    <span className="text-[#D8331F] font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
                      View HD →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section
        id="life-mosaic"
        className="py-16 sm:py-24 bg-white border-b border-slate-200/90 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#D8331F]">
              <Camera className="w-3.5 h-3.5 text-[#D8331F]" />
              <span>The Complete Archive • 40 Captured Moments</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Life @ AIshyp: Where Every Day is a Story
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Browse all 40 authentic snapshots from our hackathons, festive rangolis, mountain expeditions, and
              daily office banter. Click any photo to inspect in full HD.
            </p>
          </div>

          {/* Interactive Category Filter Pills + Search Input */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {GALLERY_CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setShowAllGrid(true);
                    }}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${isActive
                      ? "bg-[#101B3D] text-white shadow-md shadow-slate-900/20 scale-105"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/70"
                      }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? "text-[#FF8A6E]" : "text-slate-500"}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-white text-slate-600 border border-slate-200"
                        }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search & Count indicator */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-xl mx-auto pt-2">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search 40 photos (e.g. Jaipur, Diwali, Bowling, Cake)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#D8331F]/30 bg-slate-50/60"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>
              <span className="text-xs font-mono text-slate-500 shrink-0">
                Showing {visiblePhotos.length} of {filteredPhotos.length} moments
              </span>
            </div>
          </div>

          {/* 40-Photo Dynamic Responsive Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {visiblePhotos.map((photo, index) => {
                const isLandscape = photo.aspect === "landscape";
                return (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                    onClick={() => handleOpenLightboxByFile(photo.file)}
                    className={`group relative bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer ${isLandscape ? "col-span-2 row-span-1 aspect-[16/9]" : "col-span-1 row-span-1 aspect-[3/4]"
                      }`}
                  >
                    <Image
                      src={photo.file}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Scrim on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-white bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-xs">
                        #{photo.id}
                      </span>
                      <span className="text-[10px] font-bold text-white bg-red-600/80 backdrop-blur-md px-2 py-0.5 rounded-md shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {photo.tag}
                      </span>
                    </div>

                    {/* Bottom Details Drawer */}
                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#FF8A6E]">
                        <MapPin className="w-3 h-3 text-[#FF8A6E]" />
                        <span className="truncate">{photo.location}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-[#FF8A6E] transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 line-clamp-1 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                        {photo.caption}
                      </p>
                    </div>

                    {/* Expand icon on hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 backdrop-blur-md border border-white/20">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Toggle "View All 40 Photos" / "Show Fewer" */}
          {activeCategory === "all" && !searchQuery.trim() && (
            <div className="pt-6 text-center">
              <button
                type="button"
                onClick={() => setShowAllGrid(!showAllGrid)}
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#FF8A6E]" />
                <span>{showAllGrid ? "Show Fewer Moments (12)" : "Show All 40 Photos Archive"}</span>
              </button>
            </div>
          )}
        </div>
      </section>


      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#101B3D] via-slate-900 to-black text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-slate-800">
            {/* Ambient background blur */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#D8331F]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-[#FF8A6E]">
                <Flame className="w-3.5 h-3.5 text-[#FF8A6E]" />
                <span>WE ARE ALWAYS LOOKING FOR EXCEPTIONAL TALENT</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Want to Build the Future of Indian Logistics With Us?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Join a meritocratic, high-agency squad with zero corporate politics, extreme ownership, daily
                production deploys, and unforgettable team celebrations.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl bg-[#D8331F] hover:bg-[#c02816] text-white text-xs sm:text-sm font-bold shadow-lg transition-all inline-flex items-center gap-2"
                >
                  <span>Get in Touch with Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Company Story</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
