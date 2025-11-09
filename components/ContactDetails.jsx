"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Banner from "../public/images/BannerArt.webp";
import Star from "../public/images/star.png";

const ContactDetails = () => {
  const router = useRouter();

  const handleViewMoreClick = (e) => {
    e.preventDefault();
    router.push("/portfolio");
  };

  return (
    <div className="w-full h-auto lg:h-[115vh] pt-20 lg:pt-30 relative overflow-visible">
      <div className="flex w-full h-full">
        {/* Banner Image with Animation - 2/5 overflow */}
        <motion.div 
          className="w-[90%] md:w-[85%] lg:w-[75%] h-[40vh] sm:h-[50vh] lg:h-[60vh] rounded-xl absolute top-20 lg:top-30 left-[50%] -translate-x-[50%] z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={Banner}
            alt="Banner showing floral arrangements"
            className="w-[100%] h-full object-cover rounded-xl"
            priority
          />
          <motion.button
            onClick={handleViewMoreClick}
            className="absolute top-0 left-[50%] -translate-y-[50%] -translate-x-[50%] flex py-2 px-4 lg:py-3 lg:px-6 bg-white rounded-lg items-center justify-center gap-1 lg:gap-2 border-[1px] border-[#3D5348] cursor-pointer hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Image src={Star} alt="star icon" width={12} height={12} className="w-3 h-3 lg:w-[15px] lg:h-[15px]" />
            <p>View More</p>
            <Image src={Star} alt="star icon" width={12} height={12} className="w-3 h-3 lg:w-[15px] lg:h-[15px]" />
          </motion.button>
        </motion.div>

        {/* Contact Section with Grey Background - 3/5 height with 2/5 image overflow */}
        <div className="w-full h-auto lg:h-[69vh] servicetexture mt-[35vh] sm:mt-[40vh] lg:mt-auto pt-20 lg:pt-32 pb-10 lg:pb-0 bg-gray-100 relative z-0">
          <motion.div 
            className="w-[90%] md:w-[85%] lg:w-[75%] flex justify-between flex-col mx-auto pt-8 lg:pt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Added margin top to push text below the overlapping image */}
            <motion.h3 
              className="text-[18px] sm:text-[20px] lg:text-[22px] text-center lg:text-left mt-8 lg:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Let's Make Something <span className="font-bold">Beautiful</span> Together
            </motion.h3>
            
            <motion.p 
              className="text-[13px] sm:text-[14px] w-full lg:w-[70%] text-center lg:text-left mt-2 lg:mt-0"
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
              className="flex flex-col justify-between gap-6 mt-6 lg:flex-row lg:mt-10 lg:gap-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2, when: "beforeChildren" }}
            >
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="newYork text-[28px] sm:text-[32px] lg:text-[40px]">Phone</h2>
                <p className="-mt-1 lg:-mt-2 text-[16px] sm:text-[18px] lg:text-[20px]">094 718 721 181</p>
              </motion.div>
              
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="newYork text-[28px] sm:text-[32px] lg:text-[40px]">Email</h2>
                <p className="-mt-1 lg:-mt-2 text-[16px] sm:text-[18px] lg:text-[20px] break-all">90floradecos@gmail.com</p>
              </motion.div>
              
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="newYork text-[28px] sm:text-[32px] lg:text-[40px]">Address</h2>
                <p className="-mt-1 lg:-mt-2 text-[16px] sm:text-[18px] lg:text-[20px] max-w-[250px] mx-auto lg:mx-0">
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