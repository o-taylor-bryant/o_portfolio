import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import MAlogo from "@/public/image/MAlogo.jpg"; // Updated import for the first education slot
import UNCGlogo from "@/public/image/UNCGlogo.png"; // New import for the second education slot

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
      <motion.div
        className="flex justify-center items-start flex-col mb-5 "
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
        {children}
      </motion.div>
    </div>
  );
}

export default function Education() {
  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Education
          </h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            A log of my educational background.
          </p>
        </div>
        <div className="grid gap-8 md:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Education Slot */}
            <div className="px-5">
              <div className="font-medium text-lg">March 2025 - Present</div>
              <div>
                <h2 className="font-semibold text-xl">Merit America</h2>
                <h3 className="text-md font-normal mb-3">Cybersecurity</h3>
                <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                  <div className="flex-[1] transition-all duration-300 ease-in-out group">
                    <Image
                      src={MAlogo} // Updated image source
                      width={400}
                      height={225}
                      alt="Merit America Logo"
                      className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <p className="text-justify text-black">
                    What began as an independent exploration of{" "}
                    <strong>IT</strong> and <strong>cybersecurity</strong> has
                    grown into a structured learning path through{" "}
                    <strong>Merit America</strong>. I’m continuing to develop my
                    technical toolkit with the{" "}
                    <strong>
                      Google Cybersecurity Professional Certificate
                    </strong>
                    , blending guided coursework with my self-directed
                    curiosity.
                  </p>
                  <p className="text-justify">
                    While continuing my independent studies, the program has
                    provided me with very <strong>hands-on learning</strong> to
                    introduce different concepts of technology. I’m continuing
                    to develop various <strong>skills</strong> and become a
                    well-rounded <strong>entry-level candidate</strong> while
                    earning the certificate.
                  </p>
                  <p className="text-justify">
                    I’ve been treating <strong>Merit America</strong> like my{" "}
                    <strong>“college redo”</strong> because I wasn’t quite ready
                    when I was 19 and should have waited. From staying up long
                    hours learning how to{" "}
                    <strong>customize a nice webpage</strong> to adjusting my
                    expectations and understanding how to{" "}
                    <strong>absorb the content</strong>—I want this so badly.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 text-sm">
                  <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                    On track to complete the program by September 2025.
                  </div>
                </div>
              </div>
            </div>

            {/* Second Education Slot */}
            <div className="px-5">
              <div className="font-medium text-lg">August 2024 - May 2016</div>
              <div>
                <h2 className="font-semibold text-xl">
                  The University of North Carolina at Greensboro
                </h2>
                <h3 className="text-md font-normal mb-3">
                  Bachelor of Fine Arts | New Media and Graphic Design
                </h3>
                <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                  <div className="flex-[1] transition-all duration-300 ease-in-out group">
                    <Image
                      src={UNCGlogo} // Updated image source
                      width={400}
                      height={225}
                      alt="UNCG Logo"
                      className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-col">
                  <p className="text-justify text-black">
                    Entering college, I had the goal of becoming a career{" "}
                    <strong>Graphic Designer</strong>—focusing primarily on{" "}
                    <strong>branding</strong>. UNCG provided me with a complete
                    foundation on how to explore the{" "}
                    <strong>design process</strong> and create a{" "}
                    <strong>workflow</strong>. Many of my student projects were
                    also gateways to navigating layers of{" "}
                    <strong>technology</strong> centered around design.
                  </p>
                  <p className="text-justify text-black">
                    I have since taken that <strong>workflow</strong> with me in
                    all my personal design ventures and made improvements
                    wherever necessary. My work enabled me to obtain a{" "}
                    <strong>well-thought portfolio</strong> that got me accepted
                    into the <strong>BFA Program</strong>. Getting accepted into
                    the program was my <strong>second try</strong>—I never gave
                    up.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 text-sm">
                  <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                    GPA: 3.2 out of 4.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
