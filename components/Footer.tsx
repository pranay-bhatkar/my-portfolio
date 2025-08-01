"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ResumeDownloadButton from "./ResumeDownloadButton";

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/pranay-bhatkar",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com/in/bhatkar",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:you@example.com",
    label: "Email",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else {
        toast.error("Failed to subscribe.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <footer className="relative bg-gray-100 dark:bg-slate-900 text-gray-700 dark:text-gray-300 pt-12 pb-20 border-t border-gray-200 dark:border-slate-700"
    
    >
      <motion.div
        className="max-w-5xl mx-auto px-4 flex flex-col gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="text-xl font-bold text-primary dark:text-white"
          >
            Pranay Bhatkar
          </Link>
          <nav className="flex gap-6 text-md font-medium">
            <a
              href="#about"
              className="hover:text-primary dark:hover:text-white transition"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition dark:hover:text-white"
            >
              Contact
            </a>
          </nav>
          <div className="flex gap-5 text-xl">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-white transition"
                aria-label={link.label}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        {/* <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-gray-300 dark:border-gray-600 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-center sm:text-left">
            📬 Subscribe to my newsletter for updates & resources
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex w-full sm:w-auto items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 text-sm outline-none w-full sm:w-64"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary-dark transition"
            >
              Subscribe
            </button>
          </form>
        </motion.div> */}

        {/* Bottom */}
        <motion.div
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Pranay Bhatkar. All rights reserved.
          {/* <ResumeDownloadButton /> */}
        </motion.div>
      </motion.div>

      {/* Back to Top Arrow */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-20 right-6  bg-black/20 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.15 }}
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </footer>
  );
}
