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

  useEffect(() => {
    const delay = setTimeout(() => setReady(true), 1200);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => {
      clearTimeout(delay);
      clearInterval(blinkInterval);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
            <span className="text-xs text-neutral-400">about-folder</span>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 mb-2 tracking-widest">
            taylor_about:
          </p>
          <h1 className="text-3xl sm:text-4xl text-white tracking-wider">
            opening{blink && <span className="ml-1">_</span>}
          </h1>
        </div>
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
