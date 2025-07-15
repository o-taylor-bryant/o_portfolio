"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AuditProjectDetail() {
  const [clock, setClock] = useState("");
  const [images] = useState([
    "/image/projects/Technical Reports/Audit/Botium Toys_Internal Audit_Taylor Bryant_Mockup.png",
  ]);
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
      <div className="w-full max-w-4xl rounded-2xl border-2 border-black bg-white shadow-2xl overflow-hidden font-mono flex flex-col mx-auto relative mt-12 sm:mt-16">
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
          /projects/technical_reports/audit
        </div>
        {/* Main Content */}
        <div className="flex-1 w-full flex flex-col md:flex-row gap-8 p-6 md:p-10">
          {/* Left Column: Metadata, PDF, Tags */}
          <div className="flex-1 flex flex-col gap-6 min-w-[220px] max-w-md">
            {/* Project Title */}
            <h1 className="text-xl font-bold text-black mb-1">Audit</h1>
            {/* Project Metadata */}
            <div className="flex flex-wrap gap-3 text-xs text-black/60 mb-2">
              <span>Date: [04/13/2025]</span>
              <span>Tags: [audit, audit_report, audit_project]</span>
            </div>
            {/* PDF Report Link */}
            <section>
              <h2 className="text-base font-semibold text-black mb-1">
                Full Report (PDF)
              </h2>
              <a
                href="https://drive.google.com/file/d/1k49Qtl3O8pXP7eicWljQvAIPurRcV-56/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-black text-white rounded-lg font-mono text-xs hover:bg-black/80 transition"
              >
                View PDF Report
              </a>
            </section>
            {/* Images Section - moved here */}
            <section>
              <h2 className="text-base font-semibold text-black mb-1">
                Images
              </h2>
              <div className="flex flex-wrap gap-4">
                {images.length === 0 ? (
                  <span className="text-black/40 text-xs">
                    [Add image URLs to display images here]
                  </span>
                ) : (
                  images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Audit Project Image ${idx + 1}`}
                      className="w-[500px] h-[320px] object-cover rounded border border-black/10"
                    />
                  ))
                )}
              </div>
            </section>
            {/* Optional: Add more metadata sections here */}
          </div>
          {/* Right Column: Description & More */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Description Section */}
            <section>
              <h2 className="text-base font-semibold text-black mb-1">
                Description
              </h2>
              <div className="bg-neutral-50 border border-black/10 rounded p-3 text-black/80 text-sm min-h-[60px]">
                <p className="mb-5">
                  Starting on this project in 2024 independently, I really
                  didn't have any direction. It was one of those cases where I
                  did the assignment instructions and just moved on without
                  really grasping the content. I decided to enhance my studies
                  and revisit the project to understand the standard auditing
                  process better.
                </p>
                <p className="mb-5">
                  I wanted to create an audit that reflected current
                  cybersecurity standards and my professional brand as well.
                  Using Affinity Designer, I created an audit template with a
                  structured design in mind. Beginning by outlining the main
                  focus on the audit for the fictional company, I reviewed each
                  highlighted objective. A risk and compliance summary was
                  provided in a more visual manner in order to communicate the
                  severity of problems better for the client. Each framework
                  listed contains a simple plan and summary in response to the
                  feedback in order to return to a proper state.
                </p>
                <p className="mb-2">
                  Improvements to how I represent other people through my words
                  were made by completing this project! Throughout the entire
                  assignment, I thought to myself, "How can I make this document
                  easier to understand for someone who isn't knowledgeable on
                  this topic?" I understood that multiple people would handle
                  this type of document, and everyone would have to acknowledge
                  the same exact problems and solutions.
                </p>
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
