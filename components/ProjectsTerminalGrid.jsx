import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EnhancedTerminal from "./EnhancedTerminal";

export default function ProjectsTerminalGrid({ projects }) {
  const [filter, setFilter] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCommand = (command) => {
    if (command.startsWith("open ")) {
      const projectSlug = command.slice(5);
      const project = projects.find((p) => p.slug === projectSlug);
      if (project) {
        setSelectedProject(project);
      }
    } else if (command.startsWith("filter ")) {
      const filterTerm = command.slice(7).toLowerCase();
      setFilter(filterTerm);
    } else if (command === "clear") {
      setFilter("");
      setSelectedProject(null);
    }
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project.description.toLowerCase().includes(filter.toLowerCase()) ||
      (project.technologies || []).some((tech) =>
        tech.toLowerCase().includes(filter.toLowerCase())
      )
  );

  return (
    <div className="space-y-6">
      {/* Command Terminal */}
      <EnhancedTerminal
        title="projects_directory"
        commands={["filter <term>", "open <project-slug>", "clear"]}
        onCommand={handleCommand}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="text-sm text-white/60 mb-4">
          {filter
            ? `Filtering projects by: "${filter}" (${filteredProjects.length} results)`
            : `Showing all projects (${projects.length} total)`}
        </div>
      </EnhancedTerminal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <div className="bg-black text-white rounded-lg border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer group">
                {/* Project Header */}
                <div className="bg-neutral-900 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-white/80"></div>
                    <div className="w-2 h-2 rounded-full bg-white/60"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </div>
                  <span className="text-xs text-white/60 font-mono">
                    {project.slug}.sh
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <div className="font-mono mb-2">
                    <span className="text-green-500">➜</span>
                    <span className="text-white/60 ml-2">cat</span>
                    <span className="text-white ml-2">
                      {project.title.toLowerCase()}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/60">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Footer */}
                <div className="px-4 py-2 bg-neutral-900 border-t border-white/10">
                  <div className="text-xs text-white/40 font-mono flex items-center">
                    <span className="mr-2">$</span>
                    <span className="group-hover:text-green-500 transition-colors duration-300">
                      open {project.slug}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
