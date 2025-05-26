"use client";

import projectData from "@/project links.json/data.json";
import { notFound } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
  faSearchPlus,
  faSearchMinus,
} from "@fortawesome/free-solid-svg-icons";

/* [PROJECT DETAILS PAGE] */
export default function ProjectDetails({ params }) {
  const project = projectData.Projects.find(
    (item) => item.slug === params.slug
  );
  if (!project) {
    console.error("Project not found:", params.slug);
    notFound();
  }

  // Modal state for image preview
  const [modalImg, setModalImg] = useState(null);

  // Single-project preview states
  const [currentImage, setCurrentImage] = useState(0);
  const [zoom, setZoom] = useState(1.0);
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const previewImages = project.images ? project.images.slice(1) : [];

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(e) {
      if (!modalImg) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setModalImg(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalImg]);

  const handleNext = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % previewImages.length);
    setModalImg(previewImages[(currentImage + 1) % previewImages.length]);
    resetZoomAndDrag();
  }, [currentImage, previewImages]);

  const handlePrev = useCallback(() => {
    setCurrentImage((prev) =>
      prev === 0 ? previewImages.length - 1 : prev - 1
    );
    setModalImg(
      previewImages[
        currentImage === 0 ? previewImages.length - 1 : currentImage - 1
      ]
    );
    resetZoomAndDrag();
  }, [currentImage, previewImages]);

  function handleZoomIn() {
    setZoom((z) => Math.min(z + 0.2, 3));
  }
  function handleZoomOut() {
    setZoom((z) => Math.max(z - 0.2, 1));
  }
  function resetZoomAndDrag() {
    setZoom(1.0);
    setDrag({ x: 0, y: 0 });
  }
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
      className="flex items-center justify-center min-h-screen bg-[rgb(230,230,230)] px-2 sm:px-4 pt-16 sm:pt-32 pb-8 sm:pb-12 font-mono"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* [Home Button - top left] */}
      <FixedButton href="/projects">
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButton>

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
          <div className="text-xs sm:text-sm text-neutral-400 pb-2 border-b border-neutral-200 mb-4 font-mono">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
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
                  setModalImg(img); // Open the modal with the clicked image
                  setCurrentImage(idx);
                  setDrag({ x: 0, y: 0 });
                  setZoom(1.0);
                }}
              >
                {/* Image Header */}
                <div className="w-full bg-white px-2 py-1 border-b border-neutral-200 text-[10px] font-mono text-neutral-500 flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                  <span className="ml-2">{`preview_page_${idx + 1}.png`}</span>
                </div>

                {/* Image Viewer */}
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <Image
                    src={img}
                    alt={`Preview page ${idx + 1}`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    style={{
                      objectFit: "contain",
                      transform: "scale(1)",
                      transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
                    }}
                    className="rounded shadow"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* [PDF BUTTON - MONOCHROME GLOW] */}
        <div className="flex justify-center items-center py-8 bg-white">
          <a
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black shadow-xl border-2 border-white hover:scale-110 transition-transform duration-200"
            title="Open PDF"
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
        <div className="bg-white px-4 py-2 border-t border-neutral-300 text-center text-[10px] text-black">
          Taylor Terminal • Your interactive space to explore my work. • All
          rights reserved.
        </div>
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
            @keyframes pulse-ring {
              0% { box-shadow: 0 0 0 0 #fff8; }
              70% { box-shadow: 0 0 0 10px #fff0; }
              100% { box-shadow: 0 0 0 0 #fff0; }
            }
            .animate-pulse-ring {
              animation: pulse-ring 1.8s cubic-bezier(.4,0,.6,1) infinite;
            }
            .drop-shadow-glow {
              filter: drop-shadow(0 0 8px #06b6d4aa);
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            .modal {
              animation: fadeIn 0.8s ease-in-out;
            }
          `}
        </style>
      </div>

      {/* Modal for Full-Screen Image Viewer */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="relative flex items-center justify-center max-w-[90vw] max-h-[90vh]">
            {/* Full-Screen Image */}
            <Image
              src={modalImg}
              alt="Full Screen"
              width={1200} // Use high resolution
              height={1600}
              style={{
                maxWidth: "90vw", // Constrain width to viewport
                maxHeight: "90vh", // Constrain height to viewport
                objectFit: "contain", // Maintain aspect ratio
                transform: `scale(${zoom}) translate(${drag.x / zoom}px, ${
                  drag.y / zoom
                }px)`,
                cursor: zoom > 1 ? "grab" : "default",
              }}
              className="transition-transform duration-300"
              onMouseDown={handleMouseDown}
              draggable={false}
            />

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow hover:bg-neutral-200"
              onClick={() => setModalImg(null)}
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button
                className="bg-white text-black p-2 sm:p-1 rounded-full shadow hover:bg-neutral-200"
                onClick={handleZoomOut}
              >
                <FontAwesomeIcon icon={faSearchMinus} />
              </button>
              <button
                className="bg-white text-black p-2 rounded-full shadow hover:bg-neutral-200"
                onClick={resetZoomAndDrag}
              >
                Reset
              </button>
              <button
                className="bg-white text-black p-2 rounded-full shadow hover:bg-neutral-200"
                onClick={handleZoomIn}
              >
                <FontAwesomeIcon icon={faSearchPlus} />
              </button>
            </div>

            {/* Navigation Controls */}
            <button
              className="absolute left-4 bg-white text-black p-2 rounded-full shadow hover:bg-neutral-200"
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="absolute right-4 bg-white text-black p-2 rounded-full shadow hover:bg-neutral-200"
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
