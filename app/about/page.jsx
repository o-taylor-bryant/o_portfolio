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

        <div className="relative h-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
          {/* Animated image, moved up and made bigger */}
          <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[18%] md:-translate-y-1 flex items-center justify-center w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 500 500"
              className="absolute inset-0 z-40 pointer-events-none"
            >
              {Array.from({ length: 14 }).map((_, i) => {
                const angle = (i / 14) * 2 * Math.PI;
                const radius = 220;
                const cx = 250 + Math.cos(angle) * radius;
                const cy = 250 + Math.sin(angle) * radius;
                const delay = Math.random() * 2;
                const duration = 1.2 + Math.random() * 1.2;
                return (
                  <motion.circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="20"
                    fill="#111"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      repeat: Infinity,
                      duration,
                      delay,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </svg>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative bg-black rounded-full w-[320px] h-[320px] md:w-[440px] md:h-[440px] flex items-center justify-center overflow-hidden shadow-2xl z-30"
            >
              <Image
                src={Hero}
                width={440}
                height={440}
                className="object-cover w-full h-full grayscale rounded-full"
                alt="Taylor Bryant"
                placeholder="blur"
              />
              <div
                className="absolute inset-0 pointer-events-none rounded-full"
                style={{
                  background:
                    "repeating-linear-gradient(180deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 8px)",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none rounded-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </motion.div>
          </div>

          {/* Overlayed text block */}
          <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
            <h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md:px-0 text-black text-5xl md:text-8xl font-bold">
              About Me
            </h1>
            <Hr />
            <p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 ">
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
              className="mb-3"
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
