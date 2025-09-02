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
      <h2 className="text-xl sm:text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-center w-full">
        Technical Tools & Platforms
      </h2>
      <p className="text-gray-500 text-center tracking-widest px-2 sm:px-5 mb-4 text-sm sm:text-base max-w-xl">
        <span className="text-black font-bold">Active Directory</span>,{" "}
        <span className="text-black font-medium">
          Adobe Illustrator & Photoshop
        </span>
        , <span className="text-black font-bold">ChatGPT</span>,{" "}
        <span className="text-black font-bold">Linux CLI</span>,{" "}
        <span className="text-black font-medium">Microsoft 365</span>,{" "}
        <span className="text-black font-medium">Notion</span>,{" "}
        <span className="text-black font-medium">Slack</span>,{" "}
        <span className="text-black font-bold">Splunk</span>,{" "}
        <span className="text-black font-bold">Ubuntu</span>,{" "}
        <span className="text-black font-bold">Windows</span>,{" "}
        <span className="text-black font-bold">Wireshark</span>,{" "}
        <span className="text-black font-medium">Zoom</span>
      </p>
      <h2 className="text-xl sm:text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-center w-full">
        Development & Scripting
      </h2>
      <p className="text-gray-500 text-center tracking-widest px-2 sm:px-5 text-sm sm:text-base max-w-xl">
        <span className="text-black font-bold">Cursor</span>,{" "}
        <span className="text-black font-bold">GitHub</span>,{" "}
        <span className="text-black font-bold">Node.js</span>,{" "}
        <span className="text-black font-bold">Visual Studio Code</span>,{" "}
        foundational <span className="text-black font-bold">HTML/CSS</span>,{" "}
        <span className="text-black font-bold">Python</span>
      </p>
    </motion.div>
  );
}
