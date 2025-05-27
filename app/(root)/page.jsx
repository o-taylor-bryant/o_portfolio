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
import {
  faEnvelope,
  faCode,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const MyPage = () => {
  // --- Loading Screen ---
  const [ready, setReady] = useState(false);
  const [blink, setBlink] = useState(true);
  const [loadingStage, setLoadingStage] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadingSequence = [
      { text: "Initializing portfolio...", delay: 0 },
      { text: "Loading assets...", delay: 800 },
      { text: "Preparing animations...", delay: 1600 },
      { text: "Configuring interface...", delay: 2400 },
      { text: "Ready", delay: 3200 },
    ];

    loadingSequence.forEach(({ text, delay }, index) => {
      setTimeout(() => {
        setLoadingText(text);
        setLoadingStage(index + 1);
      }, delay);
    });

    const finalDelay = setTimeout(() => setReady(true), 3700);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);

    return () => {
      clearTimeout(finalDelay);
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

  // Add mouse move handler for the about photo effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const [idHovered, setIdHovered] = useState(false);

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
              _welcome to my portfolio!
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
                  <FontAwesomeIcon icon={faRocket} />
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
                animate={{ width: `${(loadingStage / 5) * 100}%` }}
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
                  <div className="font-medium">Projects</div>
                  <div className="font-mono">Loaded</div>
                </div>
                <div>
                  <div className="font-medium">Animations</div>
                  <div className="font-mono">Ready</div>
                </div>
                <div>
                  <div className="font-medium">System</div>
                  <div className="font-mono">Active</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

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
                  {/* Mobile Photo */}
                  <div className="block md:hidden relative w-64 h-64 mb-10">
                    <motion.div
                      className="relative w-full h-full rounded-full overflow-hidden border-2 border-black/10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                    >
                      <Image
                        src={Me}
                        layout="fill"
                        className="object-cover"
                        alt="Taylor Bryant"
                        placeholder="blur"
                      />
                      <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{
                          background:
                            "radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.1) 100%)",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <motion.h3
                    className="uppercase text-xl mb-3 font-normal tracking-[.5rem] text-black"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    Hi, I&apos;m Taylor Bryant
                  </motion.h3>
                  <motion.h1
                    className="text-black text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    Junior Tech Professional
                  </motion.h1>
                  <motion.p
                    className="title text-md 2xl:text-xl mt-4 tracking-wider text-black leading-[1.7rem] max-w-2xl"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    Navigating IT and Cybersecurity - one cloud at a time!
                  </motion.p>

                  {/* Buttons and QR */}
                  <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 mt-10 w-full">
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

                {/* Desktop Photo */}
                <motion.div
                  className="hidden md:flex col-span-1 mx-auto justify-center items-center -ml-12"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  <div
                    className="relative flex items-center justify-center w-[26rem] h-[26rem]"
                    onMouseMove={handleMouseMove}
                  >
                    {/* Animated dots */}
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
                    </svg>

                    {/* Main photo container */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="relative bg-black rounded-full w-[18rem] h-[18rem] flex items-center justify-center overflow-hidden shadow-2xl z-30"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: `perspective(1000px) rotateY(${
                          (mousePosition.x - 0.5) * 10
                        }deg) rotateX(${(mousePosition.y - 0.5) * -10}deg)`,
                        transition: "transform 0.2s ease-out",
                      }}
                    >
                      <Image
                        src={Me}
                        width={288}
                        height={288}
                        className="object-cover w-full h-full grayscale rounded-full"
                        alt="Taylor Bryant"
                        placeholder="blur"
                      />

                      {/* Overlay effects */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at ${
                            mousePosition.x * 100
                          }% ${
                            mousePosition.y * 100
                          }%, transparent 20%, rgba(0,0,0,0.4) 100%)`,
                          transition: "background 0.2s ease-out",
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 pointer-events-none rounded-full opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                          transform: `perspective(1000px) translateZ(20px)`,
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="section">
              <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                {/* About Me Section */}
                <div className="z-0 mb-32 md:mb-8 md:absolute top-[30%] md:right-[18%] md:-translate-y-0 flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    {/* Main Image Container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-[3px] border-black bg-black/20 backdrop-blur-sm">
                      <Image
                        src={MeAbout}
                        layout="fill"
                        objectFit="cover"
                        className="grayscale"
                        alt="Profile"
                      />
                      {/* Glass Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>
                    {/* Subtle Glow */}
                    <motion.div
                      className="absolute -inset-[2px] rounded-2xl z-0"
                      animate={{
                        boxShadow: [
                          "0 0 0 1px rgba(255,255,255,0.1)",
                          "0 0 0 2px rgba(255,255,255,0.2)",
                          "0 0 0 1px rgba(255,255,255,0.1)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </div>
                <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
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
                {/* Projects Section - Updated Workspace1 Image */}
                <div className="z-0 mb-32 md:mb-8 md:absolute top-[30%] md:right-[18%] md:-translate-y-0 flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
                  <motion.div
                    className="relative w-full h-full rounded-2xl overflow-hidden"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border-[3px] border-black bg-black/20 backdrop-blur-sm">
                      <Image
                        src={Workspace1}
                        alt="Workspace 1"
                        layout="fill"
                        objectFit="cover"
                      />
                      {/* Glass Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>
                    {/* Subtle Glow */}
                    <motion.div
                      className="absolute -inset-[2px] rounded-2xl z-0"
                      animate={{
                        boxShadow: [
                          "0 0 0 1px rgba(255,255,255,0.1)",
                          "0 0 0 2px rgba(255,255,255,0.2)",
                          "0 0 0 1px rgba(255,255,255,0.1)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
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
              <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                {/* Contact Section - Updated Workspace2 Image */}
                <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
                  <motion.div
                    className="relative bg-black/20 rounded-2xl overflow-hidden h-[400px] md:h-[600px] w-[85vw] md:w-[35vw]"
                    initial={{ x: 300, opacity: 0, z: -100 }}
                    whileInView={{ x: 0, opacity: 1, z: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                  >
                    <div className="relative h-full w-full rounded-2xl overflow-hidden border-[3px] border-black backdrop-blur-sm">
                      <Image
                        src={Workspace2}
                        layout="fill"
                        className="object-cover"
                        alt="My Workspace"
                        placeholder="blur"
                      />
                      {/* Glass Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>
                    {/* Subtle Glow */}
                    <motion.div
                      className="absolute -inset-[2px] rounded-2xl z-0"
                      animate={{
                        boxShadow: [
                          "0 0 0 1px rgba(255,255,255,0.1)",
                          "0 0 0 2px rgba(255,255,255,0.2)",
                          "0 0 0 1px rgba(255,255,255,0.1)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                </div>
                <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
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
