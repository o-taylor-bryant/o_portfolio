"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleItemClick = () => {
    setIsNavOpen(false);
  };

  const navVariant = {
    open: {
      clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    closed: {
      clipPath: "circle(0px at calc(100% - 120px) 35px)",
      transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 30 },
    },
  };

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (isMobile) {
    navVariant.open = {
      clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
      transition: { type: "tween" },
    };
    navVariant.closed = {
      clipPath: "circle(0px at calc(100% - 35px) 35px)",
      transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
    };
  } else {
    navVariant.open = {
      clipPath: `circle(2444px at calc(100% - 40px) 40px)`,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    };
    navVariant.closed = {
      clipPath: "circle(0px at calc(100% - 120px) 35px)",
      transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
    };
  }

  const itemVariants = {
    open: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom, type: "spring", stiffness: 400, damping: 40 },
    }),
    closed: {
      opacity: 0,
      x: -80,
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const navLinks = [
    { label: "Home", href: "/", delay: 0.1 },
    { label: "Profile", href: "/#profile", delay: 0.2 },
    { label: "Experience", href: "/#experience", delay: 0.3 },
    { label: "Contact", href: "/#contact", delay: 0.4 },
  ];

  return (
    <motion.div
      className="fixed z-[45] w-full h-screen flex items-center justify-center backdrop-blur-sm overflow-hidden"
      variants={navVariant}
      animate={isNavOpen ? "open" : "closed"}
      initial={false}
      aria-hidden={!isNavOpen}
      style={{ pointerEvents: isNavOpen ? "auto" : "none" }}
    >
      <div className="relative backdrop-blur-sm opacity-95 flex flex-col items-center min-h-[100vh] bg-black min-w-[100vw]">
        <div className="flex flex-col items-center space-y-8 my-auto mx-0 z-50">
          <motion.h1
            variants={itemVariants}
            animate={isNavOpen ? "open" : "closed"}
            className="text-6xl font-bold text-white"
          >
            Menu
          </motion.h1>
          {navLinks.map(({ label, href, delay }) => (
            <Link key={label} href={href}>
              <div className="text-2xl font-bold text-white" onClick={handleItemClick}>
                <motion.h2
                  className="text-white"
                  variants={itemVariants}
                  animate={isNavOpen ? "open" : "closed"}
                  custom={delay}
                >
                  {label}
                </motion.h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const navRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${
          isNavOpen
            ? "backdrop-filter backdrop-blur-md bg-black bg-opacity-50"
            : "backdrop-filter backdrop-blur-md"
        } bg-opacity-50 flex flex-row justify-between items-center h-16 z-50`}
      >
        <div>
          <h1
            className={`text-xl font-bold ml-2 md:ml-0 transition-colors ease duration-500 ${
              isNavOpen ? "text-white" : "text-black"
            }`}
          >
            Taylor Bryant
          </h1>
        </div>
        <div className="flex flex-row items-center">
          <button
            className="burger button flex flex-col justify-center items-center space-y-1.5"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle navigation menu"
          >
            <div
              className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
                isNavOpen ? "rotate-45 bg-white translate-y-[2px]" : ""
              }`}
            />
            <div
              className={`w-10 h-1 bg-black rounded-full transition-all ease duration-300 ${
                isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
              }`}
            />
          </button>
        </div>
      </nav>
      <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};

export default Navbar;
