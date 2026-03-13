import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative w-9 h-9 rounded-lg flex items-center justify-center bg-secondary text-foreground hover:bg-accent/10 transition-colors"
      aria-label="Toggle dark mode"
    >
      <AnimatePresence mode="wait">
        {dark ? (
          <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Sun className="h-4 w-4" />
          </motion.div>
        ) : (
          <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Moon className="h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default DarkModeToggle;
