"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Unique, creative SVG icons for each category
const categoryIcons = [
  // Technical Reports: Document icon
  ({ hovered }) => (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: hovered ? -4 : 0, scale: hovered ? 1.08 : 1 }}
    >
      <rect x="7" y="6" width="22" height="26" rx="4" fill="#222" />
      <rect
        x="11"
        y="12"
        width="14"
        height="2"
        rx="1"
        fill="#fff"
        fillOpacity="0.7"
      />
      <rect
        x="11"
        y="17"
        width="10"
        height="2"
        rx="1"
        fill="#fff"
        fillOpacity="0.5"
      />
      <rect
        x="11"
        y="22"
        width="8"
        height="2"
        rx="1"
        fill="#fff"
        fillOpacity="0.3"
      />
    </motion.svg>
  ),
  // IT Tools & Tasks: Wrench icon
  ({ hovered }) => (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: hovered ? -20 : 0, scale: hovered ? 1.08 : 1 }}
    >
      <circle cx="18" cy="18" r="16" fill="#222" />
      <rect
        x="16"
        y="8"
        width="4"
        height="14"
        rx="2"
        fill="#fff"
        fillOpacity="0.7"
        transform="rotate(45 18 15)"
      />
      <rect
        x="17"
        y="22"
        width="2"
        height="6"
        rx="1"
        fill="#fff"
        fillOpacity="0.5"
      />
    </motion.svg>
  ),
  // Security Tools & Tasks: Shield icon
  ({ hovered }) => (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ scale: hovered ? 1.12 : 1 }}
    >
      <path
        d="M18 6L30 10V18C30 25 24 29 18 32C12 29 6 25 6 18V10L18 6Z"
        fill="#222"
      />
      <path
        d="M18 10V27"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="18" cy="16" r="2" fill="#fff" opacity="0.7" />
    </motion.svg>
  ),
  // Learning Progress: Book icon
  ({ hovered }) => (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: hovered ? -3 : 0, scale: hovered ? 1.08 : 1 }}
    >
      <rect x="7" y="10" width="10" height="16" rx="2" fill="#222" />
      <rect x="19" y="10" width="10" height="16" rx="2" fill="#222" />
      <rect
        x="9"
        y="13"
        width="6"
        height="2"
        rx="1"
        fill="#fff"
        fillOpacity="0.7"
      />
      <rect
        x="21"
        y="13"
        width="6"
        height="2"
        rx="1"
        fill="#fff"
        fillOpacity="0.7"
      />
    </motion.svg>
  ),
];

const categories = [
  {
    key: "technical_reports",
    name: "Technical_Reports",
    description:
      "Organized reports and documentation in response to real-world scenarios of various severities.",
    href: "/projects/technical_reports",
  },
  {
    key: "it_tools_tasks",
    name: "IT_Tools_&_Tasks",
    description:
      "Projects related to tasks used in troubleshooting and support.",
    href: "/projects/it_tools_tasks",
  },
  {
    key: "security_tools_tasks",
    name: "Security_Tools_&_Tasks",
    description:
      "Projects related to tasks used in security response and threat detection.",
    href: "/projects/security_tools_tasks",
  },
  {
    key: "learning_progress",
    name: "Learning_Progress",
    description:
      "Come see what I've learned so far and what I'm currently getting into!",
    href: "/projects/learning_progress",
  },
];

export default function ProjectsTerminal() {
  const [clock, setClock] = useState("");
  const [hovered, setHovered] = useState(-1);
  const router = useRouter();

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setClock(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "rgb(230, 230, 230)" }}
    >
      <div className="w-full max-w-4xl h-[680px] md:h-[600px] rounded-2xl border-2 border-black bg-white shadow-2xl overflow-hidden font-mono flex flex-col justify-between items-stretch mx-auto relative">
        {/* Back Button inside terminal */}
        <div className="flex items-center justify-start px-6 pt-4 pb-2">
          <button
            onClick={() => router.push("/")}
            aria-label="Back to Home"
            className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/5 border border-black/10 text-black/60 hover:bg-black/10 transition text-xs font-mono"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 16l-5-5 5-5"
                stroke="#222"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
        </div>
        {/* Terminal Header Bar (widgets/taskbar) */}
        <div className="flex items-center justify-center px-6 py-2 bg-neutral-200 border-b border-black/10 text-xs text-black/70 w-full">
          <div className="flex flex-wrap items-center gap-6 justify-center w-full">
            <span>system: windows_11</span>
            <span>shell: powershell</span>
            <span>theme: modern_light</span>
            <span className="font-bold text-black/80">
              taylor_projects v2.0
            </span>
            <span>user: guest</span>
            <span>{clock}</span>
            <span>total_projects: 4</span>
          </div>
        </div>
        {/* Current Directory */}
        <div className="px-6 py-2 text-xs text-black/50 border-b border-black/10">
          <span className="text-black/40">current_directory: </span>
          /projects/portfolio/
        </div>
        {/* Categories Grid */}
        <div className="flex-1 flex flex-col justify-center items-center w-full">
          <div className="w-full h-full grid grid-cols-1 grid-rows-4 gap-4 p-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-6 sm:p-8">
            {categories.map((cat, idx) => {
              const Icon = categoryIcons[idx];
              return (
                <motion.div
                  key={cat.key}
                  whileHover={{
                    y: -2,
                    boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
                  }}
                  className="bg-neutral-50 border border-black/10 rounded-xl p-5 flex flex-col items-center transition-all duration-200 group hover:border-black/20 cursor-pointer"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(-1)}
                  onClick={() => router.push(cat.href)}
                  tabIndex={0}
                  role="button"
                  aria-label={cat.name}
                >
                  <Icon hovered={hovered === idx} />
                  <span className="mt-3 text-base text-black font-semibold mb-2 text-center w-full">
                    {cat.name}
                  </span>
                  <span className="text-xs text-black/60 text-center w-full">
                    {cat.description}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Footer */}
        <div className="px-6 py-2 bg-neutral-200 border-t border-black/10 text-center text-xs text-black/40 relative flex items-center justify-center">
          <span>
            © 2025 Taylor Terminal • Your interactive way to view my work.
          </span>
          <span
            className="ml-2 select-none pointer-events-none align-middle"
            style={{ position: "relative", top: "1px" }}
          >
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              style={{ display: "inline-block", verticalAlign: "middle" }}
            >
              {/* Blinking terminal cursor: underscore */}
              <rect x="3" y="12" width="10" height="2" rx="1" fill="#222" />
            </motion.svg>
          </span>
        </div>
      </div>
    </div>
  );
}
