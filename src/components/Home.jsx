import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
     
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[280px] h-[380px] md:w-[320px] md:h-[440px] relative shadow-xl"
            style={{
              borderRadius: '50%',
              boxShadow: '0 25px 80px #4B2E2E',
              backgroundColor: '#4B2E2E',
              padding: '10px',
            }}
          >
            <img
              src="/my-portfolio/portfolio%20image.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              style={{ borderRadius: '50%' }}
            />
          </motion.div>

         
          <div className="text-left">
            <h2 className="text-[#4B2E2E] text-4xl mb-2">Hello, Myself</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B2E2E] mb-4">
              ANURAG SHARMA
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-[#AF8362] mb-6">
              <TypeAnimation
                sequence={[
                  'I am Web Developer',
                  2000,
                  'I am UI/UX Designer',
                  2000,
                  'I am Frontend Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-[#4B2E2E] max-w-2xl mb-8">
              Ready to create something amazing together? Let’s talk.
            </p>
            <div className="flex gap-4">
            <a
                 href="/Anu%20new%20resume.pdf" 
                 className="px-6 py-3 bg-[#4B2E2E] text-white rounded-xl font-semibold hover:bg-[#4B2E2E] transition"
                 download
                >
                  Download Resume
                </a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
