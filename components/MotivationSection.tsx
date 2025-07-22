"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const quotes = [
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
];

export default function MotivationSection() {
  return (
    <section
      id="motivation"
      className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Drives Me
        </motion.h2>

        {/* <Lottie
          animationData={motivationAnim}
          className="h-72 mx-auto mb-10"
          loop
        /> */}

        <div className="space-y-12">
          {quotes.map((q, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-primary text-2xl mb-4 mx-auto" />
              <p className="text-xl font-medium italic">
                &quot;{q.quote}&quot;
              </p>
              <p className="mt-4 font-semibold text-primary">{q.author}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I believe in continuous learning, building things that matter, and
          helping others grow. Whether it&apos;s solving a problem with code or
          inspiring others to take the leap, I&apos;m here to leave my mark.
        </motion.p>
      </div>
    </section>
  );
}
