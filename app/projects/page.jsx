"use client";
import { useEffect, useState } from "react";
import projectData from "@/project links.json/data.json";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faTerminal,
  faCode,
  faRocket,
  faFolder,
  faFolderOpen,
  faClock,
  faUser,
  faFileAlt,
  faImages,
  faLaptopCode,
  faShieldAlt,
  faNetworkWired,
  faBug,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ProjectIcon = ({ project, isHovered }) => {
  // Map project types to icons
  const getProjectDetails = () => {
    if (project.title.toLowerCase().includes("audit")) {
      return { icon: faShieldAlt };
    } else if (project.title.toLowerCase().includes("incident")) {
      return { icon: faBug };
    } else if (project.title.toLowerCase().includes("network")) {
      return { icon: faNetworkWired };
    } else if (project.title.toLowerCase().includes("server")) {
      return { icon: faServer };
    }
    return { icon: faLaptopCode };
  };

  const { icon } = getProjectDetails();

  return (
    <motion.div
      className="relative w-full h-48 bg-neutral-50 flex items-center justify-center overflow-hidden"
      initial={false}
      animate={isHovered ? { backgroundColor: "rgb(0, 0, 0, 0.05)" } : {}}
    >
      <motion.div
        initial={{ scale: 1, opacity: 0.3 }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.8 : 0.3,
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="text-6xl text-black"
      >
        <FontAwesomeIcon icon={icon} />
      </motion.div>

      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={false}
        animate={isHovered ? { opacity: 0.2 } : { opacity: 0.1 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgb(0, 0, 0, 0.2) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </motion.div>

      {/* Interactive Elements */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 right-4 flex space-x-2"
            >
              {project.pdf && (
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="text-black/60" />
                </motion.span>
              )}
              {((project.images && project.images.length > 0) ||
                (project.reports &&
                  project.reports.some((r) => r.images?.length > 0))) && (
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <FontAwesomeIcon icon={faImages} className="text-black/60" />
                </motion.span>
              )}
            </motion.div>

            {/* Animated Lines */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-black/20"
              style={{ transformOrigin: "left" }}
            />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              className="absolute top-0 bottom-0 right-0 w-[2px] bg-black/20"
              style={{ transformOrigin: "top" }}
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Page() {
  const [ready, setReady] = useState(false);
  const [blink, setBlink] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => setReady(true), 1200);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    const timeInterval = setInterval(() => setCurrentTime(new Date()), 1000);

    // Simulate terminal commands
    const commands = [
      "scanning system...",
      "loading projects...",
      "initializing interface...",
      "ready",
    ];

    commands.forEach((cmd, i) => {
      setTimeout(() => {
        setCommandHistory((prev) => [...prev, cmd]);
        setCurrentCommand(cmd);
      }, 300 * (i + 1));
    });

    return () => {
      clearTimeout(delay);
      clearInterval(blinkInterval);
      clearInterval(timeInterval);
    };
  }, []);

  if (!ready) {
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-[rgb(230,230,230)] z-[999] px-4">
        <div className="w-full max-w-4xl rounded-xl border border-black/20 bg-white p-6 shadow-2xl font-mono text-center">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-black/80 rounded-full"></span>
              <span className="w-3 h-3 bg-black/60 rounded-full"></span>
              <span className="w-3 h-3 bg-black/40 rounded-full"></span>
            </div>
            <span className="text-xs text-black/60">system_boot</span>
          </div>
          <div className="text-left mb-4">
            {commandHistory.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm text-black/70"
              >
                <span className="text-black/40">$ </span>
                {cmd}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-black/70"
            >
              <span className="text-black/40">$ </span>
              {currentCommand}
              {blink && <span className="ml-1 opacity-50">_</span>}
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(230,230,230)] flex items-center justify-center px-4 py-20">
      <FixedButton href="/">
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButton>

      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-xl border-2 border-black shadow-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 0 0 2px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-100 px-4 py-2 border-b border-black/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-black/80 rounded-full"></span>
                <span className="w-3 h-3 bg-black/60 rounded-full"></span>
                <span className="w-3 h-3 bg-black/40 rounded-full"></span>
              </div>
              <span className="text-xs text-black/60 font-mono">
                taylor_projects v2.0
              </span>
              <div className="flex items-center space-x-4 text-xs text-black/60">
                <span>
                  <FontAwesomeIcon icon={faUser} className="mr-1" /> user:
                  taylor
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />{" "}
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Terminal Info Bar */}
          <div className="bg-neutral-50 px-4 py-2 border-b border-black/10 flex justify-between items-center text-xs font-mono">
            <div className="flex items-center space-x-4 text-black/60">
              <span>system: windows_11</span>
              <span>shell: powershell</span>
              <span>theme: modern_light</span>
            </div>
            <span className="text-black/60">
              total_projects: {projectData.Projects.length}
            </span>
          </div>

          {/* Projects Grid */}
          <div className="p-6">
            {/* Directory Path */}
            <div className="mb-4 font-mono text-sm text-black/70 border-b border-black/10 pb-2">
              <span className="text-black/40">current_directory: </span>
              /projects/portfolio/
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence>
                {projectData.Projects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredProject(project.slug)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <div className="group relative bg-white border-2 border-black/10 rounded-xl overflow-hidden hover:border-black/30 transition-all duration-300">
                        {/* Project Header */}
                        <div className="bg-neutral-50 px-3 py-2 border-b border-black/10 flex items-center justify-between">
                          <div className="flex items-center">
                            <FontAwesomeIcon
                              icon={
                                hoveredProject === project.slug
                                  ? faFolderOpen
                                  : faFolder
                              }
                              className="text-black/60 mr-2"
                            />
                            <span className="font-mono text-sm text-black/80">
                              {project.title.toLowerCase()}
                            </span>
                          </div>
                          <span className="text-xs text-black/40">
                            modified: {new Date().toLocaleDateString()}
                          </span>
                        </div>

                        {/* Project Icon/Preview */}
                        <ProjectIcon
                          project={project}
                          isHovered={hoveredProject === project.slug}
                        />

                        {/* Project Info */}
                        <div className="p-4">
                          <p className="text-black/70 text-sm font-mono mb-4 line-clamp-2">
                            {project.description || project.desc?.[0]}
                          </p>

                          {/* Command Line */}
                          <div className="mt-4 pt-3 border-t border-black/10">
                            <div className="font-mono text-xs text-black/40 flex items-center">
                              <span className="mr-2">$</span>
                              <span className="text-black/60">open</span>
                              <span className="mx-1 text-black/40">
                                --project
                              </span>
                              <span className="text-black/80">
                                {project.slug}
                              </span>
                              {blink && hoveredProject === project.slug && (
                                <span className="ml-1 opacity-50">_</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Terminal Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-neutral-100 px-4 py-2 border-t border-black/10"
          >
            <p className="text-center text-black/40 text-xs font-mono">
              © 2025 Taylor Terminal • Your interactive way to view my work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
