import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import BackgroundAnimations from './BackgroundAnimations';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
const Home = () => {
  return (
 <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-blue-800/20 to-indigo-800/20 relative overflow-hidden">
  <BackgroundAnimations />

  <div className="max-w-screen-xl mx-auto px-4 pt-10 pb-6 md:pt-20 md:pb-20 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-28"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-52 h-72 md:w-80 md:h-[440px]"
      >
        <div className="absolute inset-0 p-[5px] rounded-full bg-gradient-to-r from-blue-900 to-cyan-600 animate-spin-slow">
          <div className="w-full h-full rounded-full bg-[#0e0f1a]/80" />
        </div>

        <div className="relative w-full h-full overflow-hidden rounded-full">
          <img
            src="/WhatsApp Image 2025-07-11 at 16.48.05_9af23cbe.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#AF8362]/30 rounded-full blur-sm animate-pulse" />
        <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-[#4B2E2E]/25 rounded-full blur-md animate-bounce delay-500" />
        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-[#AF8362]/35 rounded-full blur-sm animate-ping delay-1000" />
      </motion.div>

      <div className="text-left">
        <h2 className="text-3xl sm:text-4xl mb-1 text-white text-transparent">Hello, Myself</h2>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#77BEF0] mb-3">
          ANURAG SHARMA
        </h1>
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4">
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
        <p className="text-white max-w-xs sm:max-w-md mb-4 text-sm sm:text-base">
          Ready to create something amazing together? Let's talk.
        </p>
        <div className="flex gap-4">
          <a
            href="/Anurag-Resume (Fico).pdf"
            className="px-5 py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl font-semibold transition cursor-hover p-6 hover:brightness-110"
            download
          >
            Download Resume
          </a>
         <div className="inline-block rounded-3xl p-[2px] bg-gradient-to-r from-blue-600 to-cyan-500">
            <a
              href="#contact"
              className="block px-5 py-3 text-sm sm:text-base rounded-3xl cursor-hover p-6  font-semibold text-white bg-[#0e0f1a]/80 hover:brightness-110"
            >
              Get In Touch
            </a>
          </div>
        </div>

      <div className="max-w-screen-xl mx-auto px-4 mt-10 ">
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-6">
            <a
              href="https://github.com/AnuragSharma2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-sharma-34bb54295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:anuragwork2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-white transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
          </div>
          </div>


       
      </div>
    </motion.div>
  </div>
</section>
  );
};

export default Home;
