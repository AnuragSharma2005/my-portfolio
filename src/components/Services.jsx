import { useRef, useState, useEffect } from "react";
import { FaCode, FaServer, FaPencilRuler, FaUsers, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

const serviceThemes = [
  {
    border: "border-blue-500/20 hover:border-blue-500/60",
    shadow: "shadow-[0_4px_20px_rgba(59,130,246,0.08)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)]",
    iconBorder: "border-blue-500",
    textColor: "text-blue-400",
    badgeBg: "bg-blue-950/40 border-blue-500/30 text-blue-300",
  },
  {
    border: "border-amber-500/20 hover:border-amber-500/60",
    shadow: "shadow-[0_4px_20px_rgba(245,158,11,0.08)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.2)]",
    iconBorder: "border-amber-500",
    textColor: "text-amber-400",
    badgeBg: "bg-amber-950/40 border-amber-500/30 text-amber-300",
  },
  {
    border: "border-emerald-500/20 hover:border-emerald-500/60",
    shadow: "shadow-[0_4px_20px_rgba(16,185,129,0.08)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.2)]",
    iconBorder: "border-emerald-500",
    textColor: "text-emerald-400",
    badgeBg: "bg-emerald-950/40 border-emerald-500/30 text-emerald-300",
  },
  {
    border: "border-pink-500/20 hover:border-pink-500/60",
    shadow: "shadow-[0_4px_20px_rgba(236,72,153,0.08)] hover:shadow-[0_8px_30px_rgba(236,72,153,0.2)]",
    iconBorder: "border-pink-500",
    textColor: "text-pink-400",
    badgeBg: "bg-pink-950/40 border-pink-500/30 text-pink-300",
  },
  {
    border: "border-purple-500/20 hover:border-purple-500/60",
    shadow: "shadow-[0_4px_20px_rgba(168,85,247,0.08)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]",
    iconBorder: "border-purple-500",
    textColor: "text-purple-400",
    badgeBg: "bg-purple-950/40 border-purple-500/30 text-purple-300",
  },
];

const tilts = [-3.5, 3.5, -2.5, 3.5, -3];

const services = [
  {
    title: 'Frontend Development',
    icon: <FaCode size={24} />,
    description:
    'I build modern, responsive, and high-performance web experiences that combine usability, accessibility, and performance. My focus is on creating intuitive and visually appealing interfaces that deliver seamless user experiences across desktop, tablet, and mobile devices.',
   },
  {
    title: 'Backend Development',
    icon: <FaServer size={24} />,
    description:
      'I build secure, reliable, and scalable backend systems that power modern web applications. From API development and authentication to database architecture and data management, I focus on clean code, smooth performance, and solutions designed to grow with evolving business needs.',
  },
 {
  title: 'UI/UX Design',
  icon: <FaPencilRuler size={24} />,
  description:
    'I craft user-focused digital experiences that combine visual elegance with practical functionality. Every interface is designed with attention to detail, ensuring seamless navigation, engaging interactions, and a consistent user experience across all platforms.',
},
  {
    title: 'Deployment',
    icon: <FaCloud size={24} />,
    description:
      'I manage end-to-end deployment workflows, including hosting, domain configuration, SSL setup, cloud services, and production environments. My focus is on delivering secure, stable, and optimized applications that ensure smooth performance and high availability.',
  },
  {
    title: 'Leadership & Teamwork',
    icon: <FaUsers size={24} />,
    description:
      'I thrive in collaborative environments where communication, accountability, and problem-solving drive success. By working closely with teams and stakeholders, taking ownership of project goals, and combining technical expertise with teamwork, I help transform ideas into high-quality digital solutions delivered on time.',
  },
];

export default function Services() {
  const [isDesktop, setIsDesktop] = useState(false);
  const servicesRef = useRef(null);
  const [visibleServices, setVisibleServices] = useState([]);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleServices([]);
          timeoutsRef.current.forEach(clearTimeout);

          services.forEach((_, index) => {
            const timeout = setTimeout(() => {
              setVisibleServices((prev) => [...prev, index]);
            }, index * 200);
            timeoutsRef.current.push(timeout);
          });
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = servicesRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentRef) observer.unobserve(currentRef);
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      ref={servicesRef}
      id="Services"
      className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 flex justify-center px-4"
    >
      <div className="w-full max-w-screen-xl bg-[#111827] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] px-6 py-12 md:p-12 md:pb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-24 text-center text-lightText tracking-wider">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-16 pt-6">
          {services.map((service, index) => {
            const theme = serviceThemes[index % serviceThemes.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: isDesktop ? tilts[index % tilts.length] : 0,
                }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ rotate: 0, scale: 1.04, y: isDesktop ? -10 : 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.15, delay: index * 0.08 }}
                className={`relative flex flex-col items-center justify-center text-center p-6 pt-12 pb-10 min-h-[400px] sm:min-h-[420px] lg:min-h-[460px] rounded-[28px] border bg-[#0b0c16]/75 backdrop-blur-md ${theme.border} ${theme.shadow} transition-all duration-300 ${
                  index % 2 === 0 ? "lg:mt-12" : "lg:mt-0"
                }`}
              >
                {/* Floating Circle Icon */}
                <div className={`absolute -top-7 w-14 h-14 rounded-full flex items-center justify-center border-[3px] bg-[#0e0f1a] ${theme.iconBorder} ${theme.textColor} shadow-lg z-20`}>
                  {service.icon}
                </div>

                {/* Title Badge */}
                <div className={`font-black text-[1rem] sm:text-[0.95rem] lg:text-[0.92rem] px-6 py-2 rounded-full border shadow-[0_4px_12px_rgba(0,0,0,0.15)] mb-6 z-10 select-none ${theme.badgeBg}`}>
                  {service.title}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-[0.98rem] sm:text-[0.95rem] lg:text-[0.86rem] leading-relaxed font-medium">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
