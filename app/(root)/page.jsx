"use client";
import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";

// components
import Button from "@/components/Button";
import Me from "@/public/image/me.jpg";
import MeAbout from "@/public/image/me2.png";
import Workspace1 from "@/public/image/Workspace1.jpg";
import Workspace2 from "@/public/image/Workspace2.jpg";
import Hr from "@/components/Hr";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  // --- Loading Screen ---
  const [ready, setReady] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => setReady(true), 2500);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);

    return () => {
      clearTimeout(delay);
      clearInterval(blinkInterval);
    };
  }, []);

  if (!ready) {
    // --- LOADING SCREEN ---
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-[rgb(230,230,230)] z-[999] px-4">
        <div className="w-full max-w-md rounded-md border border-neutral-800 bg-black p-6 shadow-lg font-mono text-center">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
            <span className="text-xs text-neutral-400">root-folder</span>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 mb-2 tracking-widest">
            taylor_home:
          </p>
          <h1 className="text-3xl sm:text-4xl text-white tracking-wider">
            opening{blink && <span className="ml-1">_</span>}
          </h1>
        </div>
      </div>
    );
  }
  // --- End Loading Screen ---

  // --- Fullpage.js Options ---
  const fullpageOptions = {
    anchors: ["home", "about", "projects", "contact"],
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
    menu: "#sidebar",
    lockAnchors: false,
  };

  return (
    <div>
      <ReactFullpage
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            {/* --- SECTION 1: HOME / HERO --- */}
            <div className="section">
              <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
                {/* --- HERO TEXT & MOBILE IMAGE --- */}
                <motion.div
                  className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring" }}
                >
                  {/* --- MOBILE PROFILE IMAGE --- */}
                  <div className="block md:hidden col-span-1 mx-auto my-10">
                    <div className="bg-slate-500 rounded-full overflow-hidden aspect-square w-72 h-72 border-4 border-black grayscale hover:grayscale-0 transition-all ease duration-300 flex items-center justify-center">
                      <Image
                        src={Me}
                        width={288}
                        height={288}
                        className="object-cover w-full h-full"
                        alt="Taylor Bryant"
                        placeholder="blur"
                      />
                    </div>
                  </div>
                  {/* --- HERO TEXT --- */}
                  <motion.h3
                    className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-black"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    Hi, I&apos;m Taylor Bryant
                  </motion.h3>
                  <motion.h1
                    className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    Entry-Level Tech Professional
                  </motion.h1>
                  <motion.p
                    className="title text-md 2xl:text-xl mt-4 tracking-wider text-black leading-[1.7rem]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    Navigating IT and Cybersecurity - one cloud at a time!
                  </motion.p>
                  {/* --- HERO BUTTONS --- */}
                  <motion.div
                    className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                  >
                    <Button variation="primary" disabled>
                      Resume Coming Soon
                    </Button>
                    <Button variation="secondary">
                      <a href="#contact">Ping Me</a>
                    </Button>
                  </motion.div>
                </motion.div>
                {/* --- DESKTOP PROFILE IMAGE --- */}
                <motion.div
                  className="hidden md:flex col-span-1 mx-auto justify-center items-center"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  <div className="rounded-full overflow-hidden aspect-square w-96 h-96 border-4 border-black grayscale hover:grayscale-0 transition-all ease duration-300 flex items-center justify-center">
                    <Image
                      src={Me}
                      width={384}
                      height={384}
                      placeholder="blur"
                      alt="Taylor Bryant"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* --- SECTION 2: ABOUT --- */}
            <div className="section">
              <div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
                {/* --- ANIMATED SVG / DECORATION --- */}
                <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[18%] md:-translate-y-0 flex items-center justify-center w-72 h-72 md:w-96 md:h-96">
                  <motion.div
                    className="flex items-center justify-center w-72 h-72 md:w-96 md:h-96"
                    initial={{ x: 300, opacity: 0, z: -100 }}
                    whileInView={{ x: 0, opacity: 1, z: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    {/* Animated code brackets SVG */}
                    <svg
                      width="80%"
                      height="80%"
                      viewBox="0 0 200 200"
                      fill="none"
                      className="drop-shadow-lg"
                    >
                      <g>
                        <polyline
                          points="60,30 30,100 60,170"
                          stroke="#111"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-pulse"
                          style={{ filter: "drop-shadow(0 0 8px #000)" }}
                        />
                        <polyline
                          points="140,30 170,100 140,170"
                          stroke="#111"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="animate-pulse"
                          style={{ filter: "drop-shadow(0 0 8px #000)" }}
                        />
                      </g>
                      <rect
                        x="90"
                        y="90"
                        width="20"
                        height="20"
                        rx="4"
                        fill="#111"
                        className="animate-ping"
                        opacity="0.7"
                      />
                    </svg>
                  </motion.div>
                </div>
                {/* --- ABOUT TEXT & BUTTON --- */}
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                  >
                    About Me
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-black leading-[1.7rem] mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    A look into my personal processing file!
                  </motion.p>
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Button variation="primary">
                      <Link href="/about">View</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* --- SECTION 3: PROJECTS --- */}
            <div className="section">
              <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                {/* --- PROJECTS IMAGE --- */}
                <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[20%] md:-translate-y-0 ">
                  <motion.div
                    className="rounded-full overflow-hidden w-72 h-72 md:w-96 md:h-96 border-4 border-black grayscale hover:grayscale-0 transition-all ease duration-300 flex items-center justify-center bg-slate-300"
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                  >
                    <Image
                      src={Workspace1}
                      width={384}
                      height={384}
                      className="object-cover w-full h-full"
                      alt="Workspace 1"
                      placeholder="blur"
                    />
                  </motion.div>
                </div>
                {/* --- PROJECTS TEXT & BUTTON --- */}
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                  >
                    Projects
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-black leading-[1.7rem] mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    My little collection of personal commits.
                  </motion.p>
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <Button variation="primary">
                      <Link href="/projects">View</Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* --- SECTION 4: CONTACT --- */}
            <div className="section">
              <div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                {/* --- CONTACT IMAGE --- */}
                <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
                  <motion.div
                    className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
                    initial={{ x: 300, opacity: 0, z: -100 }}
                    whileInView={{ x: 0, opacity: 1, z: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <Image
                      src={Workspace2}
                      layout="fill"
                      className="object-cover"
                      alt="Workspace 2"
                      placeholder="blur"
                    />
                  </motion.div>
                </div>
                {/* --- CONTACT TEXT & SOCIAL LINKS --- */}
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
                  <motion.h1
                    className="bg-white lg:bg-transparent bg-opacity-50 px-3 md-px-0 text-black text-5xl md:text-8xl font-bold mb-3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                  >
                    Ping Received.
                  </motion.h1>
                  <Hr />
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-black leading-[1.7rem] md:mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    You had a good signal - now, let&apos;s get in touch!
                  </motion.p>
                  <motion.p
                    className="title text-xl mt-4 tracking-wider text-black leading-[1.7rem] mb-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    <a href="mailto:o.taylor.bryant@gmail.com?subject=Hi!&body=Hi Taylor,">
                      o.taylor.bryant@gmail.com
                    </a>
                  </motion.p>
                  {/* --- SOCIAL ICONS --- */}
                  <div className="flex justify-center items-center space-x-4">
                    <motion.a
                      href="mailto:o.taylor.bryant@gmail.com?subject=Hi!&body=Hello Taylor,"
                      className="flex justify-center items-center w-14 h-14 rounded-full bg-black text-white shadow-lg transition-all duration-200 hover:bg-white hover:text-black hover:scale-105 active:scale-95"
                      initial={{ y: 40, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        y: { delay: 0.1 },
                        opacity: { delay: 0.2 },
                      }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
                    </motion.a>
                    <motion.a
                      href="https://github.com/o-taylor-bryant"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center w-14 h-14 rounded-full bg-black text-white shadow-lg transition-all duration-200 hover:bg-white hover:text-black hover:scale-105 active:scale-95"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.2 },
                        opacity: { delay: 0.3 },
                      }}
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/o-taylor-bryant/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center w-14 h-14 rounded-full bg-black text-white shadow-lg transition-all duration-200 hover:bg-white hover:text-black hover:scale-105 active:scale-95"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        y: { delay: 0.4 },
                        opacity: { delay: 0.5 },
                      }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
            {/* --- END OF SECTIONS --- */}
          </ReactFullpage.Wrapper>
        )}
        {...fullpageOptions}
      />
    </div>
  );
};

export default MyPage;
