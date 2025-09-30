import { motion } from "framer-motion";
import Stack from "./stack";
import Tools from "./tools";

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-4 p-4 sm:p-6 md:p-10 grid grid-cols-1 mt-6 sm:mt-8 md:mt-10">
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
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <Wrapper>
        <section className="grid gap-6 sm:gap-8 md:gap-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold mt-3 text-black">Skills</h2>
            <p className="text-muted-foreground max-w-[800px] mx-auto text-black">
              My developing toolkit.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="w-8 h-8 border-2 border-black rounded-md bg-transparent"
                animate={{
                  y: [0, -8, 0],
                  boxShadow: [
                    "0 2px 8px rgba(0,0,0,0.10)",
                    "0 8px 24px rgba(0,0,0,0.15)",
                    "0 2px 8px rgba(0,0,0,0.10)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="font-medium text-sm sm:text-base">Leadership</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="w-8 h-8 border-2 border-black rounded-md bg-transparent"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="font-medium text-sm sm:text-base">
                Independence
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="w-8 h-8 border-2 border-black rounded-md bg-transparent"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="font-medium text-sm sm:text-base">Support</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <motion.div
                className="w-8 h-8 border-2 border-black rounded-md bg-transparent"
                animate={{ x: [0, 8, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="font-medium text-sm sm:text-base">
                Communication
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
      <div className="mx-auto container gap-4 p-4 sm:p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 mt-6 sm:mt-8 md:mt-10 mb-16 md:mb-24">
        <Stack />
        <Tools />
      </div>
    </>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}
function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function WebhookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  );
}

function MobileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" x2="12" y1="18" y2="18" />
    </svg>
  );
}

function SparklesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.07-6.07-1.41 1.41M6.34 17.66l-1.41 1.41m12.02 0-1.41-1.41M6.34 6.34 4.93 4.93" />
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}
function UserCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  );
}
function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
      <circle cx="12" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M1 21v-2a4 4 0 0 1 3-3.87" />
    </svg>
  );
}
function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M2 12a10 10 0 1 1 20 0c0 4.418-3.582 8-8 8s-8-3.582-8-8z" />
      <path d="M12 2v2" />
    </svg>
  );
}
function PaletteIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="7"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="8.5" cy="10" r="1" fill="#60a5fa" />
      <circle cx="12" cy="8.5" r="1" fill="#f472b6" />
      <circle cx="15.5" cy="10" r="1" fill="#facc15" />
      <circle cx="14" cy="13.5" r="1" fill="#34d399" />
    </svg>
  );
}
function RocketIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        d="M12 2C15 5 19 10 12 22C5 10 9 5 12 2Z"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="9" r="2" fill="#a78bfa" />
      <path d="M12 22L10 19H14L12 22Z" fill="#a78bfa" />
    </svg>
  );
}
function HeartHandsIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        d="M7 13C5 13 3 15 5 17L12 21L19 17C21 15 19 13 17 13C15 13 14 15 12 17C10 15 9 13 7 13Z"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 13C9 11 11 10 12 12C13 10 15 11 15 13"
        stroke="#f472b6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function PuzzleIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect
        x="4"
        y="4"
        width="8"
        height="8"
        rx="2"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="12"
        y="12"
        width="8"
        height="8"
        rx="2"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="8" cy="8" r="1.5" fill="#facc15" />
      <circle cx="16" cy="16" r="1.5" fill="#facc15" />
    </svg>
  );
}
function PencilIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        d="M16.862 5.487l1.65-1.65a1.5 1.5 0 1 1 2.121 2.122l-1.65 1.65M15.45 6.9L5 17.35V19h1.65L17.1 8.55"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CatIcon(props) {
  // Cute cat face
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <ellipse
        cx="12"
        cy="15"
        rx="7"
        ry="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 7l2 3M19 7l-2 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="9" cy="15" r="1" fill="currentColor" />
      <circle cx="15" cy="15" r="1" fill="currentColor" />
      <path
        d="M10.5 17c.5.5 2.5.5 3 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 7c1-2 3-3 5-3s4 1 5 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function HandshakeIcon(props) {
  // Friendly handshake for collaboration
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 17l-4-4a2 2 0 0 1 0-2.8l4-4a2 2 0 0 1 2.8 0l4 4a2 2 0 0 1 0 2.8l-4 4a2 2 0 0 1-2.8 0z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M8 13l-2 2m10-2l2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 17v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function SmileGroupIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="8" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M6.5 14.5c1 1 3.5 1 4.5 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.5 14.5c1 1 3.5 1 4.5 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function MagnifierIcon(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <line
        x1="16.5"
        y1="16.5"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
