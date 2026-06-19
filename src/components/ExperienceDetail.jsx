import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { experiences } from "./Experience"
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaLink, FaHeart, FaMapMarkerAlt, FaRegClock } from "react-icons/fa"
import BackgroundAnimations from "./BackgroundAnimations"
import Navbar from "./Navbar"
import Footer from "./Footer"

const ExperienceDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const exp = experiences.find((e) => e.id === id)

  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`like_exp_${id}`) === "true";
  });
  const [showLikedToast, setShowLikedToast] = useState(false);

  const handleLike = async () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    localStorage.setItem(`like_exp_${id}`, String(newLiked));
    
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
            message: `Someone liked your experience: "${exp?.title}"`
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

  if (!exp) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl bg-[#0e0f1a]">
        Experience not found.
      </div>
    )
  }

  const others = experiences.filter((e) => e.id !== id)

  const skillColors = [
    { bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8" },
    { bg: "#f0fdf4", border: "#bbf7d0", text: "#15803d" },
    { bg: "#faf5ff", border: "#e9d5ff", text: "#7e22ce" },
    { bg: "#fffbeb", border: "#fde68a", text: "#b45309" },
    { bg: "#fef2f2", border: "#fecaca", text: "#b91c1c" },
    { bg: "#ecfeff", border: "#a5f3fc", text: "#0e7490" },
  ]

  return (
    <div className="relative min-h-screen">
      <BackgroundAnimations />
      <Navbar />

      {/* ── HERO BANNER ── */}
      <div className="relative w-full" style={{ height: "42vh", minHeight: "220px", maxHeight: "380px" }}>
        <img
          src={exp.image}
          alt={exp.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,25,47,0.3) 0%, rgba(10,25,47,0.1) 50%, rgba(10,25,47,1) 100%)" }} />
        {/* Back button */}
        <button
          onClick={() => navigate("/#Experience")}
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
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col flex-1">
                <h1 className="text-[1.4rem] font-extrabold text-lightText leading-tight">
                  {exp.title.includes(" – ") ? (
                    <>
                      <span className="block">{exp.title.split(" – ")[0]}</span>
                      <span className="block text-[1.05rem] font-semibold text-secondary mt-1">{exp.title.split(" – ")[1]}</span>
                    </>
                  ) : exp.title.includes(" - ") ? (
                    <>
                      <span className="block">{exp.title.split(" - ")[0]}</span>
                      <span className="block text-[1.05rem] font-semibold text-secondary mt-1">{exp.title.split(" - ")[1]}</span>
                    </>
                  ) : (
                    exp.title
                  )}
                </h1>
              </div>
            </div>

            {/* Mobile Actions + Subtitle */}
            <div className="flex md:hidden flex-col w-full gap-3 mt-1">
              <div className="flex items-center gap-3">
                <span className={`text-primary text-[0.8rem] font-bold px-4 py-1.5 rounded-full ${exp.liveDemo ? 'bg-secondary' : 'bg-gray-400'}`}>
                  {exp.liveDemo ? "Live ✓" : "In Progress"}
                </span>
                <button 
                  onClick={handleLike}
                  className={`border rounded-full w-9 h-9 flex items-center justify-center transition-all ${isLiked ? 'bg-red-500/20 border-red-500/40 text-red-500 scale-110' : 'bg-secondary/10 border-secondary/30 text-secondary hover:bg-secondary/20'}`}
                >
                  <FaHeart size={14} className={isLiked ? "fill-red-500 text-red-500" : ""} />
                </button>
              </div>
              <p className="text-lightestText text-[0.88rem]">{exp.category}</p>
            </div>

            {/* Desktop Left: Large Square Image */}
            <div className="hidden md:block relative w-[320px] min-w-[320px] h-[320px] rounded-[20px] overflow-hidden shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover" />
              {/* Featured badge */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent pt-7 pb-2.5 px-2.5 flex items-center gap-2">
                <img src={exp.image} alt="" className="w-8 h-8 rounded-full object-cover border-2 border-white shrink-0" />
                <div>
                  <div className="text-white text-[0.7rem] font-bold leading-tight">{exp.title}</div>
                </div>
              </div>
            </div>

            {/* Right: Info (Desktop layout + Stat boxes for both) */}
            <div className="flex-1 w-full flex flex-col md:pt-2">
              
              {/* Desktop Header row */}
              <div className="hidden md:flex items-center justify-end mb-2">
                <div className="flex gap-2 items-center">
                  <span className={`text-primary text-[0.75rem] font-bold px-3 py-1 rounded-full ${exp.liveDemo ? 'bg-secondary' : 'bg-gray-400'}`}>
                    {exp.liveDemo ? "Live ✓" : "In Progress"}
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
                {exp.title}
              </h1>
              <p className="hidden md:block text-lightestText text-[0.95rem] mb-5">{exp.category}</p>

              {/* Stat boxes (2 uniform boxes) */}
              <div className="grid grid-cols-2 gap-3 mt-4 md:mt-0">
                {/* Box 1: Live Link */}
                <div className="border border-secondary/20 rounded-xl p-3 bg-primary/40">
                  <div className="text-secondary/80 text-[0.65rem] font-bold uppercase tracking-wider mb-1">Live Link</div>
                  <a href={exp.liveDemo || "#"} target={exp.liveDemo ? "_blank" : "_self"} rel="noopener noreferrer" className={`flex items-center gap-1.5 font-bold text-[0.9rem] no-underline transition-colors ${exp.liveDemo ? "text-secondary hover:text-white" : "text-lightestText cursor-default"}`}>
                    <FaExternalLinkAlt size={12} /> {exp.liveDemo ? "Open Site" : "N/A"}
                  </a>
                </div>

                {/* Box 2: View Code */}
                <div className="border border-secondary/20 rounded-xl p-3 bg-primary/40">
                  <div className="text-secondary/80 text-[0.65rem] font-bold uppercase tracking-wider mb-1">Source Code</div>
                  <a href={exp.github || "#"} target={exp.github ? "_blank" : "_self"} rel="noopener noreferrer" className={`flex items-center gap-1.5 font-bold text-[0.9rem] no-underline transition-colors ${exp.github ? "text-lightText hover:text-secondary" : "text-lightestText cursor-default"}`}>
                    <FaGithub size={14} /> {exp.github ? "View Code" : "N/A"}
                  </a>
                </div>
              </div>

              {/* Desktop Tech Stack (only visible on desktop under the buttons) */}
              <div className="hidden md:block mt-5">
                <h3 className="font-extrabold text-[0.9rem] text-secondary tracking-wider uppercase mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                  {exp.technologies?.map((tech, i) => {
                    const iconUrl = getSkillIcon(tech);
                    return (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 * i }}
                        className="flex flex-col items-center justify-center gap-1 bg-primary/45 border border-secondary/15 rounded-xl p-1.5 min-w-[66px] shadow-sm hover:border-secondary/45 transition-colors"
                      >
                        {iconUrl ? (
                          <img 
                            src={iconUrl} 
                            alt={tech} 
                            className={`w-7 h-7 object-contain drop-shadow-md ${iconUrl.includes('simple-icons') ? 'filter invert brightness-200' : ''}`} 
                          />
                        ) : (
                          <div className="w-7 h-7 bg-primary text-secondary rounded-md flex items-center justify-center font-bold text-sm border border-secondary/15">
                            {tech.charAt(0)}
                          </div>
                        )}
                        <span className="text-[0.6rem] font-bold text-lightText text-center tracking-wide leading-tight">{tech}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>



          <div className="h-[1px] bg-secondary/10 mx-5 my-0 md:hidden" />

          {/* Skills Used (Mobile only) */}
          <div className="p-5 md:hidden">
            <h3 className="font-extrabold text-[1.1rem] text-lightText mb-4">Tech Stack & Skills</h3>
            <div className="grid grid-cols-4 gap-2">
              {exp.technologies?.map((tech, i) => {
                const iconUrl = getSkillIcon(tech);
                return (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="flex flex-col items-center justify-center gap-1.5 bg-primary/40 border border-secondary/20 rounded-xl p-2 shadow-sm hover:border-secondary/50 transition-colors"
                  >
                    {iconUrl ? (
                      <img 
                        src={iconUrl} 
                        alt={tech} 
                        className={`w-7 h-7 object-contain drop-shadow-md ${iconUrl.includes('simple-icons') ? 'filter invert brightness-200' : ''}`} 
                      />
                    ) : (
                      <div className="w-7 h-7 bg-primary text-secondary rounded-md flex items-center justify-center font-bold text-sm border border-secondary/20">
                        {tech.charAt(0)}
                      </div>
                    )}
                    <span className="text-[0.6rem] font-bold text-lightText text-center tracking-wide leading-tight">{tech}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="h-[1px] bg-secondary/10 mx-5 my-0" />

          <div className="p-5 pb-6">
            <h3 className="font-extrabold text-[1.1rem] text-lightText mb-4">About this project</h3>
            {Array.isArray(exp.description) ? (
              <ul className="list-disc pl-5 space-y-2.5 text-lightestText text-[0.92rem] leading-relaxed">
                {exp.description.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="pl-1 marker:text-secondary hover:text-white transition-colors duration-200"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="text-lightestText text-[0.92rem] leading-relaxed">{exp.description}</p>
            )}
          </div>
        </motion.div>

        {/* ── Other Experiences ── */}
        {/* {others.length > 0 && (
          <div style={{ marginTop: "40px" }}>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "16px", textAlign: "center" }}>More Work Experience</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "14px" }}>
              {others.map((e, i) => (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  onClick={() => navigate(`/experience/${e.id}`)}
                  style={{ background: "#fff", borderRadius: "14px", overflow: "hidden", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
                >
                  <div style={{ position: "relative", height: "110px" }}>
                    <img src={e.image} alt={e.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
                  </div>
                  <div style={{ padding: "10px 12px" }}>
                    <p style={{ color: "#111", fontWeight: 700, fontSize: "0.82rem", margin: 0 }}>{e.title}</p>
                    <p style={{ color: "#6b7280", fontSize: "0.7rem", margin: "2px 0 0" }}>{e.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )} */}
      </div>

      {showLikedToast && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 bg-[#1e293b] border border-red-500/30 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5"
        >
          <span className="text-red-500 text-lg">❤️</span>
          <span className="text-sm font-semibold">Thank you for liking "{exp?.title}"!</span>
        </motion.div>
      )}

      <div className="mt-16 border-t border-secondary/10">
        <Footer />
      </div>
    </div>
  )
}

export default ExperienceDetail
