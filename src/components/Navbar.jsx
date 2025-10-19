import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'Services' },
    // { id: 5, link: 'projects' },
    { id: 6, link: 'Experience' },
    { id: 7, link: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 w-full z-50 flex justify-center"
    >
      {/* Main Navbar Container */}
      <div className="w-full max-w-6xl bg-[#0e0f1a]/80 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-2xl flex items-center justify-between">
        {/* Left: Name */}
        <Link
          to="home"
          smooth
          duration={500}
          className="text-xl sm:text-3xl font-bold text-white cursor-pointer"
        >
          Anurag Sharma
        </Link>


        {/* Center Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {links.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className="capitalize text-white hover:text-[#8c8aff] cursor-pointer transition text-lg"
            >
              {label || link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden text-white cursor-pointer"
        >
          {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {nav && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-[#0e0f1a]/80 backdrop-blur-sm rounded-xl py-6 px-6 shadow-xl flex flex-col items-center space-y-4 md:hidden"
        >
          {links.map(({ id, link, label }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              onClick={() => setNav(false)}
              className="text-lg text-white capitalize hover:text-[#8c8aff]"
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
