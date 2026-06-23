"use client";
import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEnvelope,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Me from "@/public/image/me.jpg";
import Me2 from "@/public/image/me2.png";
import Me3 from "@/public/image/me3.png";
import Workspace from "@/public/image/Wade.jpg";
import Workspace1 from "@/public/image/Workspace1.jpg";
import {
  marqueeItems,
  pageStats,
  processSteps,
  roles,
  skillGroups,
  strengths,
  summaryCards,
  training,
} from "@/data/profileContent";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] },
});

const enter = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

function DotGrid({ className = "", light = false }) {
  const color = light ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 85% 75% at 50% 50%, black 20%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 85% 75% at 50% 50%, black 20%, transparent 100%)",
      }}
    />
  );
}

function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-black/8 bg-white py-3.5 select-none"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 text-[11px] text-black/40 font-medium tracking-[0.2em] uppercase"
          >
            {item}
            <span className="text-black/18 text-[6px]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, children, center = false }) {
  return (
    <motion.div
      {...reveal(0)}
      className={`mb-10 ${center ? "text-center mx-auto" : ""}`}
    >
      <p className="text-[11px] uppercase tracking-[0.28rem] text-black/45 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-2xl md:text-[2.1rem] font-medium text-black leading-tight mb-3">
        {title}
      </h2>
      {children && (
        <p
          className={`text-sm text-black/60 max-w-xl leading-relaxed ${
            center ? "mx-auto" : ""
          }`}
        >
          {children}
        </p>
      )}
    </motion.div>
  );
}

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0a] z-[999]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.p
            className="text-3xl font-light text-white tracking-[0.3em]"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            TB
          </motion.p>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((d) => (
              <motion.div
                key={d}
                className="w-1 h-1 rounded-full bg-white/45"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="overflow-hidden bg-[#f5f4f0]">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-black z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative bg-[#0a0a0a] px-6 sm:px-10 lg:px-16 pt-28 pb-16 lg:pt-36 lg:pb-20"
        style={{ minHeight: "92vh" }}
      >
        <DotGrid light />
        <motion.div
          className="pointer-events-none absolute top-24 right-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.022] blur-3xl"
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.06, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Availability badge */}
          <motion.div
            {...enter(0.04)}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/8 border border-white/12 text-white text-[11px] font-medium tracking-[0.15em] uppercase mb-10"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-55" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            Available · Open to support roles
          </motion.div>

          {/* Mobile keeps a simple stack; desktop uses a 4-column "Tetris" layout. */}
          <div>
            <div className="lg:hidden">
              <motion.h1
                {...enter(0.1)}
                className="text-[3.2rem] sm:text-[4.5rem] xl:text-[6rem] font-light text-white leading-[0.95] tracking-tight mb-6"
              >
                Taylor
                <br />
                Bryant
              </motion.h1>

              <motion.p
                {...enter(0.2)}
                className="text-sm font-light text-white/65 leading-relaxed mb-10 max-w-[260px]"
              >
                Customer Support &amp; Technology Professional
              </motion.p>

              <motion.div
                {...enter(0.28)}
                className="flex flex-wrap gap-3 mb-6"
              >
                <motion.a
                  href="/image/Taylor Bryant - Resume 2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm"
                  whileHover={{ scale: 1.04, backgroundColor: "#e8e8e8" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FontAwesomeIcon icon={faFileArrowDown} />
                  Resume
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm"
                  whileHover={{ scale: 1.04, backgroundColor: "#e8e8e8" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact
                </motion.a>
              </motion.div>

              <motion.div {...enter(0.38)}>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Customer Support",
                    "Problem-Solving",
                    "Remote-Ready",
                    "Support & SaaS Focus",
                  ].map((chip, i) => (
                    <motion.div
                      key={chip}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.44 + i * 0.08, duration: 0.4 }}
                      className="rounded-2xl bg-white/7 border border-white/12 px-3 py-3 text-[11px] font-medium text-white/72 flex items-center justify-center text-center min-h-[3.5rem]"
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.11)" }}
                    >
                      {chip}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-2 mb-2 items-end">
                <motion.div {...enter(0.1)} className="col-start-1">
                  <h1 className="text-[4rem] xl:text-[5rem] font-light text-white leading-[0.95] tracking-tight mb-5">
                    Taylor
                    <br />
                    Bryant
                  </h1>
                  <p className="text-sm font-light text-white/65 leading-relaxed mb-7">
                    Customer Support &amp; Technology Professional
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href="/image/Taylor Bryant - Resume 2026.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm"
                      whileHover={{ scale: 1.04, backgroundColor: "#e8e8e8" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FontAwesomeIcon icon={faFileArrowDown} />
                      View Resume
                    </motion.a>
                    <motion.a
                      href="#contact"
                      className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm"
                      whileHover={{ scale: 1.04, backgroundColor: "#e8e8e8" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Contact Me
                    </motion.a>
                  </div>
                </motion.div>

                <div />
                <div />

                <motion.div
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.75, delay: 0.3 }}
                  className="relative rounded-2xl overflow-hidden border border-white/15 h-[340px]"
                >
                  <Image
                    src={Me}
                    alt="Taylor Bryant"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center top"
                    placeholder="blur"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
              </div>

              <motion.div {...enter(0.38)} className="grid grid-cols-4 gap-2 mt-7">
                {[
                  "Service Experience",
                  "Growth Mindset",
                  "Remote Ready",
                  "Support & SaaS Focus",
                ].map((chip, i) => (
                  <motion.div
                    key={chip}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.44 + i * 0.08, duration: 0.4 }}
                    className="rounded-2xl bg-white/7 border border-white/12 px-3 py-3 text-[11px] font-medium text-white/72 flex items-center justify-center text-center min-h-[3.5rem]"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.11)" }}
                  >
                    {chip}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll bridge */}
      <div className="bg-[#0a0a0a] flex justify-center py-5 border-t border-white/6">
        <motion.a
          href="#profile"
          className="flex flex-col items-center gap-1.5 text-white/42 hover:text-white/70 transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <span className="text-[9px] tracking-[0.25em] uppercase font-medium">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          >
            <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
          </motion.div>
        </motion.a>
      </div>

      {/* ── MARQUEE ──────────────────────────────────────────────── */}
      <Marquee />

      {/* ── STATS ROW ────────────────────────────────────────────── */}
      <section className="px-4 sm:px-6 lg:px-10 py-10 bg-white border-b border-black/6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {pageStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...reveal(i * 0.07)}
              className="rounded-2xl bg-[#f8f8f6] border border-black/8 px-5 py-5"
            >
              <p className="text-4xl font-light text-black tracking-tight mb-1.5">
                {stat.number}
              </p>
              <p className="text-[11px] text-black/52 uppercase tracking-[0.18em] leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROFILE ──────────────────────────────────────────────── */}
      <section
        id="profile"
        className="relative px-4 sm:px-6 lg:px-10 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Work profile + snapshot bento */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,310px] gap-5 mb-16">
            <motion.div
              {...reveal(0)}
              className="rounded-[2rem] bg-[#f8f8f6] border border-black/8 p-7 md:p-9"
            >
              <p className="text-[11px] uppercase tracking-[0.28rem] text-black/45 mb-5">
                Work Profile
              </p>
              <h2 className="text-[1.9rem] md:text-[2.6rem] font-light leading-[1.22] text-black mb-6">
                Calm support, clear notes,
                <br className="hidden md:block" />
                quick product learning.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black/65 leading-relaxed text-sm">
                <p>
                  A customer support and technology professional with six years
                  of customer-facing experience.
                </p>
                <p>
                  Background connects retail service, academic support, AI
                  quality evaluation, and hands-on technical training.
                </p>
                <p>
                  Focused on helping people feel heard, informed, and confident
                  while a problem is being worked through.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...reveal(0.09)}
              className="rounded-[2rem] bg-[#0a0a0a] text-white p-7 flex flex-col justify-between min-h-[240px]"
            >
              <p className="text-[11px] uppercase tracking-[0.28rem] text-white/50">
                Snapshot
              </p>
              <div className="space-y-4 mt-5">
                {summaryCards.map((card) => (
                  <div
                    key={card.label}
                    className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/48 mb-1.5">
                      {card.label}
                    </p>
                    <p className="text-sm text-white/88 leading-relaxed">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Strengths */}
          <section id="strengths" className="mb-20">
            <SectionHeader
              eyebrow="Strengths"
              title="How I show up at work"
              center
            >
              Practical habits I would bring to your team.
            </SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {strengths.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...reveal(index * 0.08)}
                  className="rounded-3xl bg-[#f8f8f6] border border-black/8 p-6 hover:-translate-y-2 hover:shadow-lg hover:bg-white transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center font-semibold text-xs mb-5">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-black text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/62 leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20">
            <SectionHeader
              eyebrow="Process"
              title="How I handle support work"
              center
            >
              A simple workflow that keeps things clear for users and the team.
            </SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
              <motion.div
                className="hidden md:block absolute top-[1.25rem] left-[17%] right-[17%] h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  {...reveal(index * 0.12)}
                  className="relative rounded-3xl bg-[#f7f7f5] border border-black/8 p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold text-xs mb-5 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-black text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-black/62 leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-20">
            <SectionHeader
              eyebrow="Skills"
              title="Tools, habits, and workflows"
              center
            />
            <motion.div
              {...reveal(0.05)}
              className="rounded-[2rem] bg-[#f8f8f6] border border-black/8 p-6 md:p-8 space-y-8"
            >
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-[11px] uppercase tracking-[0.28rem] text-black/45 mb-3">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.93 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.025, duration: 0.28 }}
                        className="rounded-full border border-black/12 bg-white px-3.5 py-1.5 text-sm text-black/68 hover:border-black/28 hover:text-black transition-all duration-150 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </section>

          {/* Photo mosaic */}
          <section>
            {/*
              Desktop layout (3 cols):
              [Me1 — tall, rows 1-2] [Me2 — wide, cols 2-3, row 1]
              [Me1 continues       ] [Me3 — col 2, row 2] [Workspace — col 3, row 2]
              Me2 spans two columns so portrait/illustrated photos never get squeezed.
            */}
            <div
              className="hidden md:grid gap-3"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "260px 200px",
              }}
            >
              {/* Workspace1 — tall left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ gridColumn: "1", gridRow: "1 / 3" }}
                className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[#e8e8e5]"
                whileHover={{ scale: 1.014 }}
              >
                <Image
                  src={Workspace1}
                  alt="Workspace"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>

              {/* Me2 — wide top right (2 cols wide so it never squishes) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                style={{ gridColumn: "2 / 4", gridRow: "1" }}
                className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[#e8e8e5]"
                whileHover={{ scale: 1.014 }}
              >
                <Image
                  src={Me2}
                  alt="Taylor Bryant"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>

              {/* Me3 — bottom middle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.13 }}
                style={{ gridColumn: "2", gridRow: "2" }}
                className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[#e8e8e5]"
                whileHover={{ scale: 1.014 }}
              >
                <Image
                  src={Me3}
                  alt="Taylor Bryant"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center 38%"
                  placeholder="blur"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>

              {/* Workspace — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.18 }}
                style={{ gridColumn: "3", gridRow: "2" }}
                className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[#e8e8e5]"
                whileHover={{ scale: 1.014 }}
              >
                <Image
                  src={Workspace}
                  alt="Workspace"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>

            {/* Mobile — 2-col grid, portrait-friendly aspect ratio */}
            <div className="grid md:hidden grid-cols-2 gap-3">
              {[
                { src: Workspace1, pos: "center" },
                { src: Me2, pos: "center top" },
                { src: Me3, pos: "center 38%" },
                { src: Workspace, pos: "center" },
              ].map(({ src, pos }, i) => (
                <motion.div
                  key={i}
                  {...reveal(i * 0.07)}
                  className="relative overflow-hidden rounded-3xl border border-black/8 bg-[#e8e8e5] aspect-[3/4]"
                  whileHover={{ y: -3 }}
                >
                  <Image
                    src={src}
                    alt={i === 0 || i === 3 ? "Workspace" : "Taylor Bryant"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition={pos}
                    placeholder="blur"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────── */}
      <section id="experience" className="relative px-4 sm:px-6 lg:px-10 py-20">
        <DotGrid className="opacity-[0.18]" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Experience"
            title="Where the support habits came from"
            center
          >
            Three roles, one theme: helping people move forward with less
            friction.
          </SectionHeader>

          <div className="space-y-4">
            {roles.map((role, index) => (
              <motion.article
                key={role.company}
                {...reveal(index * 0.09)}
                className="rounded-[2rem] bg-white border border-black/8 p-5 sm:p-6 md:p-7 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#f5f5f3] border border-black/8 flex items-center justify-center text-black/45 font-semibold text-xs shrink-0 mt-0.5">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-black leading-tight">
                        {role.company}
                      </h3>
                      <p className="text-black/62 text-sm mt-0.5">
                        {role.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-black/52 leading-relaxed pl-12 sm:pl-0 sm:text-right shrink-0">
                    <p>{role.period}</p>
                    <p>{role.setting}</p>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-black/65 leading-relaxed mb-4 pl-12">
                  {role.summary}
                </p>

                {/* Bullets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pl-12">
                  {role.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl bg-[#f7f7f5] border border-black/7 p-3.5 text-sm text-black/65 leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-0.5 text-black/35 shrink-0 text-xs">
                        →
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINING ─────────────────────────────────────────────── */}
      <section id="training" className="px-4 sm:px-6 lg:px-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Training"
            title="Technical foundation in progress"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {training.map((item, index) => (
              <motion.div
                key={item.name}
                {...reveal(index * 0.09)}
                className="rounded-[2rem] bg-[#f8f8f6] border border-black/8 p-6 hover:-translate-y-1.5 hover:shadow-md transition-all duration-200"
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide mb-5 ${
                    item.status.toLowerCase().includes("progress")
                      ? "bg-black/6 text-black/80 border border-black/15"
                      : "bg-[#0a0a0a] text-white"
                  }`}
                >
                  {item.status}
                </span>
                <h3 className="font-semibold text-black text-sm mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-black/62 leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" className="px-4 sm:px-6 lg:px-10 pt-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...reveal(0)}
            className="relative rounded-[2rem] bg-[#0a0a0a] text-white overflow-hidden p-8 md:p-12"
          >
            <DotGrid light className="opacity-55" />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28rem] text-white/50 mb-4">
                  Contact
                </p>
                <h2 className="text-2xl md:text-[2.4rem] font-light leading-[1.25] mb-3">
                  Ready for support, SaaS,
                  <br className="hidden md:block" /> onboarding, and operations.
                </h2>
                <p className="text-white/58 text-sm">
                  Email is the best way to reach me.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <a
                  href="mailto:o.taylor.bryant@gmail.com?subject=Hi Taylor!"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-semibold text-sm hover:bg-neutral-100 transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email Taylor
                </a>
                <a
                  href="https://www.linkedin.com/in/o-taylor-bryant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/22 text-white w-12 h-12 hover:bg-white hover:text-black transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/o-taylor-bryant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/22 text-white w-12 h-12 hover:bg-white hover:text-black transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Back to top */}
          <motion.a
            {...reveal(0.1)}
            href="#home"
            className="mt-8 mx-auto flex w-fit flex-col items-center gap-1.5 text-black/35 hover:text-black/65 transition-colors duration-200"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
            </motion.div>
            <span className="text-[9px] tracking-[0.25em] uppercase font-medium">
              Back to top
            </span>
          </motion.a>
        </div>
      </section>
    </main>
  );
}
