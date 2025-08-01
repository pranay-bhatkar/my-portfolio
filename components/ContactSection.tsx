"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-20 shadow text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Got a project or idea?
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Let’s bring it to life together. I’d love to hear from you!
        </p>
        <div className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition cursor-none">
          Let’s Connect
        </div>
      </motion.div>
    </section>
  );
}
