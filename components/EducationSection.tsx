"use client";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Vasantdada Patil Pratishthan's College of Engineering and visual arts",
    period: "2021 – 2025",
    score: "7.2 CGPA",
    description:
      "Relevant coursework: Data Structures, Algorithms, Operating Systems, Web Development. Participated in coding competitions and built multiple full-stack apps.",
  },
  {
    degree: "Senior Secondary (Class XII) – PCMB",
    institution: "The New Era Jr Sci and Arts College ",

    period: "2019 – 2021",
    score: "93 %",
    description:
      "Secured 90%+ in Maharashtra board exams with focus on Mathematics and Physics.",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full py-20 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <div className="relative border-l-4 border-primary dark:border-white pl-6 space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-5"
            >
              <div className="absolute w-4 h-4 bg-primary dark:bg-white rounded-full -left-[10px] top-1" />
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {edu.institution} · {edu.period} · {edu.score} 
              </span>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
