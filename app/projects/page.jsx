"use client";
import { useEffect, useState } from "react";
import ProjectCard from "./(project-card)";
import projectData from "@/project links.json/data.json";

export default function Page() {
  const [ready, setReady] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => setReady(true), 2500);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);

    return () => {
      clearTimeout(delay);
      clearInterval(blinkInterval);
    };
  }, []);

  if (!ready) {
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-[rgb(230,230,230)] z-[999] px-4">
        <div className="w-full max-w-md rounded-md border border-neutral-800 bg-black p-6 shadow-lg font-mono text-center">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <span className="text-xs text-neutral-400">projects-folder</span>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 mb-2 tracking-widest">
            taylor_portfolio:
          </p>
          <h1 className="text-3xl sm:text-4xl text-white tracking-wider">
            opening{blink && <span className="ml-1">_</span>}
          </h1>
        </div>
      </div>
    );
  }

  const project = projectData.Projects[0];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10 space-y-8">
      <div className="w-full max-w-xl text-center">
        <h2 className="text-xl font-semibold text-black mb-2">
          Projects Archive
        </h2>
        <p className="text-black text-sm">
          Expect more projects to be added soon! This is a collection of my
          work.
        </p>
      </div>
      <ProjectCard project={project} />
    </main>
  );
}
