import Link from "next/link";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="bg-gray-900 text-white text-xs font-mono px-4 py-2 border-b border-gray-800 flex items-center gap-2 tracking-tight">
        <span className="text-black">●</span>
        <span className="text-black">●</span>
        <span className="text-black">●</span>
        <span className="ml-4">
          {project.title?.toLowerCase().replaceAll(" ", "_") ||
            "untitled_project"}
          .md
        </span>
      </div>

      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={project.thumbnail || "/default-thumbnail.png"}
          alt={`Thumbnail for ${project.title || "Project"}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-[1.02] object-center"
          loading="lazy"
        />
      </div>

      <div className="p-5 text-center flex flex-col items-center bg-white">
        <h3 className="text-md font-semibold text-gray-800 mb-3 tracking-wide">
          {project.title || "Untitled Project"}
        </h3>
        <Link href={`/projects/${project.slug}`}>
          <button
            className="bg-black text-white py-2 px-5 rounded-full hover:bg-gray-800 transition-all duration-300 text-sm"
            aria-label={`View details for ${project.title}`}
          >
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

ProjectCard.defaultProps = {
  project: {
    thumbnail: "/default-thumbnail.png",
  },
};
