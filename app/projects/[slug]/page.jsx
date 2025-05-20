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
  const [zoom, setZoom] = useState(1.0);
  const previewImages = project.images.slice(1);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % previewImages.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) =>
      prev === 0 ? previewImages.length - 1 : prev - 1
    );
  };

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.2, 2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.6));
  const handleResetZoom = () => setZoom(1.0);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(230,230,230)] px-4 pt-32 pb-12 font-mono">
      <div
        className={`relative w-full max-w-4xl rounded-2xl border border-neutral-800 shadow-lg p-0 flex flex-col overflow-hidden
          before:pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(180deg,transparent_0_2px,rgba(255,255,255,0.02)_2px,transparent_4px)] before:animate-scanlines
        `}
      >
        {/* Terminal Header Bar */}
        <div className="bg-white px-4 py-2 flex justify-between items-center border-b border-neutral-700 text-xs text-black">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
          </div>
          <span className="text-xs">
            {project.title.toLowerCase().replaceAll(" ", "_")}.md
          </span>
        </div>

        {/* Main Image */}
        <div className="relative w-full h-64 md:h-96 bg-neutral-950 border-b border-neutral-800">
          <Image
            src={project.images[0]}
            alt={project.title + " main mockup"}
            layout="fill"
            objectFit="cover"
            className="object-center"
            priority
          />
        </div>

        {/* Description */}
        <section className="px-6 py-6 text-neutral-200 text-[1rem] leading-relaxed space-y-4 border-b border-neutral-800 bg-black">
          {project.desc.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </section>

        {/* PDF Preview */}
        <section className="bg-black border-b border-neutral-800 px-6 py-6">
          <div className="bg-neutral-900 text-neutral-300 text-xs px-4 py-2 rounded-t-md border-b border-neutral-800 tracking-tight font-mono">
            {`preview_page_${currentPage + 1}.png`}
          </div>
          <div className="relative w-full h-96 flex items-center justify-center bg-black rounded-b-md overflow-hidden">
            <div
              className="transition-transform duration-300"
              style={{ transform: `scale(${zoom})` }}
            >
              <Image
                src={previewImages[currentPage]}
                alt={`Preview page ${currentPage + 1}`}
                width={600}
                height={800}
                style={{ maxHeight: "22rem", objectFit: "contain" }}
                className="rounded shadow-lg"
              />
            </div>
          </div>
          <div className="flex justify-between items-center px-2 py-4 bg-black">
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="text-xs bg-neutral-200 text-black px-3 py-1 rounded hover:bg-neutral-300 transition font-mono border border-neutral-400"
              >
                ◀ Prev
              </button>
              <button
                onClick={handleNext}
                className="text-xs bg-neutral-200 text-black px-3 py-1 rounded hover:bg-neutral-300 transition font-mono border border-neutral-400"
              >
                Next ▶
              </button>
            </div>
            <span className="text-xs text-neutral-400 font-mono">
              Page {currentPage + 1} of {previewImages.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleZoomOut}
                className="text-xs bg-neutral-200 text-black px-2 rounded hover:bg-neutral-300 border border-neutral-400"
              >
                -
              </button>
              <button
                onClick={handleResetZoom}
                className="text-xs bg-neutral-200 text-black px-2 rounded hover:bg-neutral-300 border border-neutral-400"
              >
                100%
              </button>
              <button
                onClick={handleZoomIn}
                className="text-xs bg-neutral-200 text-black px-2 rounded hover:bg-neutral-300 border border-neutral-400"
              >
                +
              </button>
            </div>
          </div>
        </section>

        {/* PDF "App Icon" Button */}
        <div className="flex justify-center items-center py-8 bg-black">
          <a
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-24 h-24 bg-white border-2 border-neutral-700 rounded-xl shadow-lg hover:bg-neutral-200 transition group cursor-pointer"
            title="Open Full PDF"
          >
            <svg
              width="36"
              height="36"
              fill="none"
              viewBox="0 0 36 36"
              className="mb-2"
            >
              <rect
                width="36"
                height="36"
                rx="8"
                fill="#000"
                fillOpacity="0.1"
              />
              <path d="M10 10h16v16H10z" stroke="#000" strokeWidth="2" />
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                fill="#000"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                dy=".3em"
              >
                PDF
              </text>
            </svg>
            <span className="text-xs text-black group-hover:text-black font-mono">
              Open PDF
            </span>
          </a>
        </div>

        {/* Terminal Footer */}
        <div className="bg-white px-4 py-2 border-t border-neutral-700 text-center text-[10px] text-black">
          Taylor Terminal • Your interactive space to explore my work. • All
          rights reserved.
        </div>
      </div>
      {/* Scanline animation */}
      <style>
        {`
          @keyframes scanlines {
            0% { background-position-y: 0; }
            100% { background-position-y: 8px; }
          }
          .before\\:animate-scanlines::before {
            animation: scanlines 1s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
