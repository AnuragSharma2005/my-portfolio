import { motion } from 'framer-motion';
import { skillsData } from '../data/mockData';
import {
  Code2,
  Layout,
  PenTool,
  Users,
  Settings,
  Server,
} from 'lucide-react'; // Icons

const skillCards = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Full-stack development with modern frameworks and best practices',
    icon: <Code2 size={28} />,
    color: 'bg-[#AF8362]',
    level: 90,
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces',
    icon: <Layout size={28} />,
    color: 'bg-[#AF8362]',
    level: 85,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences',
    icon: <PenTool size={28} />,
    color: 'bg-[#AF8362]',
    level: 80,
  },
  {
    id: 4,
    title: 'Leadership',
    description: 'Team management and project coordination',
    icon: <Users size={28} />,
    color: 'bg-[#AF8362]',
    level: 75,
  },

];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-[#4B2E2E]">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl font-bold text-center text-[#4B2E2E] mb-8">
                MY <span className="text-[#AF8362]">Services</span>
              </h2>
          <p className="text-center text-2xl text-[#4B2E2E] mb-12">
            Crafting digital experiences with expertise and passion
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {skillCards.map((skill, index) => (
    <motion.div
    key={skill.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`group rounded-2xl p-6 ${skill.color} relative overflow-hidden h-72 
                transition-all duration-300 
                hover:bg-[#F0E0D0] hover:outline hover:outline-[#4B2E2E] hover:outline-2`}
  >
        <div className="mb-4 text-white group-hover:text-[#4B2E2E]">
          {skill.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#4B2E2E]">
          {skill.title}
        </h3>
        <p className="text-sm text-white/80 mb-4 group-hover:text-[#4B2E2E]">
          {skill.description}
        </p>
        <div className="flex items-center gap-1 mt-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full flex-1 ${
                i < skill.level / 20 ? 'bg-white' : 'bg-white/30'
              } group-hover:bg-[#4B2E2E]`}
            />
          ))}
        </div>
      </motion.div>
      ))}
    </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
 
