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
          {/* Monochrome tech ID badge animation */}
          <div className="z-0 mb-8 sm:mb-16 md:mb-0 md:absolute top-1/4 md:right-[18%] md:-translate-y-1 flex items-center justify-center w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[440px] md:h-[440px] mx-auto md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 24, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: [0, -2, 2, 0] }}
              transition={{
                opacity: { duration: 0.7 },
                y: { duration: 0.7 },
                rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative w-[65%] h-[82%] sm:w-[62%] sm:h-[80%]"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-14 left-1/2 -translate-x-1/2 w-2 h-16 rounded-full bg-black/35"
              />

              <div className="absolute inset-0 rounded-3xl border-2 border-black/45 bg-[#fcfcfc] shadow-[8px_8px_0_0_rgba(0,0,0,0.28)] overflow-hidden">
                <div className="h-12 border-b border-black/30 bg-[#ededed] text-black/90 flex items-center justify-between px-4 font-mono text-[10px] sm:text-xs tracking-widest">
                  <span>ID // PROFILE</span>
                  <motion.span
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  >
                    AUTH
                  </motion.span>
                </div>

                <div className="p-3 sm:p-4 h-[calc(100%-3rem)] flex flex-col gap-3">
                  <div className="grid grid-cols-[auto,1fr] gap-3 items-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#efefef] border border-black/30 relative overflow-hidden">
                      <div className="absolute inset-[10%] rounded-lg border border-black/25" />
                      <div className="absolute left-1/2 top-2 -translate-x-1/2 w-5 h-5 rounded-full bg-black/75" />
                      <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-8 h-4 rounded-t-full bg-black/60" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-[90%] bg-black/75 rounded-full" />
                      <div className="h-2 w-[70%] bg-black/55 rounded-full" />
                      <div className="h-2 w-[55%] bg-black/40 rounded-full" />
                    </div>
                  </div>

                  <div className="flex-1 rounded-xl border border-black/25 bg-white p-2 sm:p-3 relative overflow-hidden">
                    <div className="grid grid-cols-6 gap-1.5 mb-3">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-2 rounded-full bg-black/70"
                          animate={{ opacity: [0.18, 0.85, 0.18] }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            delay: i * 0.05,
                          }}
                        />
                      ))}
                    </div>

                    <motion.div
                      className="absolute left-0 right-0 h-6 bg-gradient-to-b from-black/15 via-black/[0.05] to-transparent"
                      animate={{ top: ["-20%", "115%"] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Overlayed text block */}
          <div className="z-10 w-full md:w-auto md:left-[10%] top-auto md:top-1/3 static md:absolute col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start px-2 sm:px-4 md:px-10 pt-2 sm:pt-4 md:pt-0 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-70 md:bg-transparent">
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
