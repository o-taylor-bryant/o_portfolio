import { motion } from "framer-motion";

export default function Stack() {
  return (
		<motion.div
			className="flex justify-center items-center flex-col mb-5 "
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
			}}>
			<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
				Tools and Languages
			</h2>
			<p className="text-gray-500 text-center tracking-widest md:px-5">
				<span className="text-black font-bold">Linux</span> |{" "}
				<span className="text-black font-medium">Windows</span> |{" "}
				<span className="text-black font-bold">SQL</span> |{" "}
				<span className="text-black font-medium">Splunk</span> |{" "}
				<span className="text-black font-medium">WireShark</span> |{" "}
				<span className="text-black font-medium">Tcpdump</span> |{" "}
				<span className="text-black font-medium">Suricata</span> |{" "}
				<span className="text-black font-bold">Python</span> |{" "}
				<span className="text-black font-bold">Node.js</span> |{" "}
				<span className="text-black font-medium">ChatGPT</span> |{" "}
				<span className="text-black font-medium">Affinity Designer</span> |{" "}
				<span className="text-black font-medium">Adobe Illustrator</span> |{" "}
				<span className="text-black font-bold">Visual Studio Code</span>{" "}
			</p>
		</motion.div>
  );
}