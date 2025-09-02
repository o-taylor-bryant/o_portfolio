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
  { key: "tryhackme", label: "TryHackMe Progress", icon: faTerminal },
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
    <div className="bg-white rounded-xl p-5 border border-black/10 flex flex-col gap-3 shadow-sm font-mono relative overflow-hidden min-h-[148px]">
      {/* Scanline shimmer overlay for fun terminal effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.08 }}
        animate={{ opacity: [0.08, 0.16, 0.08] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{
          background:
            "repeating-linear-gradient(180deg, #0001 0 2px, transparent 2px 8px)",
        }}
      />
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
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "rgb(230, 230, 230)" }}
    >
      <div className="w-full max-w-4xl rounded-2xl border-2 border-black bg-white shadow-2xl overflow-hidden font-mono flex flex-col justify-between items-stretch mx-auto relative">
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
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all font-mono
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
          <div className="flex-1 p-8 overflow-y-auto">
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
                    <FontAwesomeIcon icon={faTerminal} /> TryHackMe Progress
                  </h2>
                  <p className="text-black/60 mb-4">
                    TryHackMe is great platform that provides me with hands-on
                    experience using simulated industry tools used in the tech
                    world! These modules contain official certification-aligned
                    content. Come take a look at my progress - maybe I&apos;ve
                    learned something you are searching for!
                  </p>
                  <div className="flex flex-col items-center">
                    <iframe
                      src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4886835"
                      style={{
                        border: "none",
                        width: "340px",
                        height: "200px",
                      }}
                      title="TryHackMe Badge"
                      loading="lazy"
                    ></iframe>
                    <span className="mt-2 text-xs text-black/40">
                      @taylor_tryhackme
                    </span>
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
                    {/* Microsoft SC-900 */}
                    <TerminalCertCard
                      name="Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)"
                      progress={0}
                      status="Up Next"
                      order={2}
                    />
                    {/* CompTIA A+ Certification Core 1 (220-1101) and Core 2 (220-1102) */}
                    <TerminalCertCard
                      name="CompTIA A+ Certification Core 1 (220-1101) and Core 2 (220-1102)"
                      progress={0}
                      status="Planned"
                      order={3}
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

                    {/* Additional Certificate Placeholder */}
                    <div className="w-full max-w-4xl bg-neutral-50 rounded-xl border border-black/10 p-6 shadow-sm opacity-60">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-black/60 flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCertificate}
                            className="text-black/40"
                          />
                          Microsoft SC-900 Certificate
                        </h3>
                        <span className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg text-sm font-mono">
                          Coming Soon
                        </span>
                      </div>
                      <div className="bg-gray-100 rounded-lg border border-gray-200 h-[600px] flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <FontAwesomeIcon
                            icon={faCertificate}
                            className="text-4xl mb-2"
                          />
                          <p className="text-sm">Certificate in progress...</p>
                        </div>
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
                        Cybersecurity fundamentals felt right for me to pursue
                        first because I like a challenge. It took me a while to
                        see that the tech field is very open about having many
                        avenues you can venture down. I think after cyber,
                        I&apos;d like to get something more foundational in IT
                        Support and IAM to become more well-rounded.
                        *Sigh*...This is a lot in such a short amount of time.
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
