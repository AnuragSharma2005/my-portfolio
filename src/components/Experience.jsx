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
    id: 3,
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
      "Admin Panel",
    ],
    github: "https://github.com/adityasharma0903/blueberry-fields",
    liveDemo: "https://blueberryfieldsschool.com/",
    image: "/blueberry.jpg",
  },
  {
    id: 4,
    title: "E-Commerce Platform - Livique ",
    category: "Full-Stack Web Developer (Client Project)",
    description:
      "Designed and developed a full-stack e-commerce platform tailored for the Home Décor, Beauty, and Gift Items market. The application features a scalable architecture with modular frontend components and a secure backend. Implemented dynamic product listings, category-based filtering, cart and checkout workflows, and role-based access control for admin and vendors. Integrated secure authentication, image optimization, and cloud-based asset management to ensure high performance and smooth user experience. The platform is optimized for responsiveness, SEO, and future scalability, making it suitable for growing online retail businesses.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "JWT Auth",
      "passport.js",
      "Google Cloud",
      "Express.js",
      "Postman",
      "APIs",
      
    ],
    github: "https://github.com/Moksh-Digital/Livique",
    liveDemo: "https://www.livique.co.in/",
    image: "/image-5.png",
  },
]

const Experience = () => {
  return (
    <div id="Experience" className="px-4 sm:px-6 md:px-0">
      <section className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20">
        <div className="max-w-7xl mx-auto bg-[#020617] rounded-3xl px-6 md:px-10 py-14 shadow-2xl shadow-cyan-500/20">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="bg-gradient-to-br from-[#0f172a] to-[#020617]
                rounded-2xl border border-white/10 overflow-hidden
                shadow-xl hover:shadow-cyan-500/30 transition-all duration-500
                flex flex-col"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />

                  {/* Hover Icons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition duration-500 flex items-center justify-center gap-6">
                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400"
                    >
                      <FaGithub size={30} />
                    </a>

                    {exp.liveDemo && (
                      <a
                        href={exp.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-400"
                      >
                        <FaExternalLinkAlt size={28} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {exp.title}
                  </h3>

                  <span className="text-sm text-cyan-400 font-semibold">
                    {exp.category}
                  </span>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full
                        bg-cyan-500/10 border border-cyan-500/30
                        text-cyan-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex gap-4 pt-6">
                    {exp.liveDemo && (
                      <a
                        href={exp.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={exp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-sm"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
