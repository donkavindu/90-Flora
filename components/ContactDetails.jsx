"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Banner from "../public/images/BannerArt.webp";
import Star from "../public/images/star.png";

const ContactDetails = () => {
  const handleViewMoreClick = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[115vh] pt-30 relative">
      <div className="flex w-full h-full">
        {/* Banner Image with Animation */}
        <motion.div 
          className="w-[75%] mx-auto h-[60vh] rounded-xl absolute top-30 left-[50%] -translate-x-[50%]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={Banner}
            alt="test"
            className="w-[100%] h-full object-cover rounded-xl"
          />
          <motion.button
            onClick={handleViewMoreClick}
            className="absolute top-0 left-[50%] -translate-y-[50%] -translate-x-[50%] flex py-3 px-6 bg-white rounded-lg items-center justify-center gap-2 border-[1px] border-[#3D5348] cursor-pointer hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Image src={Star} alt="start" width={15} height={15} />
            <p>View More</p>
            <Image src={Star} alt="start" width={15} height={15} />
          </motion.button>
        </motion.div>

        {/* Contact Section with Step Animations */}
        <div className="w-full h-[60vh] servicetexture mt-auto">
          <motion.div 
            className="w-[75%] flex justify-between flex-col mt-48 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-[22px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Let's Make Something <span className="font-bold">Beautiful</span> Together
            </motion.h3>
            
            <motion.p 
              className="text-[14px] w-[70%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Whether you're planning an intimate garden wedding or a grand
              floral affair, we'd love to hear from you. At 90Flora, every event
              starts with a conversation — and ends in unforgettable blooms.
            </motion.p>
            
            <motion.div 
              className="flex justify-between mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2, when: "beforeChildren" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="newYork text-[40px]">Phone</h2>
                <p className="-mt-2 text-[20px]">094 718 721 181</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="newYork text-[40px]">Email</h2>
                <p className="-mt-2 text-[20px]">90floradecos@gmail.com</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="newYork text-[40px]">Address</h2>
                <p className="-mt-2 text-[20px]">
                  Kandy Road, Galigamuwa Town, Kegalle
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;