import { FaCode, FaServer, FaPencilRuler, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Frontend Development',
    icon: <FaCode size={24} />,
    description: 'I build responsive, fast, and accessible frontends using modern frameworks like React and Tailwind CSS.',
  },
  {
    title: 'Backend Development',
    icon: <FaServer size={24} />,
    description: 'I develop robust backend systems with Node.js and Express, handling APIs and databases efficiently.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPencilRuler size={24} />,
    description: 'I design clean, intuitive interfaces in Figma with a user-first approach to enhance engagement.',
  },
  {
    title: 'Leadership & Teamwork',
    icon: <FaUsers size={24} />,
    description: 'I thrive in collaborative environments, leading projects and mentoring teams to success.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 px-4 flex justify-center ">
      <div className="w-full max-w-screen-xl bg-[#111827] rounded-3xl p-8 md:p-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-blue-400">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -20, scale: 1.05 }}
              whileTap={{ y: -20, scale: 1.05 }} // ✅ makes it responsive to touch
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: 0.4,
              }}
              className="bg-[#0F172A] rounded-xl p-6 text-center transition-all duration-300 cursor-pointer"
            >
              <div className="bg-[#1E293B] p-4 rounded-full inline-block mb-4 text-blue-400">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
