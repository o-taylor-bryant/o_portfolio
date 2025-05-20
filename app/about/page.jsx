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

// [images]
import Hero from "@/public/image/me2.png";

import Hr from "@/components/Hr";
import About from "./components/about/about.jsx";

export default function Page() {
  // [state]
  const [ready, setReady] = useState(false);
  const [blink, setBlink] = useState(true);

  // [effect: loading and blink]
  useEffect(() => {
    const delay = setTimeout(() => setReady(true), 2500);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => {
      clearTimeout(delay);
      clearInterval(blinkInterval);
    };
  }, []);

  // [effect: scroll to top]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // [label: loading screen]
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

  // [label: main content]
  return (
    <>
      <main className="overflow-hidden">
        {/* [label: back button] */}
        <FixedButton href="/#about">
          <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
        </FixedButton>

        {/* [label: hero section] */}
        <div className="relative h-screen gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
          {/* [label: hero image + effects] */}
          <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[18%] md:-translate-y-1 flex items-center justify-center">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ ease: "circOut", duration: 1 }}
              className="relative h-[350px] w-[350px] md:h-[500px] md:w-[500px] flex items-center justify-center border-4 border-black rounded-full"
            >
              {/* [label: HUD ring] */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="absolute w-full h-full rounded-full border border-neutral-400 opacity-30 animate-rotate-slow"></span>
              </span>
              {/* [label: glowing animated ring] */}
              <span className="absolute inset-0 rounded-full border-4 border-neutral-300 animate-tech-glow pointer-events-none"></span>
              {/* [label: scanline overlay] */}
              <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scanline" />
              </span>
              {/* [label: techy moving black dots] */}
              <span className="absolute w-full h-full pointer-events-none">
                {/* 8 animated dots around the circle */}
                <span
                  className="dot-move absolute w-2 h-2 bg-black rounded-full"
                  style={{ animationDelay: "0s" }}
                />
                <span
                  className="dot-move absolute w-2 h-2 bg-black rounded-full"
                  style={{ animationDelay: "0.25s" }}
                />
                <span
                  className="dot-move absolute w-2 h-2 bg-black rounded-full"
                  style={{ animationDelay: "0.5s" }}
                />
                <span
                  className="dot-move absolute w-2 h-2 bg-black rounded-full"
                  style={{ animationDelay: "0.75s" }}
                />
                <span
                  className="dot-move absolute w-2 h-2 bg-black rounded-full"
                  style={{ animationDelay: "1s" }}
                />
                <span
                  className="dot-move absolute w-2 h-2 bg-black rounded-full"
                  style={{ animationDelay: "1.25s" }}
                />
                <span
                  className="dot-move absolute w-2 h-2 bg-black rounded-full"
                  style={{ animationDelay: "1.5s" }}
                />
                <span
                  className="dot-move absolute w-2 h-2 bg-black rounded-full"
                  style={{ animationDelay: "1.75s" }}
                />
              </span>
              {/* [label: hero image] */}
              <Image
                src={Hero}
                alt="Taylor Bryant"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                className="rounded-full"
              />
            </motion.div>
            {/* [label: hero image styles] */}
            <style jsx>{`
              @keyframes tech-glow {
                0%,
                100% {
                  box-shadow: 0 0 0 0 #a3a3a3, 0 0 24px 4px #d1d5db66;
                }
                50% {
                  box-shadow: 0 0 0 8px #d1d5db44, 0 0 48px 12px #a3a3a399;
                }
              }
              .animate-tech-glow {
                animation: tech-glow 2.5s ease-in-out infinite;
              }
              @keyframes scanline {
                0% {
                  transform: translateY(-100%);
                }
                100% {
                  transform: translateY(100%);
                }
              }
              .animate-scanline {
                animation: scanline 2.5s linear infinite;
                opacity: 0.25;
                height: 40%;
                filter: blur(1px);
              }
              @keyframes rotate-slow {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              .animate-rotate-slow {
                animation: rotate-slow 8s linear infinite;
              }
              @keyframes dot-move {
                0% {
                  transform: rotate(0deg) translateY(-220px) scale(1);
                }
                80% {
                  transform: rotate(288deg) translateY(-220px) scale(1.2);
                }
                100% {
                  transform: rotate(360deg) translateY(-220px) scale(1);
                }
              }
              .dot-move {
                left: 50%;
                top: 50%;
                transform-origin: center 10px;
                animation: dot-move 2.5s linear infinite;
              }
              @media (max-width: 767px) {
                .dot-move {
                  transform-origin: center 90px;
                  animation: dot-move 2.5s linear infinite;
                }
              }
            `}</style>
          </div>

          {/* [label: hero text and scroll button] */}
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
        {/* [end hero section] */}

        {/* [label: about section] */}
        <About />
        {/* [end about section] */}

        {/* [label: skills section] */}
        <Skills />
        {/* [end skills section] */}

        {/* [label: experience section] */}
        <Experience />
        {/* [end experience section] */}

        {/* [label: education section] */}
        <Education />
        {/* [end education section] */}

        {/* [label: quote section] */}
        <Quote />
        {/* [end quote section] */}
      </main>
    </>
  );
}
