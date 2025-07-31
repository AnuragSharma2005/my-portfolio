"use client";

import { useRef, useState, useEffect } from "react";
import {
  Code,
  Globe,
  Zap,
  Layers,
  GitBranch,
  Monitor,
  Database,
  Palette,
} from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code, color: "from-yellow-400 to-orange-500" },
  { name: "React", icon: Globe, color: "from-blue-400 to-cyan-500" },
  { name: "Css", icon: Palette, color: "from-gray-700 to-gray-900" },
  { name: "Node.js", icon: Zap, color: "from-green-400 to-emerald-500" },
  { name: "HTML", icon: Code, color: "from-blue-600 to-indigo-700" },
  { name: "MongoDB", icon: Database, color: "from-green-500 to-teal-600" },
  { name: "C/C++", icon: Database, color: "from-blue-500 to-purple-600" },
  { name: "Tailwind CSS", icon: Palette, color: "from-cyan-400 to-blue-500" },
  { name: "Express.js", icon: Layers, color: "from-gray-600 to-gray-800" },
  { name: "Git & GitHub", icon: GitBranch, color: "from-orange-500 to-red-500" },
  { name: "Python", icon: Code, color: "from-blue-500 to-yellow-500" },
  { name: "Java", icon: Globe, color: "from-green-400 to-green-600" },
];

export default function SkillsAnimated() {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleSkills([]);
          timeoutsRef.current.forEach(clearTimeout); // Clear any old timeouts

          skills.forEach((_, index) => {
            const timeout = setTimeout(() => {
              setVisibleSkills((prev) => [...prev, index]);
            }, index * 200);
            timeoutsRef.current.push(timeout);
          });
        }
      },
      { threshold: 0.3 }
    );

    const ref = skillsRef.current;
    if (ref) observer.observe(ref);

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="py-20 min-h-screen bg-gradient-to-r from-blue-800/20 to-indigo-800/20 text-white flex justify-center items-center px-4"
    >
      <div className="w-full max-w-7xl rounded-3xl bg-[#111827] shadow-2xl shadow-blue-500/20 mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 cursor-hover p-6 ">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`transform transition duration-500 ease-in-out ${
                visibleSkills.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center hover:scale-105 hover:border-white/20 transition-all duration-300 cursor-pointer">
                <div
                  className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <p className="font-medium text-white text-sm">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
