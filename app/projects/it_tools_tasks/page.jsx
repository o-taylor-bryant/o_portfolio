"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ITToolsTasks() {
  const [clock, setClock] = useState("");
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
      <motion.div
        className="w-full max-w-4xl h-[680px] md:h-[600px] rounded-2xl border-2 border-black bg-white shadow-2xl overflow-hidden font-mono flex flex-col justify-between items-stretch mx-auto relative"
        animate={{
          boxShadow: [
            "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.1)",
            "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Back Button */}
        <div className="flex items-center justify-start px-6 pt-4 pb-2">
          <button
            onClick={() => router.push("/projects")}
            aria-label="Back to Projects"
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

        {/* Terminal Header Bar */}
        <div className="flex items-center justify-center px-6 py-2 bg-neutral-200 border-b border-black/10 text-xs text-black/70 w-full">
          <div className="flex flex-wrap items-center gap-6 justify-center w-full">
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              system: windows_11
            </motion.span>
            <span>shell: powershell</span>
            <span>theme: modern_light</span>
            <motion.span
              className="font-bold text-black/80"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              it_tools_tasks v1.0
            </motion.span>
            <span>user: guest</span>
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {clock}
            </motion.span>
            <span>status: coming_soon</span>
          </div>
        </div>

        {/* Current Directory */}
        <div className="px-6 py-2 text-xs text-black/50 border-b border-black/10">
          <span className="text-black/40">current_directory: </span>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            /projects/it_tools_tasks/
          </motion.span>
        </div>

        {/* Coming Soon Content */}
        <div className="flex-1 flex flex-col justify-center items-center w-full">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Wrench Icon */}
            <motion.div
              className="mx-auto"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              </svg>
            </motion.div>

            {/* Coming Soon Text */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl font-bold text-black"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Coming Soon!
              </motion.h1>
              <motion.p
                className="text-lg text-black/70 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                IT Tools & Tasks projects are currently in development. Check
                back soon for troubleshooting guides, system administration
                tools, and support methodologies!
              </motion.p>
            </div>

            {/* Progress Bar */}
            <motion.div
              className="w-64 h-2 bg-black/10 rounded-full mx-auto overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="h-full bg-black rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "65%" }}
                transition={{ duration: 2, delay: 1.5 }}
              />
            </motion.div>

            <motion.p
              className="text-sm text-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Development Progress: 65%
            </motion.p>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="px-6 py-2 bg-neutral-200 border-t border-black/10 text-center text-xs text-black/40 relative flex items-center justify-center">
          <motion.span
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2025 Taylor Terminal • IT Tools & Tasks - Coming Soon
          </motion.span>
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
              <rect x="3" y="12" width="10" height="2" rx="1" fill="#222" />
            </motion.svg>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
