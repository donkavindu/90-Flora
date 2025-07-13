"use client"; // Important for Next.js App Router

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = ({ id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id={id} className="h-[60vh] bg-white w-full">
      <motion.div
        ref={ref}
        className="w-[75%] flex mx-auto items-center h-full gap-24"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="flex-[1]"
          style={{ textAlign: "justify" }}
          variants={itemVariants}
        >
          At 90 Flora, we believe that every event is a unique story waiting to
          be told. Specialising in wedding decoration and event planning, our
          mission is to bring your vision to life with elegance and simplicity.
          90 Flora is not just a wedding decoration and event planning service,
          it's an experience crafted with passion, precision, and a touch of
          magic. Our designs are rooted in minimalism, ensuring that every
          detail is thoughtfully curated to create a harmonious and stunning
          visual impact. At 90 Flora, we are committed to making your dreams
          come true. Contact us today to schedule a consultation and discover
          how we can turn your vision into reality. With 90 Flora, your event
          will be a masterpiece of minimalism and elegance, crafted with care
          and love.
        </motion.div>
        <motion.div
          className="flex-[1] flex flex-col items-center text-center"
          variants={itemVariants}
        >
          <h2 className="text-justify text-[36px] font-bold">CHINTHAKA KASUN</h2>
          <p>
            Founder at 90Flora
            <br />
            Batchelor of Fine Arts (Special)
            <br />
            University of the Visual and Performing Arts
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;