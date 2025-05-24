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
    const delay = setTimeout(() => setReady(true), 1200);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);

    return () => {
      clearTimeout(delay);
      clearInterval(blinkInterval);
    };
  }, []);

  // --- For moving dot with heart ---
  const [mobileDotAngle, setMobileDotAngle] = useState(0);
  const [desktopDotAngle, setDesktopDotAngle] = useState(0);

  useEffect(() => {
    let frame;
    const animate = () => {
      setMobileDotAngle((prev) => (prev + 0.5) % 360);
      setDesktopDotAngle((prev) => (prev + 0.375) % 360);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!ready) {
    // --- LOADING SCREEN ---
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-white z-[999] px-4">
        {/* Computer Monitor */}
        <div className="flex flex-col items-center">
          <div className="relative bg-black rounded-[2.5rem] w-60 h-60 sm:w-80 sm:h-80 border-[10px] border-black flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Boot animation overlay */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-black flex flex-col items-center justify-center"
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-black animate-pulse mb-4" />
                <span className="text-white font-mono text-lg animate-pulse">
                  Booting up...
                </span>
              </div>
            </motion.div>
            {/* "Screen" content */}
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p className="text-xs text-neutral-400 mb-2 tracking-widest font-mono">
                taylor_home:
              </p>
              <h1 className="text-2xl sm:text-3xl text-white tracking-wider font-mono">
                opening{blink && <span className="ml-1">_</span>}
              </h1>
            </div>
            {/* Scanline effect */}
            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(180deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 2px, transparent 2px, transparent 6px)",
              }}
            />
          </div>
          {/* Stand */}
          <div className="w-16 h-4 bg-black rounded-b-2xl mt-2" />
          <div className="w-8 h-2 bg-neutral-700 rounded-b-xl mt-1" />
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
            <div className="section">
              <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
                <motion.div
                  className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring" }}
                >
                  <div className="block md:hidden col-span-1 mx-auto my-10">
                    <div className="relative flex items-center justify-center w-72 h-72">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 288 288"
                        className="absolute inset-0 z-40 pointer-events-none"
                      >
                        {Array.from({ length: 12 }).map((_, i) => {
                          const angle = (i / 12) * 2 * Math.PI;
                          const radius = 132;
                          const cx = 144 + Math.cos(angle) * radius;
                          const cy = 144 + Math.sin(angle) * radius;
                          const delay = Math.random() * 2;
                          const duration = 1.2 + Math.random() * 1.2;
                          return (
                            <motion.circle
                              key={i}
                              cx={cx}
                              cy={cy}
                              r="13"
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
                        {(() => {
                          const angle = mobileDotAngle;
                          const rad = (angle * Math.PI) / 180;
                          const radius = 132;
                          const cx = 144 + Math.cos(rad) * radius;
                          const cy = 144 + Math.sin(rad) * radius;
                          return (
                            <>
                              <circle cx={cx} cy={cy} r="15" fill="#fff" />
                              <g transform={`translate(${cx - 7},${cy - 7})`}>
                                <path
                                  d="M7 12s-5-3.33-5-7.14C2 2.5 5.5 2 7 5.09 8.5 2 12 2.5 12 4.86c0 3.81-5 7.14-5 7.14z"
                                  fill="#888"
                                />
                              </g>
                            </>
                          );
                        })()}
                      </svg>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative bg-black rounded-full w-56 h-56 flex items-center justify-center overflow-hidden shadow-xl z-30"
                      >
                        <Image
                          src={Me}
                          width={224}
                          height={224}
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
                  </div>
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
                    Junior Tech Professional
                  </motion.h1>
                  <motion.p
                    className="title text-md 2xl:text-xl mt-4 tracking-wider text-black leading-[1.7rem]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    Navigating IT and Cybersecurity - one cloud at a time!
                  </motion.p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
                    <div className="flex flex-row space-x-4">
                      <Button variation="primary">
                        <a
                          href="https://tinyurl.com/o-taylor-bryant-resume"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Download Resume
                        </a>
                      </Button>
                      <Button variation="secondary">
                        <a href="#contact">Ping Me</a>
                      </Button>
                    </div>
                    <img
                      src="/image/qr_resume.png"
                      alt="Resume QR Code"
                      className="w-24 h-24 md:w-28 md:h-28 border border-neutral-300 rounded bg-white"
                      style={{ imageRendering: "crisp-edges" }}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="hidden md:flex col-span-1 mx-auto justify-center items-center -ml-12"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  <div className="relative flex items-center justify-center w-[26rem] h-[26rem]">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 416 416"
                      className="absolute inset-0 z-40 pointer-events-none"
                    >
                      {Array.from({ length: 14 }).map((_, i) => {
                        const angle = (i / 14) * 2 * Math.PI;
                        const radius = 186;
                        const cx = 208 + Math.cos(angle) * radius;
                        const cy = 208 + Math.sin(angle) * radius;
                        const delay = Math.random() * 2;
                        const duration = 1.2 + Math.random() * 1.2;
                        return (
                          <motion.circle
                            key={i}
                            cx={cx}
                            cy={cy}
                            r="16"
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
                      {(() => {
                        const angle = desktopDotAngle;
                        const rad = (angle * Math.PI) / 180;
                        const radius = 186;
                        const cx = 208 + Math.cos(rad) * radius;
                        const cy = 208 + Math.sin(rad) * radius;
                        return (
                          <>
                            <circle cx={cx} cy={cy} r="18" fill="#fff" />
                            <g transform={`translate(${cx - 8},${cy - 8})`}>
                              <path
                                d="M8 14s-6-4-6-8.5C2 2.5 6 2 8 6c2-4 6-3.5 6 0C14 10 8 14 8 14z"
                                fill="#888"
                              />
                            </g>
                          </>
                        );
                      })()}
                    </svg>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="relative bg-black rounded-full w-[18rem] h-[18rem] flex items-center justify-center overflow-hidden shadow-2xl z-30"
                    >
                      <Image
                        src={Me}
                        width={288}
                        height={288}
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
                </motion.div>
              </div>
            </div>
            <div className="section">
              <div className="relative md:h-screen w-screen gap-4 flex justify-center items-center flex-col overflow-hidden">
                {/* About Me Section */}
                <div className="z-0 mb-32 md:mb-8 md:absolute top-[30%] md:right-[18%] md:-translate-y-0 flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
                  <div
                    className="flex items-center justify-center w-full h-full"
                    style={{
                      border: "8px solid #111", // Black outline for ID card
                      borderRadius: "1rem", // Rounded corners for ID card shape
                      overflow: "hidden",
                      background: "#fff", // White background for ID card
                    }}
                  >
                    <Image
                      src={MeAbout}
                      alt="About Me ID Card"
                      width={600}
                      height={600}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* Number Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="text-black font-mono text-2xl md:text-4xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                      >
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                              delay: i * 0.1,
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: 1,
                            }}
                          >
                            {Math.floor(Math.random() * 10)}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[55%] md:top-[30%] col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
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
            <div className="section">
              <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                {/* Projects Section */}
                <div className="z-0 mb-32 md:mb-8 md:absolute top-[30%] md:right-[18%] md:-translate-y-0 flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
                  <div
                    className="flex items-center justify-center w-full h-full"
                    style={{
                      border: "8px solid #111", // Black outline for photo
                      borderRadius: "1rem", // Rounded corners to match ID card
                      overflow: "hidden",
                      background: "#fff", // White background for consistency
                    }}
                  >
                    <Image
                      src={Workspace1}
                      alt="Workspace 1"
                      width={600}
                      height={600}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* Bigger Tail-Chasing Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        width="150%"
                        height="150%"
                        viewBox="0 0 150 150"
                        className="absolute w-40 h-40 md:w-60 md:h-60"
                      >
                        {Array.from({ length: 8 }).map((_, i) => {
                          const angle = (i / 8) * 2 * Math.PI;
                          const cx = 75 + Math.cos(angle) * 50;
                          const cy = 75 + Math.sin(angle) * 50;
                          return (
                            <motion.circle
                              key={i}
                              cx={cx}
                              cy={cy}
                              r="5"
                              fill="#111"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 1,
                              }}
                            />
                          );
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[55%] md:top-[30%] col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
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
            <div className="section">
              <div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
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
                <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
                  <Hr />
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
          </ReactFullpage.Wrapper>
        )}
        {...fullpageOptions}
      />
    </div>
  );
};

export default MyPage;
