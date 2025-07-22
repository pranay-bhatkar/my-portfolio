"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-20 bg-gray-100 dark:bg-[#0f172a] text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <motion.div
            className="w-full md:w-1/2  overflow-hidden p-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border-2 p-5 rounded-full bg-[#0f172a] ">
              <Image
                src="/profile.png"
                alt="Profile"
                width={500}
                height={500}
                className="rounded-full object-cover justify-center items-center shadow-lg shadow-gray-800"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              I&apos;m{" "}
              <span className="font-semibold text-secondary">
                Pranay Bhatkar
              </span>
              , a passionate full-stack developer who loves building modern,
              scalable, and user-friendly web and mobile applications. I
              specialize in the MERN stack and have experience working with
              real-time apps, e-commerce platforms, and responsive UI using
              Tailwind and Framer Motion.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              My mission is to create clean, functional, and engaging digital
              experiences that solve real-world problems. I’m currently working
              on several freelance projects and always open to exciting
              collaborations!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
