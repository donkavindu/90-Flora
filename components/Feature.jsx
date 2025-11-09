"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import star from "../public/images/star.png";

const Feature = () => {
  const features = ["MODERN", "MINIMAL", "ELEGANT", "LUXURIANT"];

  return (
    <div className="w-full h-auto min-h-[8vh] md:h-[10vh] border-y-2 border-[#0D281A] overflow-hidden flex items-center">
      <motion.div 
        className="flex w-full h-full justify-between items-center text-[14px] md:text-[24px] tracking-[0.5px] md:tracking-[1.5px] font-light px-4 md:px-8 lg:px-16 xl:px-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2
            }
          }
        }}
      >
        {features.map((feature, index) => (
          <div key={`feature-${index}`} className="flex items-center justify-center">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
              className="text-center whitespace-nowrap"
            >
              {feature}
            </motion.p>
            {index < features.length - 1 && (
              <motion.div
                key={`star-${index}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      duration: 0.5, 
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 200
                    }
                  }
                }}
                className="flex items-center justify-center mx-1 md:mx-2"
              >
                <Image 
                  src={star} 
                  alt="star" 
                  width={30}
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Feature;