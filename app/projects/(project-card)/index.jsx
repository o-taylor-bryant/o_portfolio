import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

export default function ProjectCard({ project }) {
  return (
    <div className="relative group w-full max-w-sm mx-auto bg-[#f9f9f9] border border-gray-300 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-gray-400 hover:-translate-y-1">
      {/* Terminal Header */}
      <div className="bg-black text-white text-xs font-mono px-4 py-2 border-b border-gray-800 flex items-center gap-2 tracking-tight">
        <span className="text-white">●</span>
        <span className="text-white">●</span>
        <span className="text-white">●</span>
        <span className="ml-4">
          // open file: {project.title.toLowerCase().replaceAll(" ", "_")}.md
        </span>
      </div>

      {/* Project Image */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          layout="fill"
          objectFit="contain"
          className="transition-transform duration-500 group-hover:scale-[1.02] object-center"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col items-center text-center bg-white">
        <h3 className="text-md font-semibold text-gray-800 mb-3 tracking-wide">
          {project.title}
        </h3>

        <Link href={`/projects/${project.slug}`}>
          <button className="bg-black text-white py-2 px-5 rounded-full hover:bg-gray-800 transition-all duration-300 text-sm">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
