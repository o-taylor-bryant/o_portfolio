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
            Hi there, I&apos;ve earned the{" "}
            <span className="font-bold">Google Cybersecurity Certificate</span>{" "}
            through <span className="font-bold">Merit America</span>, but my
            learning actually began earlier through self-guided study. Computers
            have always been a part of my life, through gaming and designing,
            and I heavily enjoy the thought process behind solving complex
            issues. I&apos;ve begun building skills through these experiences
            and desire to put them to thoughtful use in a like-minded role.
          </p>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            Throughout my career, I&apos;ve consistently worked in roles that
            required independence. At{" "}
            <span className="font-bold">TELUS Digital</span>, I evaluate
            AI-generated responses and search results in a fully remote
            environment. The work demands accuracy, adaptability, and
            self-direction. With minimal oversight, I&apos;ve learned how to
            manage shifting expectations, absorb new technical instruction, and
            stay grounded in quality. I&apos;m passionate about improving AI and
            what the future looks like, advancing our technology to utilize it!
          </p>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            Leadership, for me, often shows up in subtle ways. At{" "}
            <span className="font-bold">Walgreens</span>, I led our Customer
            Experience metric discussions during team meetings.I helped guide
            the conversation, translating feedback into actionable suggestions
            that improved how we served people. That experience helped me see
            the value in data-informed communication, something I plan to carry
            into my workflow when working with users and systems alike.
          </p>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            Earlier on, while supporting students at{" "}
            <span className="font-bold">UNC Greensboro</span>, I worked in an
            academic lab environment - answering questions, organizing
            materials, and quietly maintaining the space. That role taught me
            how much impact steady, behind-the-scenes support can have.
            I&apos;ve carried that mindset with me ever since. I&apos;d love to
            bring this attitude to an organization!
          </p>
          <p className="text-black text-justify title text-base sm:text-lg mb-4">
            Across all of these experiences, I&apos;ve always gravitated towards
            roles that require a balance of care, problem-solving, and overall
            team-based success. Being someone others can rely on and addressing
            problems with hands-on care are just some of the ways I would
            contribute to achieving company goals. My love for computers has
            always been present. Becoming well-rounded and growing with a team
            would give me the substance I need to reach further for success.
          </p>
        </motion.div>
      </div>
    </>
  );
}
