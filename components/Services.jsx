"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import floraimg from "../public/images/90FLORA.svg";

const Services = ({ id }) => {
  const services = [
    {
      number: "01",
      title: "Consultation & Concept",
      description: "We begin with understanding your theme, colors, culture, and venue. Your vision becomes our inspiration."
    },
    {
      number: "02",
      title: "Mood-boarding & Styling",
      description: "Our designers create moodboards and floral palettes tailored to your story, tone, and style."
    },
    {
      number: "03",
      title: "Custom Floral Planning",
      description: "From settee backs to aisle petals, every floral component is thoughtfully mapped and priced transparently."
    },
    {
      number: "04",
      title: "Flower Sourcing",
      description: "We handpick blooms from trusted local & global growers to ensure premium freshness and sustainability."
    },
    {
      number: "05",
      title: "Assembly & Installation",
      description: "Our expert team brings the vision to life on-site—on time, with utmost care and precision."
    },
    {
      number: "06",
      title: "On-Day Floral Management",
      description: "We stay with you to manage floral changes, bouquet touch-ups, and maintain freshness throughout the event."
    }
  ];

  return (
    <div id={id} className="relative w-full py-10 overflow-hidden md:py-20 servicetexture">
      {/* Background image */}
      <div className="absolute top-0 w-full h-full left-[85%] hidden md:block">
        <div className="relative w-full h-full">
          <Image 
            src={floraimg} 
            alt="floraimge" 
            className="object-contain w-auto h-full"
            style={{ maxHeight: "1000px" }}
          />
        </div>
      </div>
      
      <div className="relative w-[90%] md:w-[75%] h-full mx-auto z-10">
        <div className="text-center text-[#0D281A] mb-8 md:mb-0">
          <h4 className="text-[18px] md:text-[24px] px-4 md:px-0">
            Crafted with <span className="font-bold">Care</span>. Designed with{" "}
            <span className="font-bold">Detail</span>. Delivered with{" "}
            <span className="font-bold">Love</span>.
          </h4>
          <p className="text-[14px] md:text-[16px] mt-2 md:mt-0">
            From the first meeting to the final petal, 90Flora ensures your
            floral dream becomes a flawless reality. Here's how we do it
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className={`flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5 ${index === 0 ? 'mt-6 md:mt-10' : 'mt-6 md:-mt-2'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1
              }}
            >
              <div className="newYork text-[48px] md:text-[84px] text-[#909C96] md:flex-[1]">
                {service.number}
              </div>
              <div className="text-[#0D281A] md:flex-[7]">
                <h2 className="text-[18px] md:text-[24px]">{service.title}</h2>
                <div className="text-[14px] md:text-[16px]">
                  {service.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;