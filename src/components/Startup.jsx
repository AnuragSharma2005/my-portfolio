"use client"

import { useState, useEffect } from "react"

export default function Startup() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const startups = [
    {
      id: 1,
      name: "Moksh Digital",
      logo: "/moksh-logo.png",
      description:
        "At Moksh Digital, we build modern websites and mobile applications for a wide range of businesses, with a special focus on schools and educational institutes. Our solutions are designed to simplify communication, enhance student–teacher engagement, and bring efficiency to daily operations. Along with education, we also deliver customized digital platforms for startups and businesses, ensuring every project creates real impact and lasting value.",
      role: "CMO",
      year: "August 2025 - Present",
      status: "Active",
      metrics: "50K+ users, $2M ARR",
      tags: ["Websites", "Mobile Apps", "Education", "Startups"],
    },
  ]

  return (
    <section
      id="startup"
      className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 flex justify-center px-4 relative overflow-hidden"
    >
      {/* Floating dots background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower circle */}
      <div
        className="fixed w-6 h-6 bg-accent/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${activeCard ? 1.5 : 1})`,
        }}
      />

      {/* Main Box */}
      <div className="w-full max-w-screen-xl bg-[#111827] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-8 md:p-12 relative z-10">
        {/* Header Section */}
        <div className={`mb-16 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            {/* Profile Photo */}
           <div className="relative order-2 md:order-1">
            {/* Main Photo */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent to-accent/60 p-1 animate-float">
              <img
                src="/WhatsApp Image 2025-07-11 at 16.48.05_9af23cbe.jpg"
                alt="Portfolio Photo"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Pulse Dot */}
            <div className="absolute -bottom-3 -right-3 w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center animate-pulse">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-accent-foreground rounded-full"></div>
            </div>

            {/* White Spinning Circle (bada size) */}
            <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 border-2 border-accent/30 rounded-full animate-spin-slow"></div>
          </div>


            {/* Header Text */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h1 className="text-4xl md:text-4xl font-bold">
                Startup Journey{" "}
                {/* <span className="text-muted-foreground text-base md:text-lg font-normal">
                  – Innovating education and business, one app at a time.
                </span> */}
              </h1>
            </div>
          </div>

          {/* Decorative Lines */}
          <div className="relative">
            <div className="h-px bg-border w-full"></div>
            <div className="absolute top-0 left-0 h-px bg-accent w-1/3 animate-shimmer"></div>
            <div
              className="absolute top-0 right-0 h-px bg-accent/60 w-1/4 animate-shimmer"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Startup Cards */}
        <div className="grid gap-8">
          {startups.map((startup, index) => (
            <div
              key={startup.id}
              className={`group relative ${isVisible ? "animate-fade-in-scale" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveCard(startup.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card */}
              <div className="relative bg-card border border-border rounded-xl p-8 transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:scale-[1.02]">
                {/* Status */}
                <div className="absolute top-6 right-6">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110 ${
                      startup.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : startup.status === "Acquired"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {startup.status}
                    <span className="ml-2 inline-block w-2 h-2 rounded-full bg-current animate-pulse"></span>
                  </div>
                </div>

                {/* Top Row */}
                <div className="grid gap-8 md:grid-cols-3 items-start relative z-10">
                  {/* Left */}
                  <div className="space-y-4 text-center md:text-left">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {startup.name}
                      </h3>
                      <p className="text-accent font-medium">{startup.role}</p>
                      <p className="text-muted-foreground text-sm">{startup.year}</p>

                      {/* Link under year */}
                      <a
                        href="https://mokshdigital.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2 text-accent font-mono text-sm hover:underline"
                      >
                        mokshdigital.app
                      </a>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {startup.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white text-black text-xs rounded-md hover:bg-accent/20 hover:text-accent transition-all duration-300 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle Column hidden on mobile */}
                  <div className="hidden md:block"></div>

                  {/* Right */}
                  <div className="flex justify-center mt-6 md:mt-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32">
                      <div
                        className={`absolute inset-0 rounded-full bg-accent/10 transition-all duration-500 ${
                          activeCard === startup.id ? "scale-110 bg-accent/20" : ""
                        }`}
                      ></div>
                      <div className="absolute inset-2 border border-accent/20 rounded-full animate-spin-slow"></div>
                      <div className="absolute inset-1 border border-accent/10 rounded-full animate-spin-reverse"></div>
                      <div className="absolute inset-4 rounded-full bg-accent/20 flex items-center justify-center transition-all duration-300 group-hover:bg-accent/30">
                        <div className="text-accent font-bold text-xl">
                          {startup.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paragraph */}
                <div className="mt-8 text-center">
                  <p className="text-card-foreground leading-relaxed max-w-3xl mx-auto">
                    {startup.description}
                  </p>
                </div>

                {/* Line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-border group-hover:bg-accent/30 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
