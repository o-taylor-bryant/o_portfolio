import { motion } from "framer-motion";

export default function Tools() {
  return (
    <motion.div
      className="flex justify-start items-center flex-col mb-5 p-4 sm:p-6 md:p-10 w-full"
      initial={{
        opacity: 0,
        x: 200,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.6,
        type: "spring",
      }}
    >
      <h2 className="text-xl sm:text-2xl md:text-xl font-bold mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-center w-full">
        Security Knowledge & Practices
      </h2>
      <p className="text-gray-500 text-center tracking-wider px-2 sm:px-5 mb-4 text-sm sm:text-base max-w-xl">
        <span className="text-black">System configuration and troubleshooting</span>,{" "}
        <span className="text-black">incident response fundamentals</span>,{" "}
        <span className="text-black">SIEM tools</span>,{" "}
        <span className="text-black">log and network analysis</span>,{" "}
        <span className="text-black">system administration concepts</span>,{" "}
        <span className="text-black">threat detection</span>,{" "}
        <span className="text-black">vulnerability assessment</span>,{" "}
        <span className="text-black">TCP/IP</span>
      </p>
      <h2 className="text-xl sm:text-2xl md:text-xl font-bold mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-center w-full">
        Professional & Soft Skills
      </h2>
      <p className="text-gray-500 text-center tracking-wider px-2 sm:px-5 text-sm sm:text-base max-w-xl">
        <span className="text-black">Attention to detail</span>,{" "}
        <span className="text-black">collaboration</span>,{" "}
        <span className="text-black">clear communication</span>,{" "}
        <span className="text-black">creativity</span>,{" "}
        <span className="text-black">problem-solving</span>,{" "}
        <span className="text-black">self-motivation</span>,{" "}
        <span className="text-black">adaptability</span>,{" "}
        <span className="text-black">documentation</span>,{" "}
        <span className="text-black">time management</span>,{" "}
        <span className="text-black">continuous learning mindset</span>
      </p>
    </motion.div>
  );
}
