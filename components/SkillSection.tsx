"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoVercel, IoChevronDown } from "react-icons/io5";
import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const groupedSkills = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    {
      name: "React Native",
      icon: <TbBrandReactNative className="text-cyan-400" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-800 dark:text-white" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "AWS", icon: <FaAws className="text-black" /> },
    {
      name: "Vercel",
      icon: <IoLogoVercel className="text-white bg-black rounded-full" />,
    },
  ],
};

export default function SkillsSection() {
  const [openGroup, setOpenGroup] = useState<string>("Frontend");

  const toggleGroup = (group: string) => {
    setOpenGroup((prev) => (prev === group ? "" : group));
  };

  return (
    <section
      id="skills"
      className="w-full py-20 bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        {Object.entries(groupedSkills).map(([category, skills]) => {
          const isOpen = openGroup === category;

          return (
            <div
              key={category}
              className="mb-6 border border-gray-300 dark:border-slate-600 rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() => toggleGroup(category)}
                className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <span>{category}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl"
                >
                  <IoChevronDown />
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 text-center px-6 py-6 bg-gray-50 dark:bg-slate-900"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-xl shadow-sm dark:shadow-xl bg-white dark:bg-slate-800 hover:scale-[1.06] hover:shadow-lg transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="text-4xl mb-2 flex justify-center">
                          {skill.icon}
                        </div>
                        <p className="text-sm font-semibold tracking-wide">
                          {skill.name}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
