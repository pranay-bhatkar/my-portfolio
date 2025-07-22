"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-primary to-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Pranay</h1>
        <p className="text-lg md:text-2xl text-secondary">
          Full Stack Developer | MERN | React Native
        </p>
        <a
          href="#projects"
          className="mt-4 inline-block px-6 py-2 bg-secondary text-black font-semibold rounded hover:bg-cyan-400 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}
