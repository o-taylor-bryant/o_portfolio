"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faCertificate,
  faImages,
  faStickyNote,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const sections = [
  { key: "tryhackme", label: "Learning Platforms", icon: faTerminal },
  { key: "certificates", label: "Certificates", icon: faCertificate },
  { key: "gallery", label: "Gallery", icon: faImages },
  { key: "notes", label: "Notes", icon: faStickyNote },
  { key: "blog", label: "Blog", icon: faBlog },
];

// TerminalCertCard component for certificate progress display
function TerminalCertCard({ name, progress, status, order }) {
  // Color and label for status (monochrome only)
  const statusMap = {
    "In Progress": {
      color: "bg-black text-white",
      label: "In Progress",
      animate: "animate-pulse",
    },
    "Up Next": {
      color: "bg-gray-700 text-white",
      label: "Up Next",
      animate: "animate-bounce",
    },
    Planned: { color: "bg-gray-400 text-black", label: "Planned", animate: "" },
    Completed: {
      color: "bg-gray-900 text-white",
      label: "Completed",
      animate: "",
    },
  };
  const statusStyle = statusMap[status] || statusMap["Planned"];

  return (
    <div
      className="bg-white rounded-xl p-5 border border-black/10 flex flex-col gap-3 shadow-sm relative overflow-hidden min-h-[148px]"
      style={{ fontFamily: "Nunito, sans-serif" }}
    >
      {/* Title Row: icon + name, with wrapping for long names */}
      <div className="flex items-center gap-2 text-lg font-semibold text-black z-10 min-h-[56px]">
        <FontAwesomeIcon
          icon={faCertificate}
          className="text-black/60 flex-shrink-0"
        />
        <span className="break-words line-clamp-2 block w-full" title={name}>
          {name}
        </span>
      </div>
      {/* Progress Bar Row: always aligned */}
      <div className="flex items-center gap-3 mt-2 z-10 min-h-[32px]">
        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden border border-black/10 relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full bg-black rounded-full relative"
            style={{ minWidth: progress > 0 ? "1.5rem" : 0 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute top-0 left-0 h-full w-full"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, #fff3 50%, transparent 100%)",
              }}
            />
          </motion.div>
        </div>
        <span className="text-xs text-black/60 w-16 text-right">
          {progress}%
        </span>
      </div>
      {/* Status and Order Row: always aligned */}
      <div className="flex items-center gap-2 mt-1 z-10 min-h-[24px]">
        <motion.span
          className={`px-2 py-0.5 rounded-full text-xs font-bold ${statusStyle.color} ${statusStyle.animate}`}
          initial={{ scale: 1 }}
          animate={
            status === "In Progress"
              ? { scale: [1, 1.1, 1] }
              : status === "Up Next"
              ? { y: [0, -3, 0] }
              : { scale: 1 }
          }
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          {statusStyle.label}
        </motion.span>
        <motion.span
          className="text-xs text-black/30 ml-auto"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 * order }}
        >
          Order: {order}
        </motion.span>
      </div>
    </div>
  );
}

export default function LearningProgressTerminal() {
  const [activeSection, setActiveSection] = useState("tryhackme");
  const router = useRouter();
  const [clock, setClock] = useState(() =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setClock(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center pt-16 pb-8"
      style={{ background: "rgb(230, 230, 230)" }}
    >
      <div
        className="w-full max-w-6xl rounded-2xl border-2 border-black bg-white shadow-2xl overflow-hidden flex flex-col justify-between items-stretch mx-auto relative"
        style={{ fontFamily: "Nunito, sans-serif" }}
      >
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
              learning_progress v1.0
            </span>
            <span>user: taylor</span>
            <span>{clock}</span>
            <span>sections: 5</span>
          </div>
        </div>
        {/* Current Directory */}
        <div className="px-6 py-2 text-xs text-black/50 border-b border-black/10 bg-neutral-50">
          <span className="text-black/40">current_directory: </span>
          /projects/learning_progress
        </div>
        {/* Main Content */}
        <div className="flex flex-row min-h-[500px]">
          {/* Sidebar Navigation */}
          <nav className="w-40 bg-neutral-50 border-r border-black/10 flex flex-col py-6 gap-2">
            {sections.map((section) => (
              <button
                key={section.key}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all
                  ${
                    activeSection === section.key
                      ? "bg-neutral-200 text-black font-bold shadow"
                      : "text-black/60 hover:bg-neutral-100 hover:text-black"
                  }
                `}
                onClick={() => setActiveSection(section.key)}
                aria-label={section.label}
              >
                <FontAwesomeIcon icon={section.icon} />
                {section.label}
              </button>
            ))}
          </nav>
          {/* Section Content */}
          <div className="flex-1 p-8 pt-16 overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeSection === "tryhackme" && (
                <motion.div
                  key="tryhackme"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faTerminal} /> Learning Platforms
                  </h2>
                  <p className="text-black/60 mb-6">
                    Using multiple platforms, I&apos;m able to enhance my skills
                    in multiple areas through hands-on practice and structured
                    learning paths.
                  </p>

                  {/* Learning Platforms Grid */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* TryHackMe Card */}
                    <div className="bg-neutral-50 rounded-xl border border-black/10 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faTerminal}
                            className="text-white text-lg"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            TryHackMe
                          </h3>
                          <p className="text-xs text-black/50">
                            Hands-on Cybersecurity Labs
                          </p>
                        </div>
                      </div>
                      <p className="text-black/60 text-sm mb-4 leading-relaxed">
                        TryHackMe provides hands-on experience using simulated
                        industry tools used in the tech world! These modules
                        contain official certification-aligned content. Come
                        take a look at my progress - maybe I&apos;ve learned
                        something you are searching for!
                      </p>
                      <div className="bg-white rounded-lg border border-black/10 p-4 mb-4">
                        <iframe
                          src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4886835"
                          style={{
                            border: "none",
                            width: "100%",
                            height: "200px",
                            minWidth: "400px",
                          }}
                          title="TryHackMe Badge"
                          loading="lazy"
                        ></iframe>
                      </div>
                      <div className="flex items-center justify-between text-xs text-black/40">
                        <span>Active Learning Platform</span>
                        <span>•</span>
                        <span>Certification Prep</span>
                      </div>
                    </div>

                    {/* Microsoft Learn Card */}
                    <div className="bg-neutral-50 rounded-xl border border-black/10 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon
                            icon={faCertificate}
                            className="text-white text-lg"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            Microsoft Learn
                          </h3>
                          <p className="text-xs text-black/50">
                            Official Microsoft Training
                          </p>
                        </div>
                      </div>
                      <p className="text-black/60 text-sm mb-4 leading-relaxed">
                        Microsoft Learn provides comprehensive training modules
                        for various Microsoft tools and job-aligned
                        certifications. Check out my learning transcript and
                        progress!
                      </p>
                      <div className="bg-white rounded-lg border border-black/10 p-4 mb-4 flex items-center justify-center h-[180px]">
                        <div className="text-center">
                          <FontAwesomeIcon
                            icon={faCertificate}
                            className="text-4xl text-black/20 mb-3"
                          />
                          <p className="text-sm text-black/60 mb-3">
                            Learning Transcript Available
                          </p>
                          <a
                            href="https://learn.microsoft.com/en-us/users/o-taylor-bryant/transcript/dlrlxtezqe06ele?source=docs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-xs font-mono hover:bg-black/80 transition-colors duration-200"
                          >
                            <FontAwesomeIcon icon={faCertificate} />
                            View Profile
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-black/40">
                        <span>Official Training</span>
                        <span>•</span>
                        <span>Certification Paths</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeSection === "certificates" && (
                <motion.div
                  key="certificates"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCertificate} /> Certificates &
                    Study Progress
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Google Cybersecurity Professional Certificate */}
                    <TerminalCertCard
                      name="Google Cybersecurity Professional Certificate"
                      progress={100}
                      status="Completed"
                      order={1}
                    />
                    {/* CompTIA A+ Certification Core 1 (220-1101) and Core 2 (220-1102) */}
                    <TerminalCertCard
                      name="CompTIA A+ Certification Core 1 (220-1101) and Core 2 (220-1102)"
                      progress={35}
                      status="In Progress"
                      order={2}
                    />
                  </div>
                </motion.div>
              )}
              {activeSection === "gallery" && (
                <motion.div
                  key="gallery"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCertificate} /> Certificate Gallery
                  </h2>
                  <p className="text-black/60 mb-6">
                    View my Google Cybersecurity Professional Certificate and
                    other achievements.
                  </p>
                  <div className="flex flex-col items-center space-y-6">
                    {/* Certificate PDF Display */}
                    <div className="w-full max-w-4xl bg-neutral-50 rounded-xl border border-black/10 p-6 shadow-sm">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-black flex items-center gap-2 mb-2">
                          <FontAwesomeIcon
                            icon={faCertificate}
                            className="text-black/60"
                          />
                          Google Cybersecurity Professional Certificate
                        </h3>
                        <p className="text-sm text-black/70 leading-relaxed">
                          This foundational certificate provides comprehensive
                          training in cybersecurity fundamentals, including
                          threat detection, network security, incident response,
                          and risk management. It covers essential skills for
                          protecting organizations from cyber threats and
                          establishing robust security practices. Earned through
                          Merit America&apos;s intensive program.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg border border-black/10 overflow-hidden">
                        <Image
                          src="/image/projects/Screenshots/Google Cybersecurity Professional Certificate_LBDZEFRY5S88_Taylor Bryant-1.png"
                          alt="Google Cybersecurity Professional Certificate"
                          className="w-full h-auto object-contain"
                          width={800}
                          height={600}
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-sm text-black/60">
                          Completed 2025 • Merit America Program
                        </p>
                      </div>
                    </div>

                    {/* CompTIA A+ Objectives Checklist */}
                    <div
                      className="w-full max-w-4xl bg-neutral-50 rounded-xl border border-black/10 p-6 shadow-sm"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-black flex items-center gap-2 mb-2">
                          <FontAwesomeIcon
                            icon={faCertificate}
                            className="text-black/60"
                          />
                          CompTIA A+ Objectives Mastery
                        </h3>
                        <p className="text-sm text-black/70 leading-relaxed">
                          Tracking my progress through the CompTIA A+
                          certification objectives. Each checked item represents
                          a concept I've mastered through hands-on practice and
                          study.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Core 1 Objectives */}
                        <div className="bg-white rounded-lg border border-black/10 p-4">
                          <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            Core 1 (220-1101) - Hardware & Networking
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-black font-bold">✓</span>
                              <span className="text-black font-medium">
                                Mobile device hardware
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Laptop hardware components
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/60">◐</span>
                              <span className="text-black/60">
                                Networking fundamentals
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Troubleshooting methodology
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Printer configuration
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Virtualization concepts
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Core 2 Objectives */}
                        <div className="bg-white rounded-lg border border-black/10 p-4">
                          <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            Core 2 (220-1102) - Operating Systems & Security
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Windows installation & configuration
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Linux command line basics
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Security best practices
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                macOS troubleshooting
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Scripting fundamentals
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Change management
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-xs text-black/50">
                          Legend: ✓ Mastered • ◐ In Progress • ○ Planned
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeSection === "notes" && (
                <motion.div
                  key="notes"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faStickyNote} /> Learning Notes
                  </h2>
                  <div className="space-y-3">
                    <div className="bg-neutral-50 rounded-lg p-4 border border-black/10">
                      <span className="text-black font-semibold"></span>
                      <p className="text-black/70 text-sm mt-1"></p>
                    </div>
                    <div className="bg-neutral-50 rounded-lg p-4 border border-black/10">
                      <span className="text-black font-semibold"></span>
                      <p className="text-black/70 text-sm mt-1"></p>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeSection === "blog" && (
                <motion.div
                  key="blog"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faBlog} /> Lil&apos; Blog
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-neutral-50 rounded-xl p-6 border border-black/10">
                      <span className="text-black/40 text-xs">07-16-2025</span>
                      <h3 className="text-lg text-black font-semibold mt-1 mb-2">
                        Choosing a path...
                      </h3>
                      <p className="text-black/70 text-sm">
                        After completing my Google Cybersecurity certificate, I
                        realized I needed a stronger foundation in IT
                        fundamentals. That's why I'm now diving deep into
                        CompTIA A+ - it's giving me the hands-on hardware and
                        operating system knowledge that every IT professional
                        needs. The practical labs are challenging but so
                        rewarding when everything clicks!
                      </p>
                    </div>
                    <div className="bg-neutral-50 rounded-xl p-6 border border-black/10">
                      <span className="text-black/40 text-xs"></span>
                      <h3 className="text-lg text-black font-semibold mt-1 mb-2"></h3>
                      <p className="text-black/70 text-sm"></p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Footer */}
        <div className="px-6 py-2 bg-neutral-200 border-t border-black/10 text-center text-xs text-black/40 relative flex items-center justify-center">
          <span>
            © {new Date().getFullYear()} Taylor Terminal • Your interactive way
            to view my learning.
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
