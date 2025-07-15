"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function IncidentReportRansomware() {
  const [clock, setClock] = useState("");
  // No images for this report
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
      <div className="w-full max-w-3xl rounded-2xl border-2 border-black bg-white shadow-2xl overflow-hidden font-mono flex flex-col mx-auto relative mt-12 sm:mt-16">
        {/* Back Button inside terminal */}
        <div className="flex items-center justify-start px-6 pt-4 pb-2">
          <button
            onClick={() => router.push("/projects/technical_reports")}
            aria-label="Back to Technical Reports"
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
        {/* Terminal prompt divider */}
        <div className="px-6 py-2 text-xs text-black/50 border-b border-black/10 bg-neutral-50">
          <span className="text-black/40">project_directory: </span>
          /projects/technical_reports/incident_report_ransomware
        </div>
        {/* Main Content */}
        <div className="flex-1 w-full flex flex-col md:flex-row gap-8 p-6 md:p-10">
          {/* Left Column: Metadata, PDF, Tags */}
          <div className="flex-1 flex flex-col gap-6 min-w-[220px] max-w-md">
            {/* Project Title */}
            <h1 className="text-xl font-bold text-black mb-1">
              Incident Report : Ransomware
            </h1>
            {/* Project Metadata */}
            <div className="flex flex-wrap gap-3 text-xs text-black/60 mb-2">
              <span>Date: [07/03/2025]</span>
              <span>
                Tags: [incident_report, ransomware, incident_report_ransomware]
              </span>
            </div>
            {/* PDF Report Link */}
            <section>
              <h2 className="text-base font-semibold text-black mb-1">
                Full Report (PDF)
              </h2>
              <a
                href="https://drive.google.com/file/d/1vKomaZupc-GFWs8h9S-1ofnaiNST7UOk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-black text-white rounded-lg font-mono text-xs hover:bg-black/80 transition"
              >
                View PDF Report
              </a>
              {/* Replace '#' with the actual PDF link */}
            </section>
            {/* Optional: Add more metadata sections here */}
          </div>
          {/* Right Column: Description & Images */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Description Section */}
            <section>
              <h2 className="text-base font-semibold text-black mb-1">
                Description
              </h2>
              <div className="bg-neutral-50 border border-black/10 rounded p-3 text-black/80 text-sm min-h-[60px]">
                {/* Paste your Notion description here */}
                This project was a great way to learn about each step in
                addressing an incident like this and how to form a proper
                report. I was able to learn how to make the best recommendations
                for the client to return to a safe state.
              </div>
            </section>
            {/* Images Section */}
            <section>
              <h2 className="text-base font-semibold text-black mb-1"></h2>
              <div className="flex items-center justify-center min-h-[120px]">
                <motion.svg
                  width="180"
                  height="180"
                  viewBox="0 0 180 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  style={{}}
                >
                  <rect
                    x="10"
                    y="10"
                    width="160"
                    height="160"
                    rx="32"
                    fill="#222"
                  />
                  <text
                    x="50%"
                    y="56%"
                    textAnchor="middle"
                    fontSize="110"
                    fontWeight="bold"
                    fill="#fff"
                    fontFamily="monospace"
                    dominantBaseline="middle"
                  >
                    $
                  </text>
                </motion.svg>
              </div>
            </section>
            {/* Optional: Add more sections as needed */}
            {/* Example: Lessons Learned, Tools Used, etc. */}
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
