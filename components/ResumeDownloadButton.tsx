"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function ResumeDownloadButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link
        href="/Pranay_Bhatkar_Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ml-4"
      >
        <FaDownload className="text-lg" />
        {/* <span>Download Resume</span> */}
      </Link>
    </motion.div>
  );
}
