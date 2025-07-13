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
      className="w-full h-[50vh] footertexture py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col justify-center text-center text-[#E7EAE8] items-center gap-12">
        {/* Logo Section */}
        <motion.div 
          className="newYork"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[50px]">90Flora</h1>
          <motion.h4 
            className="text-[18px] -mt-3 tracking-widest"
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
          className="flex flex-col items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          <motion.div className="flex text-[14px] gap-10">
            {footerItems.map((item, index) => (
              <motion.h6
                key={item.label}
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
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-[12px]">
              Bringing timeless floral design to modern weddings. From intimate ceremonies to grand celebrations, we craft every petal with precision, elegance, and emotion.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="w-full"
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <hr className="w-full mx-auto border-white border-1" />
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-[14px]">© 2025 90Flora. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;