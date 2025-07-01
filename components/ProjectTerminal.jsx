import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EnhancedTerminal from "./EnhancedTerminal";

export default function ProjectTerminal({ project }) {
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);

  const commands = [
    "help",
    "info",
    "tech",
    "links",
    "clear",
    "desc",
    "images",
    "pdf",
  ];

  // Show project info by default
  useEffect(() => {
    handleCommand("info");
  }, [handleCommand]);

  const handleCommand = async (command) => {
    setLoading(true);
    const newOutput = [...output];

    // Simulate command processing
    await new Promise((resolve) => setTimeout(resolve, 300));

    switch (command.toLowerCase()) {
      case "help":
        newOutput.push({
          type: "command",
          content: command,
        });
        newOutput.push({
          type: "output",
          content: [
            "Available commands:",
            "  help   - Show this help message",
            "  info   - Display project information",
            "  tech   - Show technologies used",
            "  links  - Show project links",
            "  desc   - Show detailed description",
            "  images - List project images",
            "  pdf    - Get PDF documentation",
            "  clear  - Clear the terminal",
          ],
        });
        break;

      case "info":
        newOutput.push({
          type: "command",
          content: command,
        });
        newOutput.push({
          type: "output",
          content: [
            `Project: ${project.title}`,
            "-------------------",
            project.description,
            "",
            "Status: Active",
            `Last Updated: ${new Date().toLocaleDateString()}`,
            "",
            "Type 'desc' for detailed description",
            "Type 'tech' for technologies used",
            "Type 'links' for project links",
          ],
        });
        break;

      case "tech":
        newOutput.push({
          type: "command",
          content: command,
        });
        newOutput.push({
          type: "output",
          content: [
            "Technologies Used:",
            "----------------",
            ...(project.technologies || []).map((tech) => `• ${tech}`),
          ],
        });
        break;

      case "links":
        newOutput.push({
          type: "command",
          content: command,
        });
        newOutput.push({
          type: "output",
          content: [
            "Project Links:",
            "-------------",
            `GitHub: ${project.github || "N/A"}`,
            `Live Demo: ${project.demo || "N/A"}`,
            ...(project.additionalLinks || []).map(
              (link) => `${link.name}: ${link.url}`
            ),
          ],
        });
        break;

      case "desc":
        newOutput.push({
          type: "command",
          content: command,
        });
        newOutput.push({
          type: "output",
          content: [
            "Project Description:",
            "------------------",
            "",
            ...(project.desc || []).map((para) => para),
          ],
        });
        break;

      case "images":
        newOutput.push({
          type: "command",
          content: command,
        });
        if (project.images && project.images.length > 0) {
          newOutput.push({
            type: "output",
            content: [
              "Project Images:",
              "--------------",
              "",
              ...project.images.map(
                (img, i) => `[${i + 1}] ${img.split("/").pop()}`
              ),
              "",
              "Switch to Preview tab to view images",
            ],
          });
        } else {
          newOutput.push({
            type: "output",
            content: ["No images available for this project."],
          });
        }
        break;

      case "pdf":
        newOutput.push({
          type: "command",
          content: command,
        });
        if (project.pdf) {
          newOutput.push({
            type: "output",
            content: [
              "PDF Documentation:",
              "----------------",
              "",
              `URL: ${project.pdf}`,
              "",
              "Opening PDF in new tab...",
            ],
          });
          window.open(project.pdf, "_blank");
        } else {
          newOutput.push({
            type: "output",
            content: ["No PDF documentation available for this project."],
          });
        }
        break;

      case "clear":
        setOutput([]);
        break;

      default:
        newOutput.push({
          type: "command",
          content: command,
        });
        newOutput.push({
          type: "error",
          content: [
            `Command not found: ${command}`,
            'Type "help" for available commands',
          ],
        });
    }

    if (command.toLowerCase() !== "clear") {
      setOutput(newOutput);
    }
    setLoading(false);
  };

  return (
    <EnhancedTerminal
      title={`project: ${project.title.toLowerCase()}`}
      commands={commands}
      onCommand={handleCommand}
      className="w-full"
    >
      {/* Terminal Output */}
      <div className="space-y-4">
        {output.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.type === "command" && (
              <div className="flex items-center text-sm">
                <span className="text-green-500 mr-2">➜</span>
                <span className="text-white/60 mr-2">~</span>
                <span className="text-white">{item.content}</span>
              </div>
            )}
            {(item.type === "output" || item.type === "error") && (
              <div
                className={`ml-6 ${
                  item.type === "error" ? "text-red-400" : "text-white/80"
                }`}
              >
                {item.content.map((line, i) => (
                  <div key={i} className="text-sm">
                    {line}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-6 text-white/60"
          >
            Processing...
          </motion.div>
        )}
      </div>
    </EnhancedTerminal>
  );
}
