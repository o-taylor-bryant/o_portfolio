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
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const sections = [
  { key: "tryhackme", label: "Learning Platforms", icon: faTerminal },
  { key: "certificates", label: "Certificates", icon: faCertificate },
  { key: "gallery", label: "Gallery", icon: faImages },
  { key: "write-ups", label: "Write-Ups", icon: faStickyNote },
  { key: "roadmap", label: "Career Roadmap", icon: faRoute },
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
                          a concept I&apos;ve mastered through hands-on practice
                          and study.
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Core 1 Objectives */}
                        <div className="bg-white rounded-lg border border-black/10 p-4">
                          <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            Core 1 (220-1101) - A+ Core 1 (V15)
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-black font-bold">✓</span>
                              <span className="text-black font-medium">
                                Mobile devices (13%)
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/60">◐</span>
                              <span className="text-black/60">
                                Networking (23%)
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Hardware (25%)
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Virtualization and cloud computing (11%)
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Hardware and network troubleshooting (28%)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Core 2 Objectives */}
                        <div className="bg-white rounded-lg border border-black/10 p-4">
                          <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-black rounded-full"></span>
                            Core 2 (220-1102) - A+ Core 2 (V15)
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Operating systems (28%)
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Security (28%)
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Software troubleshooting (23%)
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-black/30">○</span>
                              <span className="text-black/40">
                                Operational procedures (21%)
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
              {activeSection === "write-ups" && (
                <motion.div
                  key="write-ups"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faStickyNote} /> Objective Write-Ups
                  </h2>
                  <p className="text-black/70 text-sm mb-4">
                    Basic understanding write-ups for CompTIA A+ objectives that
                    don&apos;t have practical projects. These write-ups cover
                    fundamental concepts and knowledge areas.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-neutral-50 rounded-lg p-4 border border-black/10">
                      <span className="text-black font-semibold">
                        Mobile Devices (13%) - Coming Soon
                      </span>
                      <p className="text-black/70 text-sm mt-1">
                        Write-up covering mobile device hardware setup,
                        accessory options, network setup, and troubleshooting
                        concepts.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
              {activeSection === "roadmap" && (
                <motion.div
                  key="roadmap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                    <FontAwesomeIcon icon={faRoute} /> Career Roadmap
                  </h2>
                  <p className="text-black/70 text-sm mb-6">
                    My career journey and goals. Where I&apos;ve been, where
                    I&apos;m going, and what I&apos;m working towards.
                  </p>

                  {/* Visual Roadmap Timeline */}
                  <div className="relative bg-white rounded-xl border-2 border-black/20 p-6 overflow-hidden">
                    {/* Progress Line Background */}
                    <div
                      className="absolute left-8 top-0 bottom-0 w-0.5 bg-black/20"
                      style={{ height: "100%" }}
                    />
                    {/* Animated Progress Line */}
                    <motion.div
                      className="absolute left-8 top-0 w-0.5 bg-black"
                      initial={{ height: 0 }}
                      animate={{ height: "33%" }}
                      transition={{
                        duration: 1.5,
                        delay: 0.3,
                        ease: "easeOut",
                      }}
                      style={{ transformOrigin: "top" }}
                    />

                    <div className="relative space-y-8">
                      {/* Current Position Node */}
                      <motion.div
                        className="relative flex items-start gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="relative z-10 flex-shrink-0">
                          <motion.div
                            className="w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg"
                            animate={{
                              scale: [1, 1.15, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(0,0,0,0.4)",
                                "0 0 0 8px rgba(0,0,0,0)",
                                "0 0 0 0 rgba(0,0,0,0)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute left-1/2 top-6 w-0.5 h-8 bg-black/20 transform -translate-x-1/2"
                            initial={{ height: 0 }}
                            animate={{ height: 32 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                          />
                        </div>
                        <motion.div
                          className="flex-1 bg-neutral-50 rounded-lg border-2 border-black p-5 shadow-sm hover:shadow-md transition-shadow"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <motion.span
                              className="text-xs font-bold text-black bg-black/10 px-2 py-1 rounded"
                              animate={{ opacity: [1, 0.7, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              NOW
                            </motion.span>
                            <span className="text-sm font-semibold text-black">
                              WHERE I AM NOW
                            </span>
                          </div>
                          <div className="space-y-3 mt-3">
                            <div>
                              <p className="text-xs text-black/50 font-medium mb-1">
                                Current Role / Position:
                              </p>
                              <p className="text-sm text-black/70 min-h-[20px]">
                                Web Search Evaluator for TELUS Digital
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-black/50 font-medium mb-1">
                                Key Skills I&apos;m Building:
                              </p>
                              <p className="text-sm text-black/70 min-h-[20px]">
                                Computer Hardware, Software, Security, and
                                Networking
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-black/50 font-medium mb-1">
                                Current Focus:
                              </p>
                              <p className="text-sm text-black/70 min-h-[20px]">
                                Studying for the CompTIA A+ certification and
                                filling my portfolio with projects!
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Short-term Goals Node */}
                      <motion.div
                        className="relative flex items-start gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="relative z-10 flex-shrink-0">
                          <motion.div
                            className="w-6 h-6 bg-black/30 rounded-full border-4 border-white shadow-lg"
                            animate={{
                              opacity: [0.3, 0.5, 0.3],
                              scale: [1, 1.05, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute left-1/2 top-6 w-0.5 h-8 bg-black/20 transform -translate-x-1/2"
                            initial={{ height: 0 }}
                            animate={{ height: 32 }}
                            transition={{ duration: 0.5, delay: 1 }}
                          />
                        </div>
                        <motion.div
                          className="flex-1 bg-neutral-50 rounded-lg border-2 border-black/30 p-5 shadow-sm"
                          whileHover={{
                            scale: 1.02,
                            borderColor: "rgba(0,0,0,0.4)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold text-black/60 bg-black/10 px-2 py-1 rounded">
                              6-12M
                            </span>
                            <span className="text-sm font-semibold text-black">
                              SHORT-TERM GOALS
                            </span>
                          </div>
                          <div className="space-y-3 mt-3">
                            <div>
                              <p className="text-xs text-black/50 font-medium mb-1">
                                Certifications to Complete:
                              </p>
                              <p className="text-sm text-black/70 min-h-[20px]">
                                CompTIA A+ and smaller certifications that focus
                                on specific areas of technology.
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-black/50 font-medium mb-1">
                                Skills to Master:
                              </p>
                              <p className="text-sm text-black/70 min-h-[20px]">
                                I want to be well-rounded about computers and
                                network structures. This is my first step in
                                order to build a good foundation to advance on
                                career-wise.{" "}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-black/50 font-medium mb-1">
                                Target Roles / Positions:
                              </p>
                              <p className="text-sm text-black/70 min-h-[20px]">
                                I&apos;m targeting roles that require a good
                                understanding of computers and networks, with a
                                focus on continuous learning and improvement
                                within the same company!
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Long-term Vision Node */}
                      <motion.div
                        className="relative flex items-start gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <div className="relative z-10 flex-shrink-0">
                          <motion.div
                            className="w-6 h-6 bg-black/20 rounded-full border-4 border-white shadow-lg"
                            animate={{
                              opacity: [0.2, 0.35, 0.2],
                              scale: [1, 1.03, 1],
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute left-1/2 top-6 w-0.5 h-8 bg-black/20 transform -translate-x-1/2"
                            initial={{ height: 0 }}
                            animate={{ height: 32 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                          />
                        </div>
                        <motion.div
                          className="flex-1 bg-neutral-50 rounded-lg border-2 border-black/30 p-5 shadow-sm"
                          whileHover={{
                            scale: 1.02,
                            borderColor: "rgba(0,0,0,0.4)",
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold text-black/60 bg-black/10 px-2 py-1 rounded">
                              2-5Y
                            </span>
                            <span className="text-sm font-semibold text-black">
                              LONG-TERM VISION
                            </span>
                          </div>
                          <div className="space-y-3 mt-3">
                            <div>
                              <p className="text-xs text-black/50 font-medium mb-1">
                                Dream Role / Position:
                              </p>
                              <p className="text-sm text-black/70 min-h-[20px]">
                                I want to be more advanced in my role and
                                provide more value to whatever company I call
                                home! This is a long-term journey!
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-black/50 font-medium mb-1">
                                Specialization Areas:
                              </p>
                              <p className="text-sm text-black/70 min-h-[20px]">
                                I&apos;d love to explore more administration
                                tasks as well as more advanced troubleshooting
                                tasks.
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-black/50 font-medium mb-1">
                                Career Milestones:
                              </p>
                              <p className="text-sm text-black/70 min-h-[20px]">
                                I want to earn my CompTIA A+ certification and
                                start strong at a new company.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
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
