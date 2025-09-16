import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "QuickBites4",
    description:
      "A food delivery platform that connects users with local home-cooked meals.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/281610/QuickBites4",
    liveDemo: "https://quick-bites-final.vercel.app/",
    image: "/quickbites.jpg",
  },
  {
    id: 2,
    title: "Weather Forecast",
    description:
      "Your digital window to the skies — see what the weather’s whispering today and tomorrow.",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/AnuragSharma2005/shopping",
    liveDemo: "https://voiceshop.vercel.app/",
    image:
      "/voice.png",
  },
  {
    id: 3,
    title: "EasyHire",
    description:
      "Built a job platform to connect users with nearby domestic service providers through location-based search.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Google Maps API",
      "Git",
      "Payment Gateway",
    ],
    github: "https://github.com/281610/EasyHire3",
    liveDemo: "",
    image: "/image.png",
  },
];

const Projects = () => {
  return (
    <div className="px-4 sm:px-6 md:px-0">
      <section
        id="projects"
        className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20"
      >
        <div className="w-full max-w-7xl rounded-3xl bg-[#111827] shadow-2xl shadow-blue-500/20 mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 cursor-hover p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MY Projects
            </h2>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project) => (
                <motion.div
                  key={project.id}
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
                  <div className="relative group w-full h-48 sm:h-56 overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    />

                    {/* Blur overlay on hover */}
                    <div className="absolute inset-0 bg-blue-500/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <FaGithub size={30} />
                      </a>
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white"
                        >
                          <FaExternalLinkAlt size={30} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-white text-sm">{project.description}</p>

                    <div className="mt-3 flex gap-3">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm transition"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-sm transition"
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
  );
};

export default Projects;
