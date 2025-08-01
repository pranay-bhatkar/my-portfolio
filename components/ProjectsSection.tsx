"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "KissanBazzar – Grocery App",
    description:
      "Full-stack e-commerce platform with real-time order tracking, referral system, scheduled delivery, and QR/COD payments.",
    image: "/projects/kissanbazzar.png",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.IO", "Stripe"],
    link: "https://kissanbazzar.in",
  },
  {
    title: "Chat App",
    description:
      "Real-time messaging app with authentication, typing indicators, online status, and group chat features.",
    image: "/projects/chat-app.png",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    link: "https://chat-application-rho-gilt.vercel.app/",
  },
  {
    title: "Metascape (Metaverse)",
    description:
      "Immersive metaverse platform experience with seamless navigation and futuristic UI/UX.",
    image: "/projects/metascape.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    link: "https://metascape.vercel.app/",
  },
  {
    title: "Fundverse",
    description:
      "Decentralized crowdfunding platform where users can fund and launch campaigns securely.",
    image: "/projects/fundverse.png",
    tech: ["React", "Solidity", "Thirdweb", "Tailwind CSS"],
    link: "https://fundverse-xv5q.vercel.app/",
  },
  {
    title: "Spandan Centre",
    description:
      "Healthcare center website with appointment booking, service listings, and doctor profiles.",
    image: "/projects/spandan.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://spandan-centre.vercel.app/",
  },
  {
    title: "Bricon Construction",
    description:
      "Modern construction company website showcasing services, team, and ongoing projects.",
    image: "/projects/bricon.png",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "https://bricon.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description:
      "Animated and responsive developer portfolio featuring sections like skills, experience, education, and contact. Built with App Router and backend contact form.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Node.js"],
    link: "https://pranay-bhatkar-dev.vercel.app/",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-slate-900 py-20 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover bg-black/60"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary text-white dark:bg-cyan-600 px-2 py-1 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center bg-primary p-1.5 border-2 border-secondary rounded-xl shadow-md hover:border-primary">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-white px-4 py-2 font-semibold transition-all duration-300"
                  >
                    View Project
                    <FiExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
