"use client";

import { useRef, useState, useEffect } from "react";
import { FaCode, FaServer, FaPencilRuler, FaUsers } from "react-icons/fa";

const services = [
  {
    title: 'Frontend Development',
    icon: <FaCode size={24} />,
    description:
      'I specialize in building clean, responsive, and high-performance user interfaces using React, Next.js, and Tailwind CSS. Every interaction I craft is focused on speed, accessibility, and seamless UX.',
  },
  {
    title: 'Backend Development',
    icon: <FaServer size={24} />,
    description:
      'From RESTful APIs to real-time integrations, I develop secure and scalable backend systems using Node.js, Express, and MongoDB. My focus is always on reliability, structure, and future-proof code.',
  },
 {
  title: 'UI/UX Design',
  icon: <FaPencilRuler size={24} />,
  description:
    'With a strong eye for detail, I design user-friendly interfaces that are both intuitive, visually appealing, and well-structured. I combine aesthetics with usability to create clean, responsive designs that truly connect with users.',
},
  {
    title: 'Leadership & Teamwork',
    icon: <FaUsers size={24} />,
    description:
      'I bring energy and clarity to every team I work with—communicating clearly, managing deadlines, and driving collaboration. My goal is always a successful product, built together.',
  },
];

export default function Services() {
  const servicesRef = useRef(null);
  const [visibleServices, setVisibleServices] = useState([]);
  const timeoutsRef = useRef([]);

  useEffect(() => {
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
      { threshold: 0.3 }
    );

    const currentRef = servicesRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      ref={servicesRef}
      id="about"
      className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 flex justify-center px-4 cursor-pointer"
    >
      <div className="w-full max-w-screen-xl bg-[#111827] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-8 md:p-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-blue-400">
          What I Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition duration-700 ease-out transform ${
                visibleServices.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-[#0F172A] rounded-xl p-6 flex flex-col items-center text-center border border-white/10 hover:border-white/20 hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300">
                <div className="bg-[#1E293B] p-3 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
