import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills', label: 'My Services' }, // ✅ this will scroll to #skills but show 'My Services'
    { id: 4, link: 'projects' },
    { id: 5, link: 'achievements' },
    { id: 6, link: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full h-16 z-50 transition-all duration-300 bg-[#AF8362] shadow-lg : 'bg-transparent'}`}
    >
      <div className="flex justify-between items-center h-full max-w-screen-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white cursor-pointer">Anurag Sharma</h1>

        
        <div className="hidden md:flex">
          {links.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className="nav-link px-4 capitalize text-white hover:text-[#4B2E2E]"
            >
              {label || link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden text-white"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col justify-center items-center absolute top-20 left-0 w-full bg-[#F0E0D0] backdrop-blur-sm"
        >
          {links.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              onClick={() => setNav(false)}
              className="nav-link py-4 text-2xl capitalize text-[#4B2E2E]"
            >
              {label || link}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
