"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Flint InfoTech",
    period: "July 2025 – Present",
    description:
      "Building real-time web app with React, NestJS, PostgreSQL, and Socket.IO. creating dynamic admin dashboards and interactive charts and many more.",
    projects: "Bricon Construction , Spandan Centre",
  },
  {
    role: "Freelance Web Developer",
    company: "Various Clients",
    period: "Jan 2024 – July 2025",
    description:
      "Delivered custom eCommerce, portfolio, and medical appointment platforms using MERN stack, Next.js, and TailwindCSS.",
    projects: "kissanbazzar",
  },
  {
    role: "Open Source Contributor",
    company: "Hacktoberfest & GitHub Projects",
    period: "Oct 2023 – Jan 2024",
    description:
      "Contributed to open-source projects focused on performance, accessibility, and UI improvements across React-based ecosystems.",
    projects: "GirlScript Summer of Code , Hacktoberfest, Github Projects",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full py-20 bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative border-l-4 border-primary dark:border-white pl-6 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-5"
            >
              <div className="absolute w-4 h-4 bg-primary dark:bg-white rounded-full -left-[10px] top-1" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {exp.company} · {exp.period}
              </span>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </p>
              <div className="flex items-center gap-4">
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm border-b-2 pb-1 hover:bg-slate-800 rounded-lg shadow-sm p-2 ">
                  {exp.projects}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
