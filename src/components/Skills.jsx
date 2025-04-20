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
    description: '"I specialize in creating dynamic and responsive websites that align with your unique needs. From visually stunning front-end designs to robust back-end development, I ensure your website delivers an exceptional experience on all devices. Whether its a sleek portfolio, an interactive blog, or a feature-rich eCommerce platform, I bring your vision to life. Let’s collaborate to build a web presence that stands out and makes an impact."',
    icon: <Code2 size={28} />,
    color: 'bg-[#F0E0D0]',
    level: 90,
  },
  {
    id: 2,
    title: 'Frontend Development',
    description: '"As a Frontend Designer, I create clean, responsive, and intuitive interfaces that enhance user experience. From landing pages to interactive dashboards, I focus on designs that are both visually appealing and highly functional. Let’s bring your vision to life with seamless and engaging UI."',
    icon: <Layout size={28} />,
    color: 'bg-[#F0E0D0]',
    level: 85,
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: '"As a UI/UX Designer, I focus on making websites and apps that are both beautiful and easy to use. I start by understanding what users want and how they interact with technology. Then I create simple sketches and layouts (called wireframes) to plan how everything should look and work. After that, I design the final version with colors, buttons, and visuals that are clean and user-friendly."',
    icon: <PenTool size={28} />,
    color: 'bg-[#F0E0D0]',
    level: 80,
  },
  {
    id: 4,
    title: 'Leadership',
    description: '"As a leader, I enjoy managing teams and organizing events from start to finish. I make sure everyone works well together and stays on track to reach our goals. I focus on good planning, clear communication, and keeping things running smoothly. Whether it’s handling tasks, solving problems, or supporting my team, I always aim to make the event or project a success."',
    icon: <Users size={28} />,
    color: 'bg-[#F0E0D0]',
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
       
              <div className="flex justify-between gap-6 flex-nowrap">
  {skillCards.map((skill, index) => (
    <motion.div
      key={skill.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group rounded-2xl p-6 ${skill.color} w-[30%] 
                  flex flex-col justify-start transition-all duration-300 
                  hover:bg-[#F0E0D0] hover:outline hover:outline-[#4B2E2E] hover:outline-2`}
    >
      {/* Icon + Title */}
      <div className="text-center mb-4">
        <div className="inline-block text-[#4B2E2E] mb-2">
          {skill.icon}
        </div>
        <h3 className="text-xl font-bold text-[#4B2E2E]">{skill.title}</h3>
      </div>

      {/* Description */}
      <div className="text-sm text-[#4B2E2E] text-justify leading-relaxed">
        {skill.description.replace(/^"|"$/g, '')}
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-1 mt-4 w-full max-w-[270px]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full flex-1 ${
              i < skill.level / 20 ? 'bg-[#4B2E2E]' : 'bg-white'
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
 
