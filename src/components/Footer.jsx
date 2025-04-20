import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#AF8362] py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://github.com/AnuragSharma2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#4B2E2E] hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-sharma-34bb54295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#4B2E2E] hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/anuragsharma2311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#4B2E2E] hover:text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:anuragwork2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#4B2E2E] hover:text-white transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-[#4B2E2E] text-sm">
            ©AnuragSharma - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
