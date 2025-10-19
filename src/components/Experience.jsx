"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const experiences = [
  {
    id: 1,
    title: "Deepika Chawla - Professional Portfolio Website",
    category: "Full-Stack Web Developer (Client Project)",
    description:
      "Designed and developed a professional portfolio website for a corporate trainer and anchor. Implemented responsive UI/UX with animations, smooth navigation, and SEO optimization. Delivered full-stack solution including hosting, domain integration, and deployment.",
    technologies: [
      "React",
      "Framer Motion",
      "Google Sheets",
      "Vercel",
      "Tailwind CSS",
      "Git/GitHub",
    ],
    github: "https://github.com/AnuragSharma2005/freelancing",
    liveDemo: "https://deepikashine.com/",
    image: "/Exp1logo.png",
  },
  {
    id: 2,
    title: "RefBoosts – Referral Matching Platform",
    category: "Full-Stack Web Developer (Client Project)",
    description:
      "Built a modern landing platform for a referral-matching marketplace connecting talent with professionals. Focused on clean responsive design and optimized structure for future scalability.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Vercel",
      "GitHub",
      "Framer Motion",
    ],
    github: "https://github.com/AnuragSharma2005/refboosts",
    liveDemo: "https://refboosts.vercel.app/",
    image: "/Exp2logo.png",
  },
  {
  id: 2,
  title: "Blueberry Fields School – Official Website",
  category: "Full-Stack Web Developer (Client Project)",
  description:
    "Developed a modern, responsive website for Blueberry Fields School to enhance its digital presence and communication with parents and students. Implemented a clean UI with smooth navigation, admission inquiry forms, and dynamic content management. Delivered complete deployment with domain integration and hosting setup.",
  technologies: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
    "Git/GitHub",
    "Cloudinary",
    "Admin Pannel",
  ],
  github: "https://github.com/adityasharma0903/blueberry-fields",
  liveDemo: "https://blueberryfieldsschool.com/",
  image: "/blueberry.jpg",
},
]

const Experience = () => {
  return (
    <div id="Experience" className="px-4 sm:px-6 md:px-0">
      <section
        id="experience"
        className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20"
      >
        <div className="w-full max-w-7xl rounded-3xl bg-[#111827] shadow-2xl shadow-blue-500/20 mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </h2>

            {/* ✅ 3 Column Grid Layout (no slider) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -20, scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    duration: 0.4,
                  }}
                  className="bg-gradient-to-r from-blue-800/20 to-indigo-800/20 rounded-lg overflow-hidden shadow-md flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/40 cursor-pointer"
                >
                  {/* Image + Overlay */}
                  <div className="relative group w-full h-52 sm:h-56 overflow-hidden rounded-t-lg">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-500/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-200 transition"
                      >
                        <FaGithub size={28} />
                      </a>
                      {exp.liveDemo && (
                        <a
                          href={exp.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-cyan-200 transition"
                        >
                          <FaExternalLinkAlt size={26} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-purple-300 text-sm font-medium">
                      {exp.category}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-3">
                      {exp.liveDemo && (
                        <a
                          href={exp.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm transition"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-sm transition"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experience
