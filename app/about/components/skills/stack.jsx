import { motion } from "framer-motion";

export default function Stack() {
  return (
    <motion.div
      className="flex justify-center items-center flex-col mb-5 p-4 sm:p-6 md:p-10 w-full"
      initial={{
        opacity: 0,
        x: -200,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.5,
        type: "spring",
      }}
    >
      <h2 className="text-xl sm:text-2xl md:text-xl font-bold mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-center w-full">
        Technical Tools & Platforms
      </h2>
      <p className="text-gray-500 text-center tracking-widest px-2 sm:px-5 mb-4 text-sm sm:text-base max-w-xl">
        <span className="text-black">Windows 10/11</span>,{" "}
        <span className="text-black">Microsoft 365</span>,{" "}
        <span className="text-black">Active Directory</span>,{" "}
        <span className="text-black">Linux (Ubuntu/CLI)</span>,{" "}
        <span className="text-black">Wireshark</span>,{" "}
        <span className="text-black">Splunk</span>,{" "}
        <span className="text-black">Visual Studio Code</span>,{" "}
        <span className="text-black">Zoom</span>,{" "}
        <span className="text-black">GitHub</span>,{" "}
        <span className="text-black">Slack</span>,{" "}
        <span className="text-black">Notion</span>
      </p>
      <h2 className="text-xl sm:text-2xl md:text-xl font-bold mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-center w-full">
        Development & Scripting
      </h2>
      <p className="text-gray-500 text-center tracking-widest px-2 sm:px-5 text-sm sm:text-base max-w-xl">
        <span className="text-black">Python</span> (automation and data handling),{" "}
        <span className="text-black">HTML/CSS</span> (foundational),{" "}
        command-line scripting in <span className="text-black">Linux</span> and <span className="text-black">Windows</span> terminals,{" "}
        version control with <span className="text-black">Git</span> and <span className="text-black">GitHub</span>,{" "}
        environment setup in <span className="text-black">Visual Studio Code</span>
      </p>
    </motion.div>
  );
}
