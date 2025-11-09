"use client";
import { motion } from "framer-motion";

const Footer = () => {
  const footerItems = [
    { label: "SERVICES" },
    { label: "MY WORKS" },
    { label: "REVIEWS" },
    { label: "ABOUT US" },
    { label: "CONTACT US" }
  ];

  return (
    <motion.div 
      className="w-full h-auto min-h-[50vh] md:h-[50vh] footertexture py-10 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col justify-center text-center text-[#E7EAE8] items-center gap-8 md:gap-12">
        {/* Logo Section */}
        <motion.div 
          className="newYork"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[36px] sm:text-[42px] md:text-[50px]">90Flora</h1>
          <motion.h4 
            className="text-[14px] sm:text-[16px] md:text-[18px] -mt-2 md:-mt-3 tracking-widest px-4"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Wedding Decoration & Event Planner
          </motion.h4>
        </motion.div>

        {/* Navigation and Description */}
        <motion.div 
          className="flex flex-col items-center justify-center w-full max-w-6xl gap-4 md:gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          <motion.div className="flex flex-wrap justify-center text-[12px] sm:text-[14px] gap-4 sm:gap-6 md:gap-10 px-4">
            {footerItems.map((item, index) => (
              <motion.h6
                key={item.label}
                className="whitespace-nowrap"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {item.label}
              </motion.h6>
            ))}
          </motion.div>
          
          <motion.div
            className="w-full max-w-2xl px-4 sm:px-6"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-[11px] sm:text-[12px] leading-relaxed">
              Bringing timeless floral design to modern weddings. From intimate ceremonies to grand celebrations, we craft every petal with precision, elegance, and emotion.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="w-full px-4 sm:px-8"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <hr className="w-full max-w-4xl mx-auto border-white border-1" />
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-[12px] sm:text-[14px]">© {new Date().getFullYear()} 90Flora. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;