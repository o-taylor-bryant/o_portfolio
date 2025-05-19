"use client";
import { useState, useEffect } from "react";

export default function Loading() {
  const [blink, setBlink] = useState(true);
  const [showLoader, setShowLoader] = useState(true); // ⬅️ NEW STATE

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    const displayTimer = setTimeout(() => {
      setShowLoader(false); // hide after 1.5 seconds
    }, 5000); // ⬅️ Adjust this number if you want longer

    return () => {
      clearInterval(blinkInterval);
      clearTimeout(displayTimer);
    };
  }, []);

  if (!showLoader) return null; // ⬅️ Let your page load after this
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-[rgb(230,230,230)] z-[999] px-4">
      <div className="text-center font-mono">
        <p className="text-xs text-neutral-500 mb-2 tracking-widest">
          taylor@about:~ loading
        </p>
        <h1 className="text-2xl sm:text-3xl text-black tracking-wider">
          Loading{blink && <span className="ml-1">_</span>}
        </h1>
      </div>
    </div>
  );
}
