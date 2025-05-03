"use client";
import ProjectCard from "./(project-card)";
import projectData from "@/project links.json/data.json";

export default function Page() {
  const project = projectData.Projects[0]; // Only show the first project

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10 space-y-8">
      {/* 📰 Soft Intro Message */}
      <div className="w-full max-w-xl text-center">
        <h2 className="text-xl font-semibold text-black mb-2">
          Projects Archive
        </h2>
        <p className="text-black text-sm">
          Expect more projects to be added soon! This is a collection of my
          work.
        </p>
      </div>

      {/* 🗂️ Project Card */}
      <ProjectCard project={project} />
    </main>
  );
}
