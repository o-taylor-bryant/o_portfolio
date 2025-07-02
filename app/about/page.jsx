"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButton from "@/components/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Quote from "./components/quote/quote.jsx";
import Skills from "./components/skills/skills.jsx";
import Experience from "./components/experience.jsx";
import Education from "./components/education.jsx";

import Hero from "@/public/image/me2.png";

import Hr from "@/components/Hr";
import About from "./components/about/about.jsx";

export default function Page() {
  const [ready, setReady] = useState(false);
  const [blink, setBlink] = useState(true);
  const [loadingStage, setLoadingStage] = useState(0);
  const [loadingText, setLoadingText] = useState("");

  useEffect(() => {
    const loadingSequence = [
      { text: "accessing files...", delay: 0 },
      { text: "loading about section...", delay: 800 },
      { text: "preparing content...", delay: 1600 },
      { text: "ready", delay: 2400 },
    ];

    loadingSequence.forEach(({ text, delay }, index) => {
      setTimeout(() => {
        setLoadingText(text);
        setLoadingStage(index + 1);
      }, delay);
    });

    const finalDelay = setTimeout(() => setReady(true), 2900);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);

    return () => {
      clearTimeout(finalDelay);
      clearInterval(blinkInterval);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!ready) {
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-[rgb(230,230,230)] z-[999] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xl"
        >
          {/* Loading Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              className="text-6xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-black via-neutral-600 to-black bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              _hi!
            </motion.div>
            <div className="text-sm text-black/60">
              _welcome to my about page!
            </div>
          </motion.div>

          {/* Loading Container */}
          <div className="bg-white rounded-xl border border-black/20 p-6 shadow-xl">
            {/* Loading Message */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity },
                  }}
                  className="text-black/60"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </motion.div>
                <span className="font-mono text-sm text-black/70">
                  {loadingText}
                </span>
              </div>
              <div className="flex space-x-2">
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-black/60 rounded-full"
                />
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 bg-black/60 rounded-full"
                />
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 bg-black/60 rounded-full"
                />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black/60"
                initial={{ width: "0%" }}
                animate={{ width: `${(loadingStage / 4) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Loading Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: loadingStage > 2 ? 1 : 0 }}
              className="mt-4 pt-4 border-t border-neutral-100"
            >
              <div className="grid grid-cols-3 gap-4 text-center text-xs text-black/60">
                <div>
                  <div className="font-medium">Content</div>
                  <div className="font-mono">Ready</div>
                </div>
                <div>
                  <div className="font-medium">Images</div>
                  <div className="font-mono">Loaded</div>
                </div>
                <div>
                  <div className="font-medium">Status</div>
                  <div className="font-mono">Active</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <main className="overflow-hidden">
        <FixedButton href="/#about">
          <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
        </FixedButton>

        <div className="relative min-h-[480px] h-auto md:h-screen gap-4 p-2 sm:p-4 md:p-10 flex flex-col md:flex-row justify-center items-center mb-10 overflow-hidden">
          {/* Tech-style block animation, replaces image and dots */}
          <div className="z-0 mb-8 sm:mb-16 md:mb-0 md:absolute top-1/4 md:right-[18%] md:-translate-y-1 flex items-center justify-center w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[440px] md:h-[440px] mx-auto md:mx-0">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-5 grid-rows-5 gap-1 sm:gap-2 w-full h-full">
                  {Array.from({ length: 25 }).map((_, i) => {
                    // Indices for techy white designs
                    const techyIndices = [3, 7, 12, 18, 21];
                    // Indices for solid white squares
                    const whiteIndices = [2, 8, 14, 19, 23]; // 17 removed to ensure smiley is on black
                    // Index for smiley face
                    const smileyIndex = 17;
                    return (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0.4,
                          scale: 1,
                          borderRadius: "0.375rem",
                        }}
                        animate={{
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.12, 1],
                          borderRadius: ["0.375rem", "50%", "0.375rem"],
                        }}
                        transition={{
                          delay: (i % 5) * 0.25 + Math.floor(i / 5) * 0.35,
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                        className={`${
                          whiteIndices.includes(i) ? "bg-white" : "bg-black"
                        } w-full h-full shadow-md flex items-center justify-center relative`}
                        style={{ aspectRatio: "1 / 1" }}
                      >
                        {i === smileyIndex && (
                          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <svg
                              width="40%"
                              height="40%"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              {/* Poof balls/buns with black stroke */}
                              <circle cx="8.2" cy="6.5" r="2" fill="#111" />
                              <circle cx="15.8" cy="6.5" r="2" fill="#111" />
                              {/* Smiley face */}
                              <circle cx="12" cy="12" r="10" fill="white" />
                              <circle cx="9" cy="10" r="1.2" fill="#111" />
                              <circle cx="15" cy="10" r="1.2" fill="#111" />
                              <path
                                d="M9 15c1.333 1 3.667 1 5 0"
                                stroke="#111"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                        )}
                        {techyIndices.includes(i) &&
                          !whiteIndices.includes(i) &&
                          i !== smileyIndex && (
                            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              {/* Example techy SVGs, can be customized per index */}
                              {i === 3 && (
                                <svg
                                  width="40%"
                                  height="40%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <rect
                                    x="4"
                                    y="11"
                                    width="16"
                                    height="2"
                                    rx="1"
                                    fill="white"
                                  />
                                  <circle cx="12" cy="12" r="2" fill="white" />
                                </svg>
                              )}
                              {i === 7 && (
                                <svg
                                  width="40%"
                                  height="40%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <rect
                                    x="11"
                                    y="4"
                                    width="2"
                                    height="16"
                                    rx="1"
                                    fill="white"
                                  />
                                  <circle
                                    cx="12"
                                    cy="18"
                                    r="1.2"
                                    fill="white"
                                  />
                                </svg>
                              )}
                              {i === 12 && (
                                <svg
                                  width="40%"
                                  height="40%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <rect
                                    x="6"
                                    y="6"
                                    width="12"
                                    height="12"
                                    rx="2"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="1.5"
                                    fill="white"
                                  />
                                </svg>
                              )}
                              {i === 18 && (
                                <svg
                                  width="40%"
                                  height="40%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <rect
                                    x="8"
                                    y="8"
                                    width="8"
                                    height="8"
                                    rx="1"
                                    fill="white"
                                  />
                                  <rect
                                    x="11"
                                    y="4"
                                    width="2"
                                    height="4"
                                    rx="1"
                                    fill="white"
                                  />
                                </svg>
                              )}
                              {i === 21 && (
                                <svg
                                  width="40%"
                                  height="40%"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="6"
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <rect
                                    x="11"
                                    y="6"
                                    width="2"
                                    height="6"
                                    rx="1"
                                    fill="white"
                                  />
                                </svg>
                              )}
                            </span>
                          )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Overlayed text block */}
          <div className="z-10 w-full md:w-auto md:left-[10%] top-auto md:top-1/3 static md:absolute col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start px-2 sm:px-4 md:px-10 pt-2 sm:pt-4 md:pt-0 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-70 md:bg-transparent md:pt-0">
            <h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md:px-0 text-black text-3xl sm:text-4xl md:text-8xl font-bold">
              About Me
            </h1>
            <Hr />
            <p className="title text-base sm:text-lg md:text-xl mt-2 sm:mt-4 tracking-wider text-gray-900 leading-[1.5rem] sm:leading-[1.7rem] mb-3 sm:mb-5 ">
              _file opened{" "}
              <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                {" "}
              </span>
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              onClick={() => {
                window.scrollTo({
                  top: 1000,
                  behavior: "smooth",
                });
              }}
              className="mb-2 sm:mb-3"
            >
              <Button variation="primary">scroll</Button>
            </motion.div>
          </div>
        </div>

        <About />
        <Skills />
        <Experience />
        <Education />
        <Quote />
      </main>
    </>
  );
}
