"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import star from "../public/images/star.png";

const Feature = () => {
  const features = ["MODERN", "MINIMAL", "ELEGANT", "LUXURIANT"];

  return (
    <div className="w-full h-[10vh] border-y-2 border-[#0D281A]">
      <motion.div 
        className="flex w-[75%] h-full mx-auto justify-between items-center text-[24px] tracking-[1.5px] font-light"
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
          <div key={`feature-${index}`} className="flex items-center">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
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
                className="mx-2"
              >
                <Image src={star} alt="star" width={30}/>
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Feature;