"use client";

import Image from "next/image";
import projectData from "@/project links.json/data.json";
import { notFound } from "next/navigation";
import { useState, useRef } from "react";

/* [PROJECT DETAILS PAGE] */
export default function ProjectDetails({ params }) {
  const project = projectData.Projects.find(
    (item) => item.slug === params.slug
  );
  if (!project) notFound();

  const [currentImage, setCurrentImage] = useState(0);
  const [zoom, setZoom] = useState(1.0);
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const previewImages = project.images.slice(1);

  const handleNext = () =>
    setCurrentImage((prev) => (prev + 1) % previewImages.length);
  const handlePrev = () =>
    setCurrentImage((prev) =>
      prev === 0 ? previewImages.length - 1 : prev - 1
    );
  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.2, 2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.6));
  const handleResetZoom = () => {
    setZoom(1.0);
    setDrag({ x: 0, y: 0 });
  };

  function handleMouseDown(e) {
    if (zoom === 1) return;
    setDragging(true);
    dragStart.current = {
      x: e.clientX - drag.x,
      y: e.clientY - drag.y,
    };
  }
  function handleMouseMove(e) {
    if (!dragging) return;
    setDrag({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  }
  function handleMouseUp() {
    setDragging(false);
  }

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[rgb(230,230,230)] px-4 pt-32 pb-12 font-mono"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className={`relative w-full max-w-4xl rounded-2xl border border-neutral-800 shadow-lg flex flex-col overflow-hidden
          bg-white text-black
          before:pointer-events-none before:absolute before:inset-0 before:bg-[repeating-linear-gradient(180deg,transparent_0_2px,rgba(0,0,0,0.03)_2px,transparent_4px)] before:animate-scanlines
          after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:border-2 after:border-black after:opacity-0 hover:after:opacity-60 after:transition-opacity after:duration-500
        `}
      >
        {/* [HEADER BAR] */}
        <div className="bg-white px-4 py-2 flex justify-between items-center border-b border-neutral-700 text-xs text-black">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span className="w-3 h-3 bg-black rounded-full"></span>
          </div>
          <span className="text-xs font-mono">
            {project.title.toLowerCase().replaceAll(" ", "_")}.md
          </span>
        </div>

        {/* [MAIN IMAGE AS "WINDOW"] */}
        <div className="relative w-full h-64 md:h-96 bg-neutral-100 border-b border-neutral-300 overflow-hidden animate-window-pop">
          <Image
            src={project.images[0]}
            alt={project.title + " main mockup"}
            layout="fill"
            objectFit="cover"
            className="object-center opacity-90 hover:opacity-100 transition duration-300"
            priority
          />
          <div className="absolute top-2 left-4 bg-white/80 px-2 py-1 rounded text-xs border border-neutral-300 font-mono shadow">
            main_mockup.png
          </div>
        </div>

        {/* [README SECTION] */}
        <section className="px-6 py-6 text-neutral-700 text-[1rem] leading-relaxed space-y-4 border-b border-neutral-300 bg-white">
          <div className="text-xs text-neutral-400 pb-2 border-b border-neutral-200 mb-4 font-mono">
            [project_readme.md]
          </div>
          {project.desc.map((paragraph, index) => (
            <p key={index} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </section>

        {/* [PREVIEW IMAGES AS "OPEN FILES"] */}
        <section className="bg-white border-b border-neutral-300 px-6 py-6">
          <div className="flex flex-wrap gap-6 justify-center">
            {previewImages.map((img, idx) => (
              <div
                key={img}
                className={`relative bg-neutral-100 border border-neutral-300 rounded-xl shadow-lg overflow-hidden flex flex-col items-center w-56 h-72 transition-all duration-300
                  ${
                    currentImage === idx
                      ? "scale-105 ring-2 ring-black z-10 animate-window-pop"
                      : "opacity-70"
                  }
                  hover:scale-105 hover:z-20`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCurrentImage(idx);
                  setDrag({ x: 0, y: 0 });
                  setZoom(1.0);
                }}
              >
                <div className="w-full bg-white px-2 py-1 border-b border-neutral-200 text-[10px] font-mono text-neutral-500 flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                  <span className="ml-2">{`preview_page_${idx + 1}.png`}</span>
                </div>
                <div
                  className="flex-1 flex items-center justify-center overflow-hidden"
                  style={{ cursor: zoom > 1 ? "grab" : "pointer" }}
                  onMouseDown={handleMouseDown}
                >
                  <Image
                    src={img}
                    alt={`Preview page ${idx + 1}`}
                    width={200}
                    height={260}
                    style={{
                      maxHeight: "14rem",
                      objectFit: "contain",
                      transform:
                        currentImage === idx
                          ? `scale(${zoom}) translate(${drag.x / zoom}px,${
                              drag.y / zoom
                            }px)`
                          : "scale(1)",
                      transition: dragging
                        ? "none"
                        : "transform 0.3s cubic-bezier(.4,2,.6,1)",
                      cursor: zoom > 1 ? "grab" : "pointer",
                    }}
                    className="rounded shadow"
                    draggable={false}
                  />
                  {zoom > 1 && (
                    <div className="absolute inset-0 pointer-events-none border-2 border-black rounded-xl animate-glow"></div>
                  )}
                </div>
                {currentImage === idx && (
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleZoomOut();
                      }}
                      className="text-xs bg-neutral-200 text-black px-2 rounded hover:bg-neutral-300 border border-neutral-400"
                    >
                      -
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleResetZoom();
                      }}
                      className="text-xs bg-neutral-200 text-black px-2 rounded hover:bg-neutral-300 border border-neutral-400"
                    >
                      100%
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleZoomIn();
                      }}
                      className="text-xs bg-neutral-200 text-black px-2 rounded hover:bg-neutral-300 border border-neutral-400"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* [IMAGE NAVIGATION] */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="text-xs bg-neutral-200 text-black px-3 py-1 rounded hover:bg-neutral-300 transition font-mono border border-neutral-400"
            >
              ◀ Prev
            </button>
            <span className="text-xs text-neutral-500 font-mono">
              Page {currentImage + 1} of {previewImages.length}
            </span>
            <button
              onClick={handleNext}
              className="text-xs bg-neutral-200 text-black px-3 py-1 rounded hover:bg-neutral-300 transition font-mono border border-neutral-400"
            >
              Next ▶
            </button>
          </div>
        </section>

        {/* [PDF BUTTON - MONOCHROME GLOW] */}
        <div className="flex justify-center items-center py-8 bg-white">
          <a
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center w-16 h-16 rounded-full bg-black shadow-xl border-2 border-white hover:scale-110 transition-transform duration-200"
            title="Open PDF"
            style={{ boxShadow: "0 0 0 0 #fff" }}
          >
            {/* Glowing animated ring */}
            <span className="absolute inset-0 rounded-full border-2 border-white pointer-events-none animate-pulse-ring"></span>
            {/* PDF icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect
                x="4"
                y="4"
                width="20"
                height="20"
                rx="5"
                fill="#111"
                stroke="#fff"
                strokeWidth="1.5"
              />
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                fill="#fff"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                dy=".3em"
              >
                PDF
              </text>
            </svg>
          </a>
        </div>
        <style>
          {`
            @keyframes pulse-ring {
              0% { box-shadow: 0 0 0 0 #fff8; }
              70% { box-shadow: 0 0 0 10px #fff0; }
              100% { box-shadow: 0 0 0 0 #fff0; }
            }
            .animate-pulse-ring {
              animation: pulse-ring 1.8s cubic-bezier(.4,0,.6,1) infinite;
            }
          `}
        </style>

        {/* [FOOTER / DOCK] */}
        <div className="bg-white px-4 py-2 border-t border-neutral-300 text-center text-[10px] text-black">
          Taylor Terminal • Your interactive space to explore my work. • All
          rights reserved.
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
          @keyframes window-pop {
            0% { transform: scale(0.95) translateY(30px); opacity: 0.7; }
            60% { transform: scale(1.03) translateY(-8px); opacity: 1; }
            100% { transform: scale(1) translateY(0); opacity: 1; }
          }
          .animate-window-pop {
            animation: window-pop 0.6s cubic-bezier(.4,2,.6,1);
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 8px 2px #06b6d4aa; }
            50% { box-shadow: 0 0 16px 4px #06b6d4cc; }
          }
          .animate-glow {
            animation: glow 2s infinite alternate;
          }
          .drop-shadow-glow {
            filter: drop-shadow(0 0 8px #06b6d4aa);
          }
        `}
      </style>
    </div>
  );
}
