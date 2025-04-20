import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achievements = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // Show 3 cards at once
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
      image: "/my-portfolio/jazba.jpg",
    },
    {
      title: "Certifications and Milestones",
      description: (
        <div>
          <ul className="list-disc ml-4">
            <li><strong>Hackathon - HackIndia 2024:</strong></li>
            <li><strong>Hackathon - Hack-O-Octo:</strong> </li>
            <li><strong>PitchMasters:</strong></li>
            <li><strong>Workshop - "IPR & Patent Filing":</strong></li>
          </ul>
        </div>
      ),
      image: "/my-portfolio/certificates.jpg",
    },
    {
      title: "Prize Winner – IEEE Day Treasure Hunt",
      description:
        "I was awarded a prize in the Treasure Hunt competition during the IEEE Day event organized by IEEE. This achievement highlights my strong problem-solving abilities, quick thinking, and effective teamwork.",
      image: "/my-portfolio/IEEE.jpg",
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
                <div className="bg-[#FAEBDD] rounded-3xl shadow-md p-6 text-center transition-all duration-300 h-[500px] flex flex-col items-center justify-start border-2 border-transparent hover:border-[#AF8362] focus-within:border-[#AF8362] active:border-[#AF8362]">
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-52 h-52 object-cover rounded-full shadow-lg border-4 border-[#AF8362]"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4B2E2E] mb-4">
                    {item.title}
                  </h3>
                  <div className="text-[#4B2E2E] text-sm flex-grow">
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
