import Link from "next/link";

export default function ProjectFilePreview({ project }) {
  return (
    <div className="relative w-full max-w-sm mx-auto font-mono text-sm text-black flex flex-col items-center justify-center p-4 animate-fade-in">
      {/* 📄 Main Card */}
      <div className="relative z-10 w-full h-full bg-white/90 backdrop-blur-md border border-neutral-200 rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(180,180,180,0.3)]">
        {/* 🗞️ Top Left Filetype Badge */}
        {project.filetype && (
          <span className="absolute top-2 left-3 text-[10px] font-medium text-neutral-500 tracking-wide bg-neutral-100 px-1.5 py-[2px] rounded shadow-sm">
            {project.filetype}
          </span>
        )}

        {/* 📎 Top Right Icon (flashes gently) */}
        {project.icon && (
          <img
            src={project.icon}
            alt="file icon"
            className="absolute top-2 right-3 w-4 h-4 opacity-70 animate-icon-blink"
          />
        )}

        {/* 🔲 Thumbnail + Dot */}
        <div className="flex flex-col items-center py-5">
          <span className="w-2.5 h-2.5 bg-black rounded-full animate-blink mb-3 shadow-sm"></span>
          {project.thumbnail && (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-16 h-16 object-cover rounded-xl border border-neutral-300 shadow group-hover:rotate-[1.5deg] transition-all duration-300"
            />
          )}
        </div>

        {/* ⬜ Divider */}
        <div className="w-8 h-[1px] bg-neutral-300 mx-auto mb-2 group-hover:w-12 transition-all duration-300"></div>

        {/* 📰 Title & Description */}
        <div className="px-4 text-center">
          <h2 className="text-base font-semibold truncate">{project.title}</h2>
          <p className="text-neutral-600 text-xs mt-1 leading-relaxed line-clamp-3 group-hover:opacity-90 transition-opacity duration-300">
            {project.description}
          </p>
        </div>

        {/* 📁 Metadata (hover reveal) */}
        <div className="absolute bottom-12 left-4 right-4 opacity-0 group-hover:opacity-100 text-[10px] text-neutral-400 font-medium transition-all duration-400 text-center tracking-tight">
          /files/projects/{project.slug}
        </div>

        {/* 🖱️ Open Button */}
        <div className="w-full mt-4 px-4 pb-4">
          <Link href={`/projects/${project.slug}`}>
            <button className="w-full bg-black text-white font-mono text-xs py-2 rounded-md hover:bg-neutral-900 relative transition-all duration-200 overflow-hidden">
              open file
              <span className="absolute right-3 top-[10px] w-1 h-3 bg-white animate-cursor" />
            </button>
          </Link>
        </div>
      </div>

      {/* 🎛️ CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease-out;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-blink {
          animation: blink 1.4s infinite;
        }

        @keyframes cursor {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-cursor {
          animation: cursor 1.1s steps(1) infinite;
        }

        @keyframes icon-blink {
          0%,
          100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        .animate-icon-blink {
          animation: icon-blink 2s ease-in-out infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
