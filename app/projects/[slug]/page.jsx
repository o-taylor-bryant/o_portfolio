"use client";

import projectData from "@/project links.json/data.json";
import { notFound, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import FixedButton from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faLink,
  faCode,
  faRocket,
  faImages,
  faFileAlt,
  faSearch,
  faSearchPlus,
  faSearchMinus,
  faArrowLeft,
  faArrowRight,
  faTimes,
  faFile,
  faFolder,
  faFolderOpen,
  faShieldAlt,
  faLock,
  faUserShield,
  faClipboardCheck,
  faClock,
  faUser,
  faTerminal,
  faBug,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const AuditSection = ({ title, content, icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white border-2 border-black/10 rounded-xl overflow-hidden"
  >
    <div className="bg-neutral-50 px-3 py-2 border-b border-black/10 flex items-center justify-between">
      <div className="flex items-center">
        <FontAwesomeIcon icon={icon} className="text-black/60 mr-2" />
        <span className="font-mono text-sm text-black/80">{title}</span>
      </div>
    </div>
    <div className="p-4 font-mono text-sm text-black/70">{content}</div>
  </motion.div>
);

const IncidentSection = ({
  title,
  content,
  icon,
  severity = "low",
  delay = 0,
}) => {
  const severityColors = {
    critical: "rgb(0, 0, 0)", // Black
    high: "rgb(0, 0, 0)",
    medium: "rgb(0, 0, 0)",
    low: "rgb(0, 0, 0)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white border-2 border-black/10 rounded-xl overflow-hidden"
    >
      <div className="bg-neutral-50 px-3 py-2 border-b border-black/10 flex items-center justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon icon={icon} className="text-black/60 mr-2" />
          <span className="font-mono text-sm text-black/80">{title}</span>
        </div>
        <span
          className="text-xs font-mono px-2 py-1 rounded"
          style={{
            backgroundColor: severityColors[severity] + "20",
            color: severityColors[severity],
          }}
        >
          {severity}
        </span>
      </div>
      <div className="p-4 font-mono text-sm text-black/70">{content}</div>
    </motion.div>
  );
};

const PDFSection = ({ title, pdfs, icon, severity = "low" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white border-2 border-black/10 rounded-xl overflow-hidden"
  >
    <div className="bg-neutral-50 px-3 py-2 border-b border-black/10 flex items-center justify-between">
      <div className="flex items-center">
        <FontAwesomeIcon icon={icon} className="text-black/60 mr-2" />
        <span className="font-mono text-sm text-black/80">{title}</span>
      </div>
      {severity && (
        <span
          className="text-xs font-mono px-2 py-1 rounded"
          style={{
            backgroundColor: severityColors[severity] + "20",
            color: severityColors[severity],
          }}
        >
          {severity}
        </span>
      )}
    </div>
    <div className="p-4 space-y-4">
      {pdfs.map((pdf, index) => (
        <motion.button
          key={index}
          onClick={() => window.open(pdf.url, "_blank")}
          className="w-full flex items-center justify-between p-3 bg-black/5 rounded-lg hover:bg-black/10 transition-colors font-mono text-sm text-black/70"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faFileAlt} className="text-black/60" />
            <span>{pdf.title || `Report ${index + 1}`}</span>
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="text-black/40" />
        </motion.button>
      ))}
    </div>
  </motion.div>
);

/* [PROJECT DETAILS PAGE] */
export default function ProjectPage() {
  const params = useParams();
  const [ready, setReady] = useState(false);
  const [blink, setBlink] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [hoveredReport, setHoveredReport] = useState(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [activeSection, setActiveSection] = useState("overview");

  const project = projectData.Projects.find((p) => p.slug === params.slug);
  const isAuditProject = project?.title.toLowerCase().includes("audit");
  const isIncidentProject = project?.title.toLowerCase().includes("incident");

  // Get all images for the project
  const getAllImages = () => {
    if (project.reports) {
      return project.reports.reduce((acc, report) => {
        if (report.images) {
          acc.push(...report.images);
        }
        return acc;
      }, []);
    }
    return project.images || [];
  };

  const allImages = getAllImages();

  useEffect(() => {
    const delay = setTimeout(() => setReady(true), 1200);
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);

    // Project-specific boot sequence
    let commands = [];
    if (isAuditProject) {
      commands = [
        "loading audit data...",
        "analyzing security metrics...",
        "generating report interface...",
        "ready",
      ];
    } else if (isIncidentProject) {
      commands = [
        "initializing incident database...",
        "loading case files...",
        "analyzing incident patterns...",
        "generating incident timeline...",
        "ready",
      ];
    }

    commands.forEach((cmd, i) => {
      setTimeout(() => {
        setCommandHistory((prev) => [...prev, cmd]);
        setCurrentCommand(cmd);
      }, 300 * (i + 1));
    });

    return () => {
      clearTimeout(delay);
      clearInterval(blinkInterval);
    };
  }, [isAuditProject, isIncidentProject]);

  const handleZoom = (delta) => {
    setZoomLevel((prev) => {
      const newZoom = prev + delta;
      return Math.min(Math.max(1, newZoom), 3);
    });
  };

  const handleImageDrag = (e) => {
    if (isDragging && zoomLevel > 1) {
      const { movementX, movementY } = e;
      setImagePosition((prev) => ({
        x: prev.x + movementX,
        y: prev.y + movementY,
      }));
    }
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const navigateImages = (direction) => {
    const totalImages = allImages.length;
    if (totalImages > 1) {
      setCurrentImageIndex((prev) => {
        let newIndex = prev + direction;
        if (newIndex >= totalImages) newIndex = 0;
        if (newIndex < 0) newIndex = totalImages - 1;
        resetZoom();
        return newIndex;
      });
    }
  };

  // Update navigation tabs
  const getNavigationTabs = () => {
    if (isIncidentProject) {
      return ["overview", "timeline", "visuals", "documentation"];
    }
    return ["overview", "visuals", "documentation"];
  };

  // Collect all PDFs from the project
  const getAllPDFs = () => {
    if (project.reports) {
      return project.reports.map((report, index) => ({
        title: report.title,
        url: report.pdf,
        severity: report.severity || "medium",
      }));
    }
    return project.pdf ? [{ title: "Full Report", url: project.pdf }] : [];
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[rgb(230,230,230)] flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl font-mono mb-4 text-black">
            Error 404: Project Not Found
          </h1>
          <p className="text-black/60 mb-8 font-mono">
            The requested project could not be found.
          </p>
          <FixedButton href="/projects">
            <FontAwesomeIcon icon={faChevronLeft} className="text-black mr-2" />
            Back to Projects
          </FixedButton>
        </div>
      </div>
    );
  }

  if (!ready) {
    return (
      <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-[rgb(230,230,230)] z-[999] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-4xl rounded-xl border-2 border-black bg-white shadow-2xl font-mono text-center p-6"
          style={{
            boxShadow:
              "0 0 0 2px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(0, 0, 0, 0.1)",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-between items-center mb-4"
          >
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-black/80 rounded-full"></span>
              <span className="w-3 h-3 bg-black/60 rounded-full"></span>
              <span className="w-3 h-3 bg-black/40 rounded-full"></span>
            </div>
            <span className="text-xs text-black/60">audit_viewer</span>
          </motion.div>
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
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[rgb(230,230,230)] flex items-center justify-center px-4 py-20">
      {/* Back Button */}
      <FixedButton href="/projects">
        <FontAwesomeIcon icon={faChevronLeft} className="text-black pr-10" />
      </FixedButton>

      {/* Main Terminal Window */}
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-xl border-2 border-black shadow-2xl overflow-hidden relative"
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
                project: {project.title.toLowerCase()}
              </span>
              <div className="flex items-center space-x-4 text-xs text-black/60">
                <span>
                  <FontAwesomeIcon icon={faUser} className="mr-1" /> user:
                  taylor
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} className="mr-1" />{" "}
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Terminal Info Bar */}
          <div className="bg-neutral-50 px-4 py-2 border-b border-black/10 flex justify-between items-center text-xs font-mono">
            <div className="flex items-center space-x-4 text-black/60">
              <span>
                type: {isIncidentProject ? "incident_report" : "security_audit"}
              </span>
              <span>status: complete</span>
              <span>priority: {isIncidentProject ? "critical" : "high"}</span>
            </div>
            <span className="text-black/60">
              last_modified: {new Date().toLocaleDateString()}
            </span>
          </div>

          {/* Project Content */}
          <div className="p-6 space-y-8">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 font-mono text-sm">
              {getNavigationTabs().map((section) => (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section
                      ? "bg-black text-white"
                      : "bg-black/5 text-black hover:bg-black/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeSection === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {isIncidentProject ? (
                    <IncidentSection
                      title="Incident Overview"
                      icon={faBug}
                      severity="critical"
                      content={project.desc.map((para, i) => (
                        <p key={i} className="mb-4 text-black">
                          {para}
                        </p>
                      ))}
                    />
                  ) : (
                    <AuditSection
                      title="Project Overview"
                      icon={faShieldAlt}
                      content={project.desc.map((para, i) => (
                        <p key={i} className="mb-4 text-black">
                          {para}
                        </p>
                      ))}
                    />
                  )}
                </motion.div>
              )}

              {activeSection === "timeline" && isIncidentProject && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {project.reports?.map((report, index) => (
                    <IncidentSection
                      key={index}
                      title={report.title}
                      icon={faClock}
                      severity={report.severity || "medium"}
                      content={
                        <div className="space-y-4">
                          <p>{report.desc}</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {report.tags?.map((tag, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-black/5 rounded-full text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      }
                    />
                  ))}
                </motion.div>
              )}

              {activeSection === "visuals" && (
                <motion.div
                  key="visuals"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {isIncidentProject
                    ? project.reports?.map(
                        (report, index) =>
                          report.images && (
                            <IncidentSection
                              key={index}
                              title={`Evidence Set ${index + 1}`}
                              icon={faImages}
                              severity={report.severity || "medium"}
                              content={
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {report.images.map((img, imgIndex) => (
                                    <motion.div
                                      key={imgIndex}
                                      className="relative aspect-video bg-neutral-50 rounded-lg overflow-hidden cursor-pointer"
                                      whileHover={{ scale: 1.05 }}
                                      onClick={() => {
                                        const startIndex = project.reports
                                          .slice(0, index)
                                          .reduce(
                                            (acc, r) =>
                                              acc + (r.images?.length || 0),
                                            0
                                          );
                                        setCurrentImageIndex(
                                          startIndex + imgIndex
                                        );
                                        setShowImageViewer(true);
                                      }}
                                    >
                                      <Image
                                        src={img}
                                        alt={`Evidence ${imgIndex + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-all duration-300"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                      <motion.div
                                        className="absolute bottom-2 right-2 bg-white rounded-full p-2"
                                        whileHover={{ scale: 1.1 }}
                                      >
                                        <FontAwesomeIcon
                                          icon={faSearch}
                                          className="text-black/60"
                                        />
                                      </motion.div>
                                    </motion.div>
                                  ))}
                                </div>
                              }
                            />
                          )
                      )
                    : project.images?.map((img, index) => (
                        <motion.div
                          key={index}
                          className="relative aspect-video bg-neutral-50 rounded-lg overflow-hidden cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => {
                            setCurrentImageIndex(index);
                            setShowImageViewer(true);
                          }}
                        >
                          <Image
                            src={img}
                            alt={`${project.title} preview ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                          <motion.div
                            className="absolute bottom-2 right-2 bg-white rounded-full p-2"
                            whileHover={{ scale: 1.1 }}
                          >
                            <FontAwesomeIcon
                              icon={faSearch}
                              className="text-black/60"
                            />
                          </motion.div>
                        </motion.div>
                      ))}
                </motion.div>
              )}

              {activeSection === "documentation" && (
                <motion.div
                  key="documentation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {isIncidentProject ? (
                    <>
                      <IncidentSection
                        title="Incident Documentation"
                        icon={faFileAlt}
                        severity="critical"
                        content={
                          <div className="space-y-4">
                            {project.reports.map((report, index) => (
                              <motion.button
                                key={index}
                                onClick={() =>
                                  window.open(report.pdf, "_blank")
                                }
                                className="w-full flex items-center justify-between p-3 bg-black/5 rounded-lg hover:bg-black/10 transition-colors font-mono text-sm text-black"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-center space-x-3">
                                  <FontAwesomeIcon
                                    icon={faFileAlt}
                                    className="text-black opacity-80"
                                  />
                                  <span className="text-black">
                                    {report.title}
                                  </span>
                                </div>
                                <FontAwesomeIcon
                                  icon={faArrowRight}
                                  className="text-black/60"
                                />
                              </motion.button>
                            ))}
                          </div>
                        }
                      />
                      <IncidentSection
                        title="Additional Resources"
                        icon={faFolder}
                        severity="medium"
                        content={
                          <div className="space-y-4">
                            <p className="text-black">
                              The documentation above includes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-black">
                              <li>
                                Detailed incident timeline and initial findings
                              </li>
                              <li>
                                In-depth technical analysis of the incident
                              </li>
                              <li>
                                Assessment of business and technical impact
                              </li>
                              <li>
                                Comprehensive mitigation and prevention strategy
                              </li>
                              <li>
                                Post-incident analysis and recommendations
                              </li>
                            </ul>
                          </div>
                        }
                      />
                    </>
                  ) : (
                    <>
                      <AuditSection
                        title="Full Documentation"
                        icon={faFileAlt}
                        content={
                          <div className="space-y-4">
                            <motion.button
                              onClick={() => window.open(project.pdf, "_blank")}
                              className="w-full flex items-center justify-between p-3 bg-black/5 rounded-lg hover:bg-black/10 transition-colors font-mono text-sm text-black"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center space-x-3">
                                <FontAwesomeIcon
                                  icon={faFileAlt}
                                  className="text-black opacity-80"
                                />
                                <span>Security Audit Report</span>
                              </div>
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="text-black/60"
                              />
                            </motion.button>
                          </div>
                        }
                      />
                      <AuditSection
                        title="Report Contents"
                        icon={faFolder}
                        content={
                          <div className="space-y-4">
                            <p className="text-black">
                              The comprehensive security audit report includes:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-black">
                              <li>Detailed Technical Findings</li>
                              <li>Remediation Recommendations</li>
                              <li>Security Posture Improvement Plan</li>
                            </ul>
                          </div>
                        }
                      />
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Terminal Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-neutral-100 px-4 py-2 border-t border-black/10"
          >
            <p className="text-center text-black/40 text-xs font-mono">
              © 2024 Taylor Terminal • Interactive Portfolio Interface
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Full Screen Image Viewer */}
      <AnimatePresence>
        {showImageViewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4"
          >
            {/* Viewer Controls */}
            <div className="w-full max-w-7xl flex flex-wrap justify-between items-center mb-4 text-white/80 px-4 gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleZoom(-0.2)}
                  className="p-2 hover:text-white transition-colors"
                  aria-label="Zoom out"
                >
                  <FontAwesomeIcon icon={faSearchMinus} />
                </button>
                <span className="font-mono text-sm">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  onClick={() => handleZoom(0.2)}
                  className="p-2 hover:text-white transition-colors"
                  aria-label="Zoom in"
                >
                  <FontAwesomeIcon icon={faSearchPlus} />
                </button>
                <button
                  onClick={resetZoom}
                  className="text-sm font-mono hover:text-white transition-colors"
                >
                  Reset
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-mono text-sm">
                  {currentImageIndex + 1} / {allImages.length}
                </span>
                <button
                  onClick={() => navigateImages(-1)}
                  className="p-2 hover:text-white transition-colors"
                  disabled={!allImages || allImages.length <= 1}
                  aria-label="Previous image"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                  onClick={() => navigateImages(1)}
                  className="p-2 hover:text-white transition-colors"
                  disabled={!allImages || allImages.length <= 1}
                  aria-label="Next image"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <button
                  onClick={() => {
                    resetZoom();
                    setShowImageViewer(false);
                  }}
                  className="p-2 hover:text-white transition-colors"
                  aria-label="Close viewer"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <motion.div
              className="relative w-full h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden cursor-move"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleImageDrag}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchCancel={() => setIsDragging(false)}
              onTouchMove={handleImageDrag}
            >
              <motion.div
                style={{
                  scale: zoomLevel,
                  x: imagePosition.x,
                  y: imagePosition.y,
                }}
                className="relative"
              >
                <Image
                  src={allImages[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[calc(100vh-120px)] object-contain"
                  quality={100}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Image Caption */}
            <div className="mt-4 text-center text-white/60 font-mono text-sm">
              <p className="hidden sm:block">
                Click and drag to pan • Use zoom controls or mouse wheel to zoom
              </p>
              <p className="block sm:hidden">
                Touch and drag to pan • Pinch to zoom
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
