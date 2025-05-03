import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Folder-style Label */}
      <div className="bg-gray-900 text-green-400 text-xs font-mono px-4 py-2 border-b border-gray-800 flex items-center gap-2 tracking-tight">
        <span className="text-red-500">●</span>
        <span className="text-yellow-400">●</span>
        <span className="text-green-500">●</span>
        <span className="ml-4">
          // open file: {project.title.toLowerCase().replaceAll(" ", "_")}.md
        </span>
      </div>

      {/* Project Thumbnail */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-[1.02] object-center"
        />
      </div>

      {/* Title + Button */}
      <div className="p-5 text-center flex flex-col items-center bg-white">
        <h3 className="text-md font-semibold text-gray-800 mb-3 tracking-wide">
          {project.title}
        </h3>
        <Link href={`/projects/${project.slug}`}>
          <button className="bg-black text-white py-2 px-5 rounded-full hover:bg-gray-800 transition-all duration-300 text-sm">
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
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
