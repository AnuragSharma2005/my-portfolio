"use client"

import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Deepika Chawla - Professional Portfolio Website",
      category: "Freelance Full-Stack Developer (Independent Project)",
      description:
        "Independently designed and developed a fully responsive portfolio website for a professional Anchor & Corporate Trainer. The site highlights her brand with dedicated sections such as About, Events, Recommendations, Brands, and Contact. Delivered complete end-to-end development including UI/UX design, animations, performance optimization, and deployment, ensuring a professional and engaging digital presence..",
      technologies: ["React", "Framer Motion", "Google Sheets", "Vercel", "namecheap", "Tailwind CSS","Git/Git-Hub"],
      github: "https://github.com/AnuragSharma2005/freelancing",
      liveDemo: "https://deepikashine.com/",
    //   moreInfo: "#",
      image: "/Exp1logo.png",
    },
    {
      id: 2,
      title: "RefBoosts – Referral Matching Platform",
      category: "Freelance Frontend Developer (Independent Project)",
      description:
        "Independently developed the upcoming landing platform for RefBoosts, a referral-matching marketplace aimed at connecting fresh talent with seasoned professionals. Designed a sleek Coming Soon page with clean, responsive layout and engaging visuals—setting a solid foundation for future platform expansion..",
      technologies: ["React.js", "Tailwind CSS", "Vercel", "git-hub", "Framer Motion", "supabase","Herox Hosting",],
      github: "https://github.com/AnuragSharma2005/refboosts",
      liveDemo: "https://refboosts.com/",
    //   moreInfo: "#",
      image: "Exp2logo.png",
    },
  ]

  return (
    <div className="px-4 sm:px-6 md:px-0">
      <section id="projects" className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20">
        <div className="w-full max-w-6xl rounded-3xl bg-[#111827] shadow-2xl shadow-purple-500/20 mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400  bg-clip-text text-transparent">
              Work Experience
            </h2>

            <div className="grid gap-8 md:gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="bg-gradient-to-r from-blue-800/20 to-indigo-800/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 flex flex-col md:flex-row"
                >
                  {/* Image Section */}
                  <div className="md:w-1/2 relative group h-64 md:h-auto overflow-hidden">
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-102 transition duration-300"/>
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-80 transition duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition"
                      >
                        <FaGithub size={28} />
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition"
                      >
                        <FaExternalLinkAlt size={28} />
                      </a>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col justify-between md:w-1/2">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-purple-300 font-medium mb-2">{project.category}</p>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 text-left sm:text-justify">
                    {project.description}
                    </p>


                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                             className="px-4 py-1 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm transition flex items-center gap-2"
                      >
                        <FaExternalLinkAlt /> Live 
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition flex items-center gap-2"
                      >
                        <FaGithub /> View Code
                      </a>
                      {/* <a
                        href={project.moreInfo}
                        className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-white text-sm transition flex items-center gap-2"
                      >
                        <FaInfoCircle /> More
                      </a> */}
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

export default Projects
