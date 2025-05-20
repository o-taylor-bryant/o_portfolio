"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./(project-card)";
import projectData from "@/project links.json/data.json";

export default function Page() {
  // -------------------------------
  // State and Effects
  // -------------------------------
  const [ready, setReady] = useState(false); // Controls initial loading screen
  const [blink, setBlink] = useState(true); // Controls blinking cursor on loading
  const [activeFolder, setActiveFolder] = useState(null); // Which folder is open

  // Simulate loading and blinking cursor
  useEffect(() => {
    const delay = setTimeout(() => setReady(true), 2500);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => {
      clearTimeout(delay);
      clearInterval(blinkInterval);
    };
  }, []);

  // Handler to open a folder
  const openFolder = (index) => {
    setActiveFolder(index);
  };

  // -------------------------------
  // Loading Screen
  // -------------------------------
  if (!ready) {
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-black z-[999] px-4">
        <div className="w-full max-w-md rounded-md border border-neutral-800 bg-white p-6 shadow-lg font-mono text-center">
          {/* Header with dots */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              {/* White dots for loading window */}
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <span className="text-xs text-neutral-400">desktop-terminal</span>
          </div>
          {/* Loading text */}
          <p className="text-sm sm:text-base text-neutral-400 mb-2 tracking-widest">
            booting environment:
          </p>
          <h1 className="text-3xl sm:text-4xl text-neutral-400 tracking-wider">
            launching taylor_portfolio{blink && <span className="ml-1">_</span>}
          </h1>
        </div>
      </div>
    );
  }

  // -------------------------------
  // Main Terminal Window
  // -------------------------------
  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(230,230,230)] px-4 pt-32 pb-12">
      {/* Terminal Window */}
      <div
        className={`relative w-full max-w-6xl font-mono rounded-2xl border border-neutral-800 shadow-lg p-0 flex flex-col overflow-hidden
          transition-transform duration-300 hover:scale-105 hover:shadow-2xl
          before:pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(180deg,transparent_0_2px,rgba(255,255,255,0.02)_2px,transparent_4px)] before:animate-scanlines
          after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border-2 after:border-white after:opacity-0 hover:after:opacity-60 after:transition-opacity after:duration-500
          ${
            activeFolder !== null
              ? "bg-white text-black animate-window-open" // White window and animation when folder is open
              : "bg-black text-white" // Black window by default
          }`}
        style={{
          animation: activeFolder ? undefined : "flicker 2s infinite linear", // Flicker effect when no folder is open
        }}
      >
        {/* -------------------------------
             Terminal Header Bar
        ------------------------------- */}
        <div className="bg-white px-4 py-2 flex justify-between items-center border-b border-neutral-700 text-xs text-black">
          <div className="flex space-x-2">
            {/* Black dots for window controls */}
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
          </div>
          <div className="text-xs">taylor_portfolio:projects</div>
        </div>

        {/* -------------------------------
             Terminal Main Area
        ------------------------------- */}
        <div className="flex-1 p-6 space-y-10 pointer-events-auto">
          {/* Terminal command line */}
          <div
            className={`${
              activeFolder !== null ? "text-black" : "text-white"
            } text-sm sm:text-base tracking-wide`}
          >
            _files:
          </div>

          {/* -------------------------------
               Folder Grid
          ------------------------------- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {projectData.Projects.map((project, index) => (
              <div
                key={index}
                onClick={() =>
                  activeFolder === index
                    ? setActiveFolder(null)
                    : openFolder(index)
                }
                className={`relative w-28 h-28 sm:w-32 sm:h-32 bg-white text-black rounded-xl border border-neutral-700 transition 
                  hover:bg-neutral-200 hover:scale-110 hover:shadow-xl cursor-pointer group
                  ${activeFolder === index ? "ring-2 ring-white scale-110" : ""}
                  animate-folder-pop`}
                style={{ transition: "all 0.2s cubic-bezier(.4,2,.6,1)" }}
              >
                {/* Folder tab (white, with border) */}
                <div className="absolute -top-2 left-3 w-3/5 h-3 bg-white rounded-t-md border border-neutral-700"></div>
                {/* Folder label */}
                <div className="flex flex-col justify-center items-center h-full z-10">
                  <p className="text-xs font-semibold text-black text-center px-2">
                    {project.title}
                  </p>
                  <p className="text-[10px] text-neutral-500 mt-1">
                    open_folder/
                  </p>
                </div>
              </div>
            ))}

            {/* Placeholder folders for layout balance */}
            {[...Array(3)].map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="relative w-28 h-28 sm:w-32 sm:h-32 bg-neutral-200 text-neutral-400 rounded-xl border border-neutral-300 opacity-40 cursor-not-allowed"
              >
                {/* Placeholder tab with border */}
                <div className="absolute -top-2 left-3 w-3/5 h-3 bg-white rounded-t-md border border-neutral-300"></div>
                <div className="flex flex-col justify-center items-center h-full">
                  <p className="text-xs font-semibold text-neutral-400 text-center px-2">
                    coming_soon
                  </p>
                  <p className="text-[10px] mt-1">empty_folder/</p>
                </div>
              </div>
            ))}
          </div>

          {/* -------------------------------
               Open Folder Details
          ------------------------------- */}
          {activeFolder !== null && (
            <div className="border border-neutral-800 rounded-xl p-6 bg-black animate-fade-in-up">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-white">
                  _project: {projectData.Projects[activeFolder].title}
                </p>
                <button
                  onClick={() => setActiveFolder(null)}
                  className="text-neutral-400 hover:text-white text-xs"
                >
                  [close]
                </button>
              </div>
              {/* Project details card */}
              <ProjectCard project={projectData.Projects[activeFolder]} />
            </div>
          )}
        </div>

        {/* -------------------------------
             Terminal Footer / Dock
        ------------------------------- */}
        <div className="bg-white px-4 py-2 border-t border-neutral-700 text-center text-[10px] text-black">
          Taylor Terminal • Your interactive space to explore my work. • All
          rights reserved.
        </div>
      </div>

      {/* -------------------------------
           Custom Animations (CSS)
      ------------------------------- */}
      <style>
        {`
          /* Scanline animation for retro terminal effect */
          @keyframes scanlines {
            0% { background-position-y: 0; }
            100% { background-position-y: 8px; }
          }
          .before\\:animate-scanlines::before {
            animation: scanlines 1s linear infinite;
          }

          /* Flicker animation for idle terminal */
          @keyframes flicker {
            0%, 100% { opacity: 1; }
            97%, 99% { opacity: 0.95; }
            98% { opacity: 0.85; }
          }

          /* Folder pop-in animation */
          @keyframes folder-pop {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-folder-pop {
            animation: folder-pop 0.4s cubic-bezier(.4,2,.6,1);
          }

          /* Fade in and slide up for open folder details */
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.5s cubic-bezier(.4,2,.6,1);
          }

          /* Window pop-open animation when folder is opened */
          @keyframes window-open {
            0% { transform: scale(0.97) translateY(30px); opacity: 0.7; }
            60% { transform: scale(1.03) translateY(-8px); opacity: 1; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          .animate-window-open {
            animation: window-open 0.6s cubic-bezier(.4,2,.6,1);
          }
        `}
      </style>
    </div>
  );
}
