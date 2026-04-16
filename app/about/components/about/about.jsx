import Image from "next/image";
import { motion } from "framer-motion";
import Wade from "@/public/image/Wade.jpg";
import Me2 from "@/public/image/me2.png";
import Me3 from "@/public/image/me3.png";
import Hr from "@/components/Hr";

function Title() {
  return (
    <div className="mt-6 sm:mt-10 flex flex-col justify-start items-center w-full pl-4 sm:pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start ">
        <Hr variant="long"></Hr>
        <h1 className="text-2xl sm:text-3xl font-bold mt-3">
          def whoami(self):
        </h1>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Title />
      <div className="relative mx-auto container gap-4 px-2 sm:px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className="flex justify-center items-start flex-col mb-5 w-full">
          <div className="images relative w-full aspect-square min-h-[220px]">
            <div
              className="absolute top-16 sm:top-28 left-2 sm:left-10 w-[60%] sm:w-[50%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 rounded-full
              before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:blur-lg before:opacity-40 before:z-[-1]
              before:transition-all before:duration-500 hover:before:opacity-70 hover:before:blur-2xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="w-full h-full rounded-full"
              >
                <Image
                  src={Wade}
                  alt="Wade"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="rounded-full grayscale"
                />
              </motion.div>
            </div>
            <div
              className="absolute top-6 sm:top-16 right-6 sm:right-28 w-[40%] sm:w-[30%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 rounded-full
              before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:blur-lg before:opacity-40 before:z-[-1]
              before:transition-all before:duration-500 hover:before:opacity-70 hover:before:blur-2xl"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{ delay: 0.3 }}
                className="w-full h-full rounded-full"
              >
                <Image
                  src={Me2}
                  alt="Taylor Bryant"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="rounded-full"
                />
              </motion.div>
            </div>
            <div
              className="absolute bottom-6 sm:bottom-16 right-2 sm:right-20 w-[50%] sm:w-[40%] aspect-square grayscale hover:grayscale-0 transition-all ease duration-300 rounded-full
              before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:blur-lg before:opacity-40 before:z-[-1]
              before:transition-all before:duration-500 hover:before:opacity-70 hover:before:blur-2xl"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="w-full h-full rounded-full"
              >
                <Image
                  src={Me3}
                  alt="Taylor Bryant"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-start flex-col mb-5 md:px-10 w-full"
          initial={{
            opacity: 0,
            x: 200,
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
          <h2 className="text-xl sm:text-2xl font-bold tracking-wider mb-3">
            Taylor Bryant
          </h2>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            Hi there - I&apos;m currently building a career in{" "}
            <span className="font-bold">IT support</span>, with a focus on{" "}
            <span className="font-bold">troubleshooting</span>,{" "}
            <span className="font-bold">system reliability</span>, and{" "}
            <span className="font-bold">user-focused problem solving</span>.
          </p>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            I&apos;ve completed the{" "}
            <span className="font-bold">
              Google Cybersecurity Professional Certificate
            </span>{" "}
            through <span className="font-bold">Merit America</span> and
            recently finished hands-on{" "}
            <span className="font-bold">IT Support training</span> with{" "}
            <span className="font-bold">Miles IT</span>. Through this training,
            I worked through real-world scenarios involving{" "}
            <span className="font-bold">DNS</span> and{" "}
            <span className="font-bold">DHCP</span> issues, remote system access
            using <span className="font-bold">Remote Desktop (RDP)</span>, and
            troubleshooting connectivity and user access problems within{" "}
            <span className="font-bold">domain-based environments</span>.
          </p>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            I&apos;ve developed a structured approach to solving technical
            issues: <span className="font-bold">identifying scope</span>,{" "}
            <span className="font-bold">isolating root cause</span>, and{" "}
            <span className="font-bold">resolving problems</span> using tools
            like <span className="font-bold">ipconfig</span>,{" "}
            <span className="font-bold">ping</span>, and{" "}
            <span className="font-bold">nslookup</span>. I&apos;m especially
            drawn to the process of breaking down problems and restoring
            functionality in a clear, methodical way.
          </p>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            Professionally, I bring experience from remote, independent work at{" "}
            <span className="font-bold">TELUS Digital</span>, where I evaluate{" "}
            <span className="font-bold">AI-generated responses</span> with a
            strong focus on <span className="font-bold">accuracy</span>,{" "}
            <span className="font-bold">adaptability</span>, and{" "}
            <span className="font-bold">consistency</span>. I&apos;m comfortable
            working in <span className="font-bold">self-directed environments</span>{" "}
            while maintaining <span className="font-bold">high standards</span>.
          </p>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            Earlier roles in <span className="font-bold">customer service</span>{" "}
            and <span className="font-bold">academic support</span> helped shape
            my communication style and reinforced the value of steady, reliable
            support. I approach technical work the same way - with{" "}
            <span className="font-bold">clarity</span>,{" "}
            <span className="font-bold">patience</span>, and{" "}
            <span className="font-bold">attention to detail</span>.
          </p>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            Right now, I&apos;m continuing to strengthen my skills through
            practical, <span className="font-bold">ticket-based case studies</span>{" "}
            that reflect real <span className="font-bold">Tier 1 support</span>{" "}
            scenarios. I&apos;m seeking an{" "}
            <span className="font-bold">entry-level IT</span> or{" "}
            <span className="font-bold">Help Desk role</span> where I can
            contribute, continue learning, and grow within a technical team.
          </p>
        </motion.div>
      </div>
    </>
  );
}
