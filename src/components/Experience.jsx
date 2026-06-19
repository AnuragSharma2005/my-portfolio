"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

const experiences = [
  {
    id: "deepika-chawla",
    title: "Deepika Chawla – Portfolio",
    category: "Full-Stack Web Developer (Client Project)",
    description: [
      "Developed a modern and professional portfolio website for a corporate trainer, motivational speaker, and event anchor.",
      "Designed a fully responsive user interface ensuring seamless experience across desktop, tablet, and mobile devices.",
      "Implemented smooth animations and interactive transitions using Framer Motion to enhance user engagement.",
      "Created well-structured sections including About, Services, Achievements, Testimonials, Gallery, and Contact.",
      "Integrated contact and inquiry forms with Google Sheets for efficient lead collection and management.",
      "Configured custom domain integration, hosting setup, SSL certification, and production deployment.",
      "Ensured clean code architecture, maintainability, and scalability for future content and feature updates.",
    ],
    technologies: ["React", "Framer Motion", "Google Sheets", "Vercel", "Tailwind CSS", "Git/GitHub","Namecheap",],
    github: "https://github.com/AnuragSharma2005/freelancing",
    liveDemo: "https://deepikashine.com/",
    image: "/Exp1logo.png",
  },
 {
  id: "zaika-recipes",
  title: "Zaika Recipes – Recipe Box",
  category: "Full-Stack Web Developer (Client Project)",
  description: [
    "Developed a full-stack recipe sharing platform that enables creators to publish, manage, and promote cooking content through dedicated recipe pages.",
    "Built a scalable React.js frontend with responsive UI optimized for desktop, tablet, and mobile devices.",
    "Implemented secure JWT-based authentication and authorization for Admin, Creator, and Viewer roles.",
    "Implemented complete recipe management features including ingredients, quantity measurements, cooking instructions and recipe images",
 "Integrated social engagement features such as likes, comments, ratings, recipe sharing, saved recipes, and creator follow system.",
    "Developed a dedicated Admin Panel for user management, creator monitoring, recipe moderation, reports handling, and platform administration.",
    "Created a Creator Dashboard enabling recipe publishing, content management, media uploads, audience interaction, and profile customization.",
    "Built a Viewer experience with authentication, creator following, recipe bookmarking, ratings, comments, and social sharing capabilities.",
    "Integrated Cloudinary for optimized image and video storage and delivery.",
    "Configured domain setup, hosting, deployment pipeline, and production environment for reliable performance.",
    "Implemented scalable backend architecture and clean code practices to support future platform growth."
  ],
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Cloudinary", "DigitalOcean", "Vercel", "Name.com", "Git/GitHub"],
  liveDemo: "https://www.zaikarecipes.app/",
  image: "/Exp3logo.png",
},
  {
    id: "blueberry-school",
    title: "Blueberry Fields School",
    category: "Full-Stack Web Developer (Client Project)",
    description: [
      "Developed a modern and responsive school website to enhance the institution's digital presence and improve communication with parents, students, and prospective admissions.",
      "Designed a clean and user-friendly interface optimized for desktop, tablet, and mobile devices.",
      "Created dedicated sections for Academics, Admissions, Facilities, Gallery, Events, Announcements, and Contact Information.",
      "Integrated Admission Inquiry, Contact, and Feedback forms with Google Sheets using Google Apps Script for automated data collection and management.",
      "Developed a custom Admin Panel to manage and monitor inquiries, contact requests, and feedback submissions from a centralized dashboard.",
      "Implemented gallery management functionality allowing administrators to upload and display school event and activity images dynamically.",
      "Configured real-time data flow between the website, Google Sheets, and Admin Panel without requiring a traditional database.",
      "Configured custom domain integration, hosting setup, SSL certification, and production deployment.",
      "Ensured scalable and maintainable code architecture for future content updates and feature enhancements.",
      "Successfully delivered a complete digital solution combining a public-facing website with an administrative management system."
    ],
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel", "Git/GitHub", "Cloudinary", "Admin Panel","cloudflare"],
      github: "https://github.com/adityasharma0903/blueberry-fields",
      liveDemo: "https://blueberryfieldsschool.com/",
      image: "/blueberry.jpg",
    },
    {
      id: "livique",
      title: "Livique – E-Commerce Platform",
      category: "Full-Stack Web Developer (Client Project)",
  description: [
    "Developed a full-stack e-commerce platform for Home Décor, Beauty, and Gift products with seamless shopping and admin management features.",
    "Built a modern and responsive user interface optimized for desktop, tablet, and mobile devices.",
    "Implemented dynamic product management with category-based browsing, advanced filtering, search functionality, and detailed product pages.",
    "Developed secure user authentication and authorization with role-based access control for customers, vendors, and administrators.",
    "Created a complete shopping workflow including cart management, checkout process, order tracking, and user account management.",
    "Integrated Razorpay payment gateway for secure online transactions and streamlined checkout experience.",
    "Implemented Cloudinary-based image storage, optimization, and delivery for efficient product media management.",
    "Built an Admin Dashboard for managing products, categories, orders, customers, vendors, and platform content.",
    "Implemented vendor management features enabling sellers to manage inventory, products, and order-related activities.",
    "Designed scalable backend APIs and database architecture to support future growth and feature expansion.",
    "Optimized application performance, security, and responsiveness to ensure a reliable user experience.",
    "Configured hosting, deployment, and production environment setup for smooth application delivery.",
    "Ensured clean code architecture, maintainability, and cross-browser compatibility across modern web platforms."
  ],
technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Cloudinary", "Razorpay", "GoDaddy", "Google Cloud", "APIs"],
github: "https://github.com/Moksh-Digital/Livique",
liveDemo: "https://www.livique.co.in/",
    image: "/image-5.png",
  },
]

export { experiences }

const Experience = () => {
  const navigate = useNavigate()

  return (
    <div id="Experience">
      <section className="py-20 bg-gradient-to-r from-blue-800/20 to-indigo-800/20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-[#020617] rounded-3xl px-6 md:px-10 py-14 shadow-2xl shadow-cyan-500/20">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.h2>
          <p className="text-center text-gray-400 mb-12 text-base">
            Click on any project to explore the full details
          </p>

          {/* Grid — only image + name + button */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:shadow-cyan-500/30 hover:border-cyan-500/30 transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => navigate(`/experience/${exp.id}`)}
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                </div>

                {/* Name */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <h3 className="text-base font-bold text-white leading-snug">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-cyan-400 font-medium">
                    {exp.category}
                  </span>

                  {/* Click for more button */}
                  <div className="mt-auto pt-2">
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200 group/btn"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        navigate(`/experience/${exp.id}`)
                      }}
                    >
                      Click for more
                      <FaArrowRight size={11} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experience
