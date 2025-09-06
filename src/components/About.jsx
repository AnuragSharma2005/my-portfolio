import { motion } from 'framer-motion';
import { aboutData } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 flex justify-center px-4">
      <div className="w-full max-w-screen-xl bg-[#111827] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Image */}
            <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-0">
              <div
                className="w-full max-w-[320px] h-[380px] md:h-[440px] shadow-xl"
                style={{
                  borderRadius: '50%',
                  boxShadow: '0 25px 80px #3674B5',
                  backgroundColor: '77BEF0',
                  padding: '10px',
                }}
              >
                <img
                  src="/WhatsApp Image 2025-07-11 at 20.53.21_6608f744.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-2 md:order-1 w-full md:w-11/12 text-white px-2 sm:px-4 md:px-0 flex flex-col space-y-6">

              {/* About Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold 
                             bg-gradient-to-r from-blue-400 to-cyan-400 
                             bg-clip-text text-transparent text-center md:text-left">
                About Me
              </h2>

              <p className="text-base sm:text-lg text-gray-300 
                            text-center md:text-justify 
                            leading-relaxed tracking-wide">
                Hi, I’m Anurag Sharma, a passionate Full-Stack Developer and Computer Science student at Chitkara University.
                I specialize in transforming complex ideas into scalable, efficient, and user-centric digital solutions that create real impact.
                <br /><br />
                As a core member of CEED – Chitkara’s Startup Club, I actively contribute to planning and managing events that foster innovation, entrepreneurship, and collaboration within the student community.
                <br /><br />
                I thrive on continuous learning and enjoy working at the intersection of technology, creativity, and problem-solving—always seeking opportunities to build, innovate, and inspire. 🚀
              </p>

              {/* Education Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold 
                             bg-gradient-to-r from-blue-400 to-cyan-400 
                             bg-clip-text text-transparent text-center md:text-left">
                Education
              </h2>

              <div className="flex flex-col items-center md:items-start space-y-4">
                {aboutData.education.map((edu) => (
                  <div key={edu.id} className="text-center md:text-left">
                    <h4 className="text-lg font-medium text-[#77BEF0]">{edu.degree}</h4>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-sm text-gray-400">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;