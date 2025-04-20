import { motion } from 'framer-motion';
import { aboutData } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F0E0D0]">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-0">
              <div
                className="w-full max-w-[320px] h-[380px] md:h-[440px] shadow-xl"
                style={{
                  borderRadius: '50%',
                  boxShadow: '0 25px 80px #4B2E2E',
                  backgroundColor: '#4B2E2E',
                  padding: '10px',
                }}
              >
                <img
                  src="/my-portfolio/anurag.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '50%' }}
                />
              </div>
            </div>

            
            <div className="order-2 md:order-1 w-full md:w-11/12 text-[#4B2E2E] px-4 md:px-0">
             
              <h2 className="text-5xl font-bold text-left text-[#4B2E2E] mb-8">
                About <span className="text-[#AF8362]">Me</span>
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

            
              <h3 className="text-5xl font-semibold text-[#4B2E2E] mb-4">Education</h3>
              {aboutData.education.map((edu) => (
                <div key={edu.id} className="mb-4">
                  <h4 className="text-lg font-medium text-[#AF8362]">B.E(Computer Science)</h4>
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