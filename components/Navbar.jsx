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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 80);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const isLightHeader = isScrolled && !isNavOpen;

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-4"
      >
        <div
          className={`mx-auto max-w-7xl rounded-full border backdrop-blur-xl transition-all duration-500 flex items-center justify-between h-14 px-3 pl-4 ${
            isNavOpen
              ? "bg-black/65 border-white/12"
              : isLightHeader
                ? "bg-white/82 border-black/8 shadow-sm shadow-black/5"
                : "bg-white/[0.055] border-white/12"
          }`}
        >
          <Link
            href="/"
            className={`group inline-flex items-center gap-3 transition-colors duration-300 ${
              isLightHeader ? "text-black" : "text-white"
            }`}
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-medium tracking-[0.18em] transition-colors duration-300 ${
                isLightHeader
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              TB
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-medium leading-none tracking-tight">
                Taylor Bryant
              </span>
              <span
                className={`mt-1 block text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isLightHeader ? "text-black/45" : "text-white/48"
                }`}
              >
                Support Profile
              </span>
            </span>
          </Link>

          <button
            className={`group flex h-10 items-center gap-3 rounded-full border px-4 transition-all duration-300 ${
              isLightHeader
                ? "border-black/10 bg-black/[0.03] text-black hover:bg-black/6"
                : "border-white/12 bg-white/[0.06] text-white hover:bg-white/[0.1]"
            }`}
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isNavOpen}
          >
            <span className="hidden sm:block text-[10px] font-medium uppercase tracking-[0.18em]">
              Menu
            </span>
            <div
              className="relative h-3.5 w-5"
              aria-hidden="true"
            >
              <span
                className={`absolute left-0 top-1/2 h-px w-5 rounded-full transition-all duration-300 ${
                  isLightHeader ? "bg-black" : "bg-white"
                } ${isNavOpen ? "rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-5 rounded-full transition-all duration-300 ${
                  isLightHeader ? "bg-black" : "bg-white"
                } ${isNavOpen ? "-rotate-45" : "translate-y-1.5"}`}
              />
            </div>
          </button>
        </div>
      </nav>
      <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};

export default Navbar;
