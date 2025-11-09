"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import QR from "../public/images/qr.webp";
import Form from "./Form";

const ContactUs = ({id}) => {
  return (
    <div id={id} className="w-full py-10 lg:py-20">
      <motion.div 
        className="w-[90%] md:w-[85%] lg:w-[75%] h-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Section */}
        <motion.div 
          className="flex-[6]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-full lg:w-[85%]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-[18px] sm:text-[20px] mb-2 text-[#3D5348] text-center lg:text-left">
              Let's Bring Your <span className="font-bold">Floral</span> Vision
              to Life
            </h4>
            <motion.p 
              className="w-full text-[11px] sm:text-[12px] text-[#0D281A] text-center lg:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Every great floral story starts with a conversation. Whether
              you're planning your wedding, a private celebration, or simply
              want to explore what we can create together — we invite you to
              book a personal appointment with our design team.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-[85%] mt-5 lg:mt-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Form/>
          </motion.div>
        </motion.div>

        {/* Right QR Section */}
        <motion.div 
          className="flex-[4] bg-[#E7EAE8] py-8 lg:py-10 px-4 lg:px-5 flex flex-col gap-4 lg:gap-5 items-center text-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[90%]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image src={QR} alt="qr" className="w-full mx-auto" />
          </motion.div>
          <motion.div 
            className="text-[#3D5348] text-[13px] sm:text-[14px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p>
              Chat With Us <span className="font-bold">Instantly</span>
            </p>
            <p>
              Scan to Start a <span className="font-bold">WhatsApp</span>{" "}
              Conversation
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;