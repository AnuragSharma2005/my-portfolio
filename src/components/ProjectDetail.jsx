import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaLink, FaHeart, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import BackgroundAnimations from "./BackgroundAnimations";
import Navbar from "./Navbar";
import Footer from "./Footer";

const skillColors = [
  { bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8" },
  { bg: "#f0fdf4", border: "#bbf7d0", text: "#15803d" },
  { bg: "#faf5ff", border: "#e9d5ff", text: "#7e22ce" },
  { bg: "#fffbeb", border: "#fde68a", text: "#b45309" },
  { bg: "#fef2f2", border: "#fecaca", text: "#b91c1c" },
  { bg: "#ecfeff", border: "#a5f3fc", text: "#0e7490" },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`like_project_${id}`) === "true";
  });
  const [showLikedToast, setShowLikedToast] = useState(false);

  const handleLike = async () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    localStorage.setItem(`like_project_${id}`, String(newLiked));
    
    if (newLiked) {
      setShowLikedToast(true);
      setTimeout(() => setShowLikedToast(false), 3000);
      
      try {
        await fetch("https://formsubmit.co/ajax/anuragwork2005@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            _subject: `New Portfolio Like! ❤️`,
            message: `Someone liked your project: "${project?.title}"`
          })
        });
      } catch (error) {
        console.error("Error sending like notification:", error);
      }
    }
  };

const getSkillIcon = (skill) => {
  const normalized = skill.toLowerCase();
  const simpleIcons = {
    'razorpay': 'razorpay',
    'godaddy': 'godaddy',
    'namecheap': 'namecheap',
    'cloudflare': 'cloudflare',
    'digitalocean': 'digitalocean',
    'jwt authentication': 'jsonwebtokens',
    'jwt auth': 'jsonwebtokens',
    'framer motion': 'framer',
    'apis': 'fastapi'
  };
  const iconMap = {
    'react.js': 'react', 'react': 'react',
    'node.js': 'nodejs', 'mongodb': 'mongodb',
    'express.js': 'express', 'tailwind css': 'tailwind',
    'html5': 'html', 'css3': 'css', 'css': 'css',
    'javascript': 'js', 'git': 'git', 'git/github': 'github',
    'github': 'github', 'vite': 'vite', 'figma': 'figma',
    'vercel': 'vercel', 'next.js': 'nextjs', 'google cloud': 'gcp'
  };
  if (iconMap[normalized]) {
    return `https://skillicons.dev/icons?i=${iconMap[normalized]}`;
  }
  if (simpleIcons[normalized]) {
    return `https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/${simpleIcons[normalized]}.svg`;
  }
  return null;
};

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl bg-[#0e0f1a]">
        Project not found.
      </div>
    );
  }

  const others = projectsData.filter((p) => p.id !== id);

  return (
    <div className="relative min-h-screen">
      <BackgroundAnimations />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <div className="relative w-full" style={{ height: "42vh", minHeight: "220px", maxHeight: "380px" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,25,47,0.3) 0%, rgba(10,25,47,0.1) 50%, rgba(10,25,47,1) 100%)" }} />
        <button
          onClick={() => navigate("/#projects")}
          className="absolute top-[110px] md:top-[80px] left-[20px] flex items-center gap-[6px] bg-black/50 backdrop-blur-md border border-white/15 text-white p-[8px_16px] rounded-[999px] text-[0.85rem] font-semibold cursor-pointer transition-all duration-200 hover:bg-black/70 hover:border-secondary/50"
        >
          <FaArrowLeft size={12} /> Back
        </button>
      </div>

      {/* ── MAIN CARD ── */}
      <div style={{ width: "96%", maxWidth: "1400px", margin: "0 auto", padding: "0 0 60px", position: "relative", zIndex: 10, marginTop: "-40px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-tertiary rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] text-lightText"
        >
          {/* ── TOP ROW: Responsive Layout ── */}
          <div className="flex flex-col md:flex-row p-5 md:p-8 items-start gap-4 md:gap-8">
            
            {/* Mobile Header: Circle Image + Title */}
            <div className="flex md:hidden flex-row items-center gap-4 w-full">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-1">
                <h1 className="text-[1.4rem] font-extrabold text-lightText leading-tight">
                  {project.title.includes(" – ") ? (
                    <>
                      <span className="block">{project.title.split(" – ")[0]}</span>
                      <span className="block text-[1.05rem] font-semibold text-secondary mt-1">{project.title.split(" – ")[1]}</span>
                    </>
                  ) : project.title.includes(" - ") ? (
                    <>
                      <span className="block">{project.title.split(" - ")[0]}</span>
                      <span className="block text-[1.05rem] font-semibold text-secondary mt-1">{project.title.split(" - ")[1]}</span>
                    </>
                  ) : (
                    project.title
                  )}
                </h1>
              </div>
            </div>

            {/* Mobile Actions + Subtitle */}
            <div className="flex md:hidden flex-col w-full gap-3 mt-1">
              <div className="flex items-center gap-3">
                <span className={`text-primary text-[0.8rem] font-bold px-4 py-1.5 rounded-full ${project.liveDemo ? 'bg-secondary' : 'bg-gray-400'}`}>
                  {project.liveDemo ? "Live ✓" : "In Progress"}
                </span>
                <button 
                  onClick={handleLike}
                  className={`border rounded-full w-9 h-9 flex items-center justify-center transition-all ${isLiked ? 'bg-red-500/20 border-red-500/40 text-red-500 scale-110' : 'bg-secondary/10 border-secondary/30 text-secondary hover:bg-secondary/20'}`}
                >
                  <FaHeart size={14} className={isLiked ? "fill-red-500 text-red-500" : ""} />
                </button>
              </div>
              <p className="text-lightestText text-[0.88rem]">{project.subtitle}</p>
            </div>

            {/* Desktop Left: Large Square Image */}
            <div className="hidden md:block relative w-[320px] min-w-[320px] h-[320px] rounded-[20px] overflow-hidden shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              {/* Featured badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent pt-7 pb-2.5 px-2.5 flex items-center gap-2">
                <img src={project.image} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-white shrink-0" />
                <div>
                  <div className="text-[#aaa] text-[0.6rem] font-bold tracking-[1px] uppercase">Featured</div>
                  <div className="text-white text-[0.7rem] font-bold leading-tight">{project.title}</div>
                </div>
              </div>
            </div>

            {/* Right: Info (Desktop layout + Stat boxes for both) */}
            <div className="flex-1 w-full flex flex-col md:pt-2">
              
              {/* Desktop Header row */}
              <div className="hidden md:flex items-center justify-end mb-2">
                <div className="flex gap-2 items-center">
                  <span className={`text-primary text-[0.75rem] font-bold px-3 py-1 rounded-full ${project.liveDemo ? 'bg-secondary' : 'bg-gray-400'}`}>
                    {project.liveDemo ? "Live ✓" : "In Progress"}
                  </span>
                  <button 
                    onClick={handleLike}
                    className={`border rounded-full w-8 h-8 flex items-center justify-center transition-all ${isLiked ? 'bg-red-500/20 border-red-500/40 text-red-500 scale-110' : 'bg-secondary/10 border-secondary/30 text-secondary hover:bg-secondary/20'}`}
                  >
                    <FaHeart size={13} className={isLiked ? "fill-red-500 text-red-500" : ""} />
                  </button>
                </div>
              </div>

              {/* Desktop Title & Subtitle */}
              <h1 className="hidden md:block text-[clamp(1.4rem,3vw,2rem)] font-extrabold text-lightText mb-1 leading-tight">
                {project.title}
              </h1>
              <p className="hidden md:block text-lightestText text-[0.95rem] mb-5">{project.subtitle}</p>

              {/* Stat boxes (2 uniform boxes) */}
              <div className="grid grid-cols-2 gap-3 mt-4 md:mt-0">
                {/* Box 1: Live Link */}
                <div className="border border-secondary/20 rounded-xl p-3 bg-primary/40">
                  <div className="text-secondary/80 text-[0.65rem] font-bold uppercase tracking-wider mb-1">Live Link</div>
                  <a href={project.liveDemo || "#"} target={project.liveDemo ? "_blank" : "_self"} rel="noopener noreferrer" className={`flex items-center gap-1.5 font-bold text-[0.9rem] no-underline transition-colors ${project.liveDemo ? "text-secondary hover:text-white" : "text-lightestText cursor-default"}`}>
                    <FaExternalLinkAlt size={12} /> {project.liveDemo ? "Open Site" : "N/A"}
                  </a>
                </div>

                {/* Box 2: View Code */}
                <div className="border border-secondary/20 rounded-xl p-3 bg-primary/40">
                  <div className="text-secondary/80 text-[0.65rem] font-bold uppercase tracking-wider mb-1">Source Code</div>
                  <a href={project.github || "#"} target={project.github ? "_blank" : "_self"} rel="noopener noreferrer" className={`flex items-center gap-1.5 font-bold text-[0.9rem] no-underline transition-colors ${project.github ? "text-lightText hover:text-secondary" : "text-lightestText cursor-default"}`}>
                    <FaGithub size={14} /> {project.github ? "View Code" : "N/A"}
                  </a>
                </div>
              </div>

              {/* Desktop Tech Stack (only visible on desktop under the buttons) */}
              <div className="hidden md:block mt-5">
                <h3 className="font-extrabold text-[0.9rem] text-secondary tracking-wider uppercase mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.skills?.map((skill, i) => {
                    const iconUrl = getSkillIcon(skill);
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 * i }}
                        className="flex flex-col items-center justify-center gap-1 bg-primary/45 border border-secondary/15 rounded-xl p-1.5 min-w-[66px] shadow-sm hover:border-secondary/45 transition-colors"
                      >
                        {iconUrl ? (
                          <img 
                            src={iconUrl} 
                            alt={skill} 
                            className={`w-7 h-7 object-contain drop-shadow-md ${iconUrl.includes('simple-icons') ? 'filter invert brightness-200' : ''}`} 
                          />
                        ) : (
                          <div className="w-7 h-7 bg-primary text-secondary rounded-md flex items-center justify-center font-bold text-sm border border-secondary/15">
                            {skill.charAt(0)}
                          </div>
                        )}
                        <span className="text-[0.6rem] font-bold text-lightText text-center tracking-wide leading-tight">{skill}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>



          <div className="h-[1px] bg-secondary/10 mx-5 my-0 md:hidden" />

          {/* Skills (Mobile only) */}
          <div className="p-5 md:hidden">
            <h3 className="font-extrabold text-[1.1rem] text-lightText mb-4">Tech Stack & Skills</h3>
            <div className="grid grid-cols-4 gap-2">
              {project.skills?.map((skill, i) => {
                const iconUrl = getSkillIcon(skill);
                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="flex flex-col items-center justify-center gap-1.5 bg-primary/40 border border-secondary/20 rounded-xl p-2 shadow-sm hover:border-secondary/50 transition-colors"
                  >
                    {iconUrl ? (
                      <img 
                        src={iconUrl} 
                        alt={skill} 
                        className={`w-7 h-7 object-contain drop-shadow-md ${iconUrl.includes('simple-icons') ? 'filter invert brightness-200' : ''}`} 
                      />
                    ) : (
                      <div className="w-7 h-7 bg-primary text-secondary rounded-md flex items-center justify-center font-bold text-sm border border-secondary/20">
                        {skill.charAt(0)}
                      </div>
                    )}
                    <span className="text-[0.6rem] font-bold text-lightText text-center tracking-wide leading-tight">{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="h-[1px] bg-secondary/10 mx-5 my-0" />

          {/* About */}
          <div className="p-5 pb-6">
            <h3 className="font-extrabold text-[1.1rem] text-lightText mb-3">About this project</h3>
            <p className="text-lightestText text-[0.92rem] leading-relaxed">{project.about}</p>
          </div>
        </motion.div>

        {/* Other Projects */}
        {others.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lightText font-bold text-[1.1rem] mb-4 text-center">More Projects</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[14px]">
              {others.map((p, i) => (
                <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i }}
                  whileHover={{ y: -5, scale: 1.03 }} onClick={() => navigate(`/project/${p.id}`)}
                  className="bg-tertiary rounded-[14px] overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-secondary/10 hover:border-secondary/30 transition-colors"
                >
                  <div className="relative h-[110px]">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-[10px_12px]">
                    <p className="text-lightText font-bold text-[0.85rem] m-0 group-hover:text-secondary transition-colors">{p.title}</p>
                    <p className="text-lightestText text-[0.72rem] m-[2px_0_0]">{p.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showLikedToast && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 bg-[#1e293b] border border-red-500/30 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5"
        >
          <span className="text-red-500 text-lg">❤️</span>
          <span className="text-sm font-semibold">Thank you for liking "{project?.title}"!</span>
        </motion.div>
      )}

      <div className="mt-16 border-t border-secondary/10">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
