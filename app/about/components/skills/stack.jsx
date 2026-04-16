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

export default function Stack() {
  const platformItems = [
    "Windows 10/11",
    "Microsoft 365",
    "Active Directory (fundamentals)",
    "Remote Desktop (RDP)",
    "VPN (basic troubleshooting)",
    "Linux (CLI, Ubuntu)",
    "Wireshark",
    "Splunk",
    "Visual Studio Code",
    "GitHub",
  ];

  const troubleshootingItems = [
    "Network troubleshooting (DNS, DHCP, connectivity issues)",
    "Remote support workflows and issue diagnosis",
    "Command-line tools (ipconfig, ping, nslookup, netstat)",
    "User account and access troubleshooting",
    "Basic system performance diagnostics (CPU, memory, startup processes)",
    "Structured troubleshooting methodology",
  ];

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
      <div className="w-full max-w-3xl space-y-4">
        <SkillGroup title="Technical Tools & Platforms" items={platformItems} />
        <SkillGroup
          title="IT Support & Troubleshooting Skills"
          items={troubleshootingItems}
        />
      </div>
    </motion.div>
  );
}
