"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const projects = [
  {
    key: "audit",
    title: "Audit",
    description:
      "A detailed audit for a fictional toy company that addresses major security concerns with a thoughtful design.",
    href: "/projects/technical_reports/audit",
  },
  {
    key: "incident_report_ransomware",
    title: "Incident Report: Ransomware",
    description:
      "A detailed incident report for a ransomware attack on a fictional healthcare clinic.",
    href: "/projects/technical_reports/incident_report_ransomware",
  },
  {
    key: "incident_report_access error",
    title: "Incident Report: Access Error",
    description:
      "A detailed incident report for a user who was unable to access their account on a website that provides recipes.",
    href: "/projects/technical_reports/incident_report_access_error",
  },
  {
    key: "incident_report_syn_flood",
    title: "Incident Report: SYN Flood",
    description:
      "A detailed incident report for a SYN flood attack from a fictional Wireshark TCP/HTTP log.",
    href: "/projects/technical_reports/incident_report_syn_flood",
  },
  // Add more projects as needed
];

export default function TechnicalReportsIndex() {
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
      <div className="w-full max-w-3xl rounded-2xl border-2 border-black bg-white shadow-2xl overflow-hidden font-mono flex flex-col mx-auto relative mt-12 sm:mt-16">
        {/* Back Button inside terminal */}
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
            <span>total_projects: {projects.length}</span>
          </div>
        </div>
        {/* Terminal prompt divider */}
        <div className="px-6 py-2 text-xs text-black/50 border-b border-black/10 bg-neutral-50">
          <span className="text-black/40">project_directory: </span>
          /projects/technical_reports
        </div>
        {/* Projects List */}
        <div className="flex-1 w-full flex flex-col gap-6 p-6 md:p-10">
          {projects.map((proj) => (
            <motion.div
              key={proj.key}
              whileHover={{ y: -2, boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
              className="bg-neutral-50 border border-black/10 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between transition-all duration-200 group hover:border-black/20"
            >
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="text-lg text-black font-semibold mb-1">
                  {proj.title}
                </div>
                <div className="text-xs text-black/60 mb-2">
                  {proj.description}
                </div>
              </div>
              <div className="flex items-center md:ml-6 mt-2 md:mt-0 md:border-l md:border-black/10 md:pl-6">
                <button
                  onClick={() => router.push(proj.href)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/20 bg-black/90 text-white font-mono text-xs shadow-sm hover:bg-black hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-black/30"
                  style={{ minWidth: 0 }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block align-middle"
                  >
                    <path
                      d="M7 5l5 5-5 5"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="pr-1">View</span>
                </button>
              </div>
            </motion.div>
          ))}
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
