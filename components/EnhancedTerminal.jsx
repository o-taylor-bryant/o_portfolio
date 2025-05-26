import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnhancedTerminal({
  children,
  title = "terminal",
  commands = [],
  onCommand,
  showPrompt = true,
  className = "",
}) {
  const [inputValue, setInputValue] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [cursorBlink, setCursorBlink] = useState(true);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Command history navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputValue(
          commandHistory[commandHistory.length - 1 - newIndex] || ""
        );
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > -1) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(
          newIndex === -1
            ? ""
            : commandHistory[commandHistory.length - 1 - newIndex] || ""
        );
      }
    } else if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      const command = inputValue.trim();
      setCommandHistory((prev) => [...prev, command]);
      setInputValue("");
      setHistoryIndex(-1);
      onCommand?.(command);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full bg-black text-white font-mono rounded-lg border border-white/20 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-white/80"></div>
          <div className="w-3 h-3 rounded-full bg-white/60"></div>
          <div className="w-3 h-3 rounded-full bg-white/40"></div>
        </div>
        <span className="text-xs text-white/60">{title}</span>
        <div className="w-8"></div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 min-h-[200px] max-h-[600px] overflow-y-auto">
        {/* Available Commands */}
        {commands.length > 0 && (
          <div className="mb-4 text-white/60 text-sm">
            Available commands: {commands.join(", ")}
          </div>
        )}

        {/* Main Content */}
        <div className="mb-4">{children}</div>

        {/* Command Input */}
        {showPrompt && (
          <div className="flex items-center text-sm">
            <span className="text-green-500 mr-2">➜</span>
            <span className="text-white/60 mr-2">~</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white"
              spellCheck="false"
              autoComplete="off"
            />
            <span
              className={`w-2 h-4 bg-white ml-1 ${
                cursorBlink ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2 bg-neutral-900 border-t border-white/10 text-xs text-white/40">
        Press Enter to execute • Arrow Up/Down for history
      </div>
    </motion.div>
  );
}
