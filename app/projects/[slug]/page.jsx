"use client";

import Image from "next/image";
import projectData from "@/project links.json/data.json";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function ProjectDetails({ params }) {
  const project = projectData.Projects.find(
    (item) => item.slug === params.slug
  );

  if (!project) {
    notFound();
  }

  const [currentPage, setCurrentPage] = useState(0);
  const previewImages = project.images.slice(1); // 3 preview pages

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % previewImages.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) =>
      prev === 0 ? previewImages.length - 1 : prev - 1
    );
  };

  return (
    <main className="px-6 py-10 bg-gray-100 min-h-screen font-[Nunito]">
      {/* Terminal-style Header */}
      <div className="bg-black text-white text-xs font-mono px-4 py-2 border-b border-gray-800 flex items-center gap-2 tracking-tight rounded-t-xl max-w-4xl mx-auto mt-6">
        <span className="text-white">●</span>
        <span className="text-white">●</span>
        <span className="text-white">●</span>
        <span className="ml-4">
          // project: {project.title.toLowerCase().replaceAll(" ", "_")}.md
        </span>
      </div>

      {/* Main Mockup Image */}
      <div className="relative w-full max-w-4xl h-64 md:h-96 mx-auto rounded-b-xl overflow-hidden shadow-lg mb-10 bg-white">
        <Image
          src={project.images[0]}
          alt={project.title + " main mockup"}
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>

      {/* Description */}
      <section className="max-w-3xl mx-auto text-black text-[1rem] leading-relaxed space-y-4 mb-12">
        {project.desc.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      {/* PDF-style Flip Viewer */}
      <section className="max-w-3xl mx-auto mb-12 bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden">
        <div className="bg-black text-white text-xs font-mono px-4 py-2 border-b border-gray-800 tracking-tight">
          // preview: page_{currentPage + 1}.png
        </div>
        <div className="relative w-full h-96">
          <Image
            src={previewImages[currentPage]}
            alt={`Preview page ${currentPage + 1}`}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-300"
          />
        </div>
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={handlePrev}
            className="text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-black transition"
          >
            ◀ Prev
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {previewImages.length}
          </span>
          <button
            onClick={handleNext}
            className="text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-black transition"
          >
            Next ▶
          </button>
        </div>
      </section>

      {/* PDF Link */}
      <div className="text-center">
        <a
          href={project.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors shadow-md"
        >
          Full PDF
        </a>
      </div>
    </main>
  );
}
