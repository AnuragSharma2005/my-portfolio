import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achievements = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const achievementItems = [
    {
      title: "Core Member (CEED)",
      description:
        "As a core member of the CEED Startup Club (Chitkara University), I help organize and execute events that promote innovation, entrepreneurship, and collaboration among students, fostering a dynamic platform for young entrepreneurs to thrive.",
      image: "/jazba.jpg",
    },
    {
      title: "Certifications and Milestones",
      description: (
        <div className="space-y-2">
          <div><strong>Hackathon - HackIndia 2025</strong></div>
          <div><strong>Hackathon - HackIndia 2024</strong></div>
          <div><strong>Hackathon - Hack-O-Octo</strong></div>
          <div><strong>PitchMasters:</strong></div>
          <div><strong>Workshop - IPR & Patent Filing:</strong></div>
          <div><strong>prize-Winner(IEEE Day)</strong></div>
        </div>
      ),
      image: "/certificates.jpg",
    },
    {
      title: "Unlocking the Future with AI – A Session by Dr. Ashok K. Chitkara",
      description:
        "Heartfelt thanks to Dr. Ashok K. Chitkara for an enlightening 3-day session on Artificial Intelligence.His insights sparked deep interest and broadened our perspective on AI’s real-world impact and future potential.",
      image: "/WhatsApp Image 2025-05-11 at 23.51.25_afbd6e5d.jpg",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white text-[#4B2E2E]">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-[#4B2E2E] mb-12">
            MY <span className="text-[#AF8362]">Achievements</span>
          </h2>

          <Slider {...settings}>
            {achievementItems.map((item, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#FAEBDD] rounded-3xl shadow-md p-6 h-[500px] flex flex-col items-center justify-start text-center border-2 border-transparent hover:border-[#AF8362] transition-all duration-300 overflow-hidden">
                  
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-52 h-52 object-cover rounded-full shadow-lg border-4 border-[#AF8362]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#4B2E2E] mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <div className="text-[#4B2E2E] text-sm leading-relaxed max-w-xs overflow-y-auto max-h-[180px] pr-2 scrollbar-thin scrollbar-thumb-[#AF8362]">
                    {item.description}
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
