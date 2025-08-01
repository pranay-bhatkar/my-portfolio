"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsStars } from "react-icons/bs";

const quote =
  "“The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt";

const typingText = " ";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
  let indexRef = 0;

  const typingInterval = setInterval(() => {
    setDisplayedText((prev) => {
      const nextChar = typingText.charAt(indexRef);
      indexRef++;
      return prev + nextChar;
    });

    if (indexRef >= typingText.length) {
      clearInterval(typingInterval);
    }
  }, 60);

  const timeout = setTimeout(() => {
    setLoading(false);
  }, 3500);

  return () => {
    clearInterval(typingInterval);
    clearTimeout(timeout);
  };
}, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center bg-white/30 dark:bg-[#0f172a]/40 backdrop-blur-xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <div className="text-center space-y-6">
            {/* Spinner */}
            <motion.div
              className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-yellow-500 animate-spin shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            ></motion.div>

            {/* Typewriter Text */}
            <motion.p
              className="text-lg sm:text-xl font-mono text-gray-800 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {displayedText}
            </motion.p>

            {/* Quote */}
            <motion.p
              className="text-sm sm:text-base max-w-md mx-auto text-gray-600 dark:text-slate-300 italic px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <BsStars className="inline-block text-yellow-400 mr-1 mb-1" />
              {quote}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
