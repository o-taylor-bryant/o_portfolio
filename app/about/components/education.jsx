import Image from "next/image";
import { motion } from "framer-motion";
import MAlogo from "@/public/image/MAlogo.jpg";
import UNCGlogo from "@/public/image/UNCGlogo.png";
import MilesITlogo from "@/public/image/M-IT_logo-color-2.webp";

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
  const educationItems = [
    {
      date: "March 2026",
      school: "Miles IT",
      program: "Remote IT Support Training Program",
      image: MilesITlogo,
      alt: "Miles IT Logo",
    },
    {
      date: "March 2025 - July 2025",
      school: "Merit America",
      program: "Cybersecurity Professional Training Program",
      image: MAlogo,
      alt: "Merit America Logo",
    },
    {
      date: "August 2014 - May 2016",
      school: "The University of North Carolina at Greensboro",
      program: "Bachelor of Fine Arts | New Media and Graphic Design",
      image: UNCGlogo,
      alt: "UNCG Logo",
    },
  ];

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
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
          <div className="hidden md:block absolute left-[16.66%] right-[16.66%] top-4 h-px bg-black/25" />
          {educationItems.map((item) => (
            <div
              key={`${item.school}-${item.date}`}
              className="relative pt-0 md:pt-8"
            >
              <div className="hidden md:block absolute top-[11px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black" />
              <div className="md:hidden absolute left-0 top-7 w-2.5 h-2.5 rounded-full bg-black" />
              <div className="md:hidden absolute left-[4px] top-9 bottom-0 w-px bg-black/20" />

              <div className="md:text-center pl-5 md:pl-0 mb-3">
                <div className="font-medium text-sm md:text-base text-black/75">
                  {item.date}
                </div>
              </div>

              <div className="rounded-2xl border border-black/20 bg-[#fcfcfc] p-4 md:p-5 ml-5 md:ml-0">
                <h2 className="font-semibold text-lg md:text-xl">{item.school}</h2>
                <h3 className="text-sm md:text-base font-normal mb-4 text-black/80">
                  {item.program}
                </h3>

                <div className="rounded-lg border border-black/10 bg-white p-3 md:p-4">
                  <Image
                    src={item.image}
                    width={520}
                    height={220}
                    alt={item.alt}
                    className="w-full h-[84px] md:h-[96px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
