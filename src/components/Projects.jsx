import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'QuickBites4',
    description: 'A food delivery platform that connects users with local home-cooked meals.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/281610/QuickBites4',
    image: '/my-portfolio/quickbites.jpg',
  },
  {
    id: 2,
    title: 'Weather Forecast',
    description: 'Your digital window to the skies — see what the weather’s whispering today and tomorrow.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    github: 'https://github.com/281610/PLUTO',
    image: 'https://raw.githubusercontent.com/281610/PLUTO/refs/heads/main/as6.jpg',
  },
  {
    id: 3,
    title: 'EasyHire',
    description: 'Built a job platform to connect users with nearby domestic service providers through location-based search.',
    technologies: ['HTML', 'CSS', 'javaScript', 'React.js', 'Tailwind CSS', 'Google Maps API', 'Git', 'Payment Gateway'],
    github: 'https://github.com/281610/EasyHire3',
    image: '/my-portfolio/image.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#F0E0D0]">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-center text-[#4B2E2E] mb-12">
            MY <span className="text-[#AF8362]">Projects</span>
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#4B2E2E] rounded-lg overflow-hidden shadow-md flex flex-col justify-between"
              >
                <div className="relative group w-full h-48 sm:h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#AF8362]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-white text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs text-white bg-[#AF8362] px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
