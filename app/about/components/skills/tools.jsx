import { motion } from "framer-motion";

function SkillGroup({ title, items }) {
  return (
    <div className="w-full rounded-2xl border border-black/20 bg-[#f9f9f9] p-4 sm:p-5">
      <h2 className="text-base sm:text-lg font-bold mb-3 text-center tracking-wide uppercase">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1.5 rounded-full border border-black/25 bg-white text-xs sm:text-sm text-black/85"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Tools() {
  const securityItems = [
    "System configuration and troubleshooting",
    "Incident response fundamentals",
    "SIEM tools",
    "Log and network analysis",
    "Threat detection fundamentals",
    "Vulnerability assessment basics",
    "TCP/IP fundamentals",
  ];

  const professionalItems = [
    "Attention to detail",
    "Collaboration",
    "Clear communication",
    "Problem-solving",
    "Self-motivation",
    "Adaptability",
    "Documentation",
    "Time management",
    "Continuous learning mindset",
    "Customer-facing technical support experience",
  ];

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
      <div className="w-full max-w-3xl space-y-4">
        <SkillGroup title="Security Knowledge & Practices" items={securityItems} />
        <SkillGroup title="Professional & Soft Skills" items={professionalItems} />
      </div>
    </motion.div>
  );
}
