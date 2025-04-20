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
    color: 'bg-blue-600',
    level: 90,
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces',
    icon: <Layout size={28} />,
    color: 'bg-purple-600',
    level: 85,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences',
    icon: <PenTool size={28} />,
    color: 'bg-pink-600',
    level: 80,
  },
  {
    id: 4,
    title: 'Leadership',
    description: 'Team management and project coordination',
    icon: <Users size={28} />,
    color: 'bg-green-600',
    level: 75,
  },
  {
    id: 5,
    title: 'Management',
    description: 'Strategic planning and resource optimization',
    icon: <Settings size={28} />,
    color: 'bg-yellow-600',
    level: 70,
  },
  {
    id: 6,
    title: 'DevOps',
    description: 'CI/CD pipelines and cloud infrastructure',
    icon: <Server size={28} />,
    color: 'bg-red-600',
    level: 65,
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
          <h2 className="text-4xl font-bold text-center mb-4">Professional Skills</h2>
          <p className="text-center text-2xl text-[#AF8362] mb-12">
            Crafting digital experiences with expertise and passion
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {skillCards.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 ${skill.color} relative overflow-hidden`}
              >
                <div className="mb-4 text-white">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-white/80 mb-4">{skill.description}</p>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full flex-1 ${
                        i < skill.level / 20 ? 'bg-white' : 'bg-white/30'
                      }`}
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
