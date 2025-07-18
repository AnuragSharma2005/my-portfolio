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
                  src="/my-portfolio/WhatsApp Image 2025-07-11 at 20.53.21_6608f744.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-2 md:order-1 w-full md:w-11/12 text-white px-4 md:px-0">
           <h2 className="text-5xl font-bold  mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
               About Me
              </h2>

              <p className="mb-4 text-justify">
                Hi, I'm Anurag Sharma, a passionate full-stack developer currently pursuing my B.E. in Computer Science at Chitkara University.
                I enjoy turning ideas into real-world digital solutions through clean, efficient, and user-friendly code.
                With experience in both front-end and back-end technologies, I strive to build applications that are not only functional but also deliver a smooth user experience.
                My technical skills include proficiency in HTML, CSS, JavaScript, and various frameworks and libraries, enabling me to build responsive and interactive websites.
                Beyond coding, I’m actively involved in CEED – Chitkara University’s Startup Club, where I serve as a core member of the Event Management Team.
                There, I contribute to organizing and executing events that promote innovation, entrepreneurship, and collaboration among students.
                I love working with people, whether it’s through tech or events, and I’m always looking to grow, learn, and make meaningful contributions.
                Thanks for visiting my portfolio!
              </p>

              <h2 className="text-5xl font-bold  bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</h2>
              {aboutData.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h4 className="text-lg font-medium text-[77BEF0]">B.E(Computer Science)</h4>
                  <p>CHITKARA UNIVERSITY</p>
                  <p className="text-sm">2023-2027</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
