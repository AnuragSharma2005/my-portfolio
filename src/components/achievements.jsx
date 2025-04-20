import Slider from "react-slick";
import { motion } from "framer-motion";
import { achievementsData } from "../data/mockData"; // yaha data array hona chahiye

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Achievements = () => {
  const settings = {
    dots: false,
    infinite: true,   
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, 
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <section id="achievements" className="py-20 bg-white text-[#4B2E2E]">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
<h2 className="text-5xl font-bold text-center text-[#4B2E2E] mb-8">
                MY <span className="text-[#AF8362]">Achievements</span>
              </h2>
          <Slider {...settings}>
            {achievementsData.map((item, index) => (
              <div key={index} className="px-4">
                <div className="bg-[#4B2E2E] rounded-xl shadow-md p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white">{item.description}</p>
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
