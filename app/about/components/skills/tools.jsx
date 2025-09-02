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
      <h2 className="text-xl sm:text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-center w-full">
        Security Knowledge & Practices
      </h2>
      <p className="text-gray-500 text-center tracking-wider px-2 sm:px-5 mb-4 text-sm sm:text-base max-w-xl">
        <span className="text-black font-bold">System Troubleshooting</span>,{" "}
        <span className="text-black font-bold">Incident Response</span>,{" "}
        <span className="text-black font-bold">SIEM tools</span>,{" "}
        <span className="text-black font-bold">Log Analysis</span>,{" "}
        <span className="text-black font-bold">Network Defense & Security</span>
        ,{" "}
        <span className="text-black font-bold">
          Basic System Administration
        </span>
        , <span className="text-black font-bold">Threat Detection</span>,{" "}
        <span className="text-black font-bold">Vulnerability Assessment</span>
      </p>
      <h2 className="text-xl sm:text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-center w-full">
        Professional & Soft Skills
      </h2>
      <p className="text-gray-500 text-center tracking-wider px-2 sm:px-5 text-sm sm:text-base max-w-xl">
        <span className="text-black font-medium">Attention to Detail</span>,{" "}
        <span className="text-black font-medium">Collaboration</span>,{" "}
        <span className="text-black font-medium">Creativity</span>,{" "}
        <span className="text-black font-bold">Problem-Solving</span>,{" "}
        <span className="text-black font-medium">Self-Motivation</span>,{" "}
        <span className="text-black font-medium">Technical Curiosity</span>,{" "}
        <span className="text-black font-bold">Troubleshooting</span>
      </p>
    </motion.div>
  );
}
