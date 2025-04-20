import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  // {
  //   id: 3,
  //   title: 'Todo Manager',
  //   description: 'A simple and clean to-do app to track daily tasks with priority filters.',
  //   technologies: ['HTML', 'CSS', 'JavaScript'],
  //   github: 'https://github.com/281610/todo-manager',
  //   image: '/my-portfolio/project3.jpg',
  // },
];

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <section id="projects" className="py-20 bg-[#F0E0D0]">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl font-bold text-center text-[#4B2E2E] mb-8">
            MY <span className="text-[#AF8362]">Projects</span>
          </h2>
          <Slider {...settings}>
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-[#4B2E2E] rounded-lg overflow-hidden mx-2">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-[#AF8362] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-white transition-colors duration-300"
                        >
                          <FaGithub size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm text-white bg-[#AF8362] px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
