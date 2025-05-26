"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./(project-card)";
import projectData from "@/project links.json/data.json";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

/* [STATE & EFFECTS] */
export default function Page() {
  const [ready, setReady] = useState(false); // Loading screen control
  const [blink, setBlink] = useState(true); // Blinking cursor
  const [activeFolder, setActiveFolder] = useState(null); // Open folder index
  const [filteredProjects, setFilteredProjects] = useState(
    projectData.Projects
  ); // Filtered projects state

  useEffect(() => {
    const delay = setTimeout(() => setReady(true), 1200);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => {
      clearTimeout(delay);
      clearInterval(blinkInterval);
    };
  }, []);

  const openFolder = (index) => setActiveFolder(index);

  /* [LOADING SCREEN] */
  if (!ready) {
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-black z-[999] px-4">
        <div className="w-full max-w-md rounded-md border border-neutral-800 bg-white p-6 shadow-lg font-mono text-center">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <span className="text-xs text-neutral-400">desktop-terminal</span>
          </div>
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

  /* [TERMINAL WINDOW] */
  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(230,230,230)] px-4 pt-32 pb-12">
      {/* [Home Button - top left] */}
      <FixedButton href="/">
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButton>
      {/* [Terminal Window] */}
      <div
        className={`relative w-full max-w-6xl font-mono rounded-2xl border border-neutral-800 shadow-lg p-0 flex flex-col overflow-hidden
          transition-transform duration-300 hover:scale-105 hover:shadow-2xl
          before:pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(180deg,transparent_0_2px,rgba(255,255,255,0.02)_2px,transparent_4px)] before:animate-scanlines
          after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border-2 after:border-white after:opacity-0 hover:after:opacity-60 after:transition-opacity after:duration-500
          ${
            activeFolder !== null
              ? "bg-white text-black animate-window-open"
              : "bg-black text-white"
          }`}
        style={{
          animation: activeFolder ? undefined : "flicker 2s infinite linear",
        }}
      >
        {/* [HEADER BAR] */}
        <div className="bg-white px-4 py-2 flex justify-between items-center border-b border-neutral-700 text-xs text-black">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
          </div>
          <div className="text-xs">taylor_portfolio:projects</div>
        </div>

        {/* [TERMINAL MAIN AREA] */}
        <div className="flex-1 p-4 sm:p-6 space-y-6 sm:space-y-10 pointer-events-auto">
          {/* [COMMAND LINE] */}
          <div
            className={`${
              activeFolder !== null ? "text-black" : "text-white"
            } text-sm sm:text-base tracking-wide`}
          >
            _files:
          </div>

          {/* [SEARCH BAR] */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full max-w-md px-2 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => {
                const query = e.target.value.toLowerCase();
                const filteredProjects = projectData.Projects.filter(
                  (project) => project.title.toLowerCase().includes(query)
                );
                setFilteredProjects(filteredProjects);
              }}
            />
          </div>

          {/* [FOLDER GRID] */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() =>
                  activeFolder === index
                    ? setActiveFolder(null)
                    : openFolder(index)
                }
                role="button"
                aria-label={`Open folder for ${project.title}`}
                className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white text-black rounded-xl border border-neutral-700 transition 
                  hover:bg-neutral-200 hover:scale-105 hover:shadow-lg cursor-pointer group
                  ${activeFolder === index ? "ring-2 ring-white scale-110" : ""}
                  animate-folder-pop`}
                style={{ transition: "all 0.2s cubic-bezier(.4,2,.6,1)" }}
              >
                {/* [FOLDER TAB] */}
                <div className="absolute -top-2 left-3 w-3/5 h-3 bg-white rounded-t-md border border-neutral-700"></div>
                {/* [FOLDER LABEL] */}
                <div className="flex flex-col justify-center items-center h-full z-10">
                  <p className="text-[10px] sm:text-xs font-semibold text-black text-center px-2">
                    {project.title}
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-neutral-500 mt-1">
                    open_folder/
                  </p>
                </div>
              </div>
            ))}

            {/* [PLACEHOLDER FOLDERS] */}
            {[...Array(2)].map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className="relative w-24 h-24 sm:w-28 sm:h-28 bg-neutral-200 text-neutral-400 rounded-xl border border-neutral-300 opacity-40 cursor-not-allowed"
                title="Coming Soon"
              >
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

          {/* [OPEN FOLDER DETAILS] */}
          {activeFolder !== null && (
            <div className="border border-neutral-800 rounded-xl p-6 bg-black animate-fade-in-up">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-white">
                  _project: {projectData.Projects[activeFolder].title}
                </p>
                <button
                  onClick={() => setActiveFolder(null)}
                  className="text-neutral-400 hover:text-white text-xs sm:text-sm px-2 py-1 rounded"
                >
                  [close]
                </button>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {projectData.Projects[activeFolder].desc[0]}
              </p>
              <ProjectCard project={projectData.Projects[activeFolder]} />
            </div>
          )}
        </div>

        {/* [FOOTER / DOCK] */}
        <div className="bg-white text-black py-4 text-center text-sm">
          <p>© 2025 taylor terminal</p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://github.com/o-taylor-bryant"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/o-taylor-bryant/"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:taylor.bryant@example.com"
              className="hover:underline"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* [CUSTOM ANIMATIONS / CSS] */}
      <style>
        {`
          @keyframes scanlines {
            0% { background-position-y: 0; }
            100% { background-position-y: 8px; }
          }
          .before\\:animate-scanlines::before {
            animation: scanlines 1s linear infinite;
          }
          @keyframes flicker {
            0%, 100% { opacity: 1; }
            97%, 99% { opacity: 0.95; }
            98% { opacity: 0.85; }
          }
          @keyframes folder-pop {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-folder-pop {
            animation: folder-pop 0.4s cubic-bezier(.4,2,.6,1);
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.5s cubic-bezier(.4,2,.6,1);
          }
          @keyframes window-open {
            0% { transform: scale(0.97) translateY(30px); opacity: 0.7; }
            60% { transform: scale(1.03) translateY(-8px); opacity: 1; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          .animate-window-open {
            animation: window-open 0.6s cubic-bezier(.4,2,.6,1);
          }
          @keyframes folder-hover {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          .folder-hover:hover {
            animation: folder-hover 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
