"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimg.webp";
import Navbar from "./Navbar";

const Hero = ({ id }) => {
  const containerRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCursorInContainer, setIsCursorInContainer] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Start animations when component mounts
    controls.start("visible");

    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const isInside = x >= 0 && x <= width && y >= 0 && y <= height;
      
      setCursorPosition({ x, y });
      setIsCursorInContainer(isInside);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      document.body.style.cursor = 'none';
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsCursorInContainer(false);
      document.body.style.cursor = 'default';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'default';
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  return (
    <div id={id}>
      <div className="h-[8vh] w-full navtexture fixed top-0 z-20 border-b-[2px] border-white">
        <Navbar/>
      </div>
      
      <div 
        ref={containerRef}
        className="h-[100vh] w-full relative overflow-hidden"
      >
        {/* Grayscale background image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={heroImage}
            alt="heroimg"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "top",
              filter: "grayscale(100%)",
              transition: "filter 0.5s ease-out"
            }}
          />
        </motion.div>

        <motion.div 
          className="absolute top-32 left-[50%] z-10 newYork -translate-x-[50%] flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-[18px] tracking-[3px] text-white"
            variants={textVariants}
          >
            CINEMATIC DREAM PLANNER
          </motion.p>
          <motion.p 
            className="text-[130px] tracking-[20px] text-[#333] leading-36 font-medium"
            variants={textVariants}
            custom={0.2}
          >
            90 FLORA
          </motion.p>
          <motion.p 
            className="text-[12px] tracking-[3px] text-white ml-auto"
            variants={textVariants}
            custom={0.4}
          >
            BY CHINTHAKA KASUN
          </motion.p>
        </motion.div>
        
        {/* Custom Circle Cursor */}
        {isHovering && isCursorInContainer && (
          <motion.div 
            className="absolute z-50 w-[120px] h-[120px] transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 border-3 border-white rounded-full pointer-events-none"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { type: "spring", stiffness: 300 }
            }}
            exit={{ scale: 0, opacity: 0 }}
          />
        )}

        {/* Colored spotlight layer */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            '--mouse-x': `${cursorPosition.x}px`,
            '--mouse-y': `${cursorPosition.y}px`,
            '--spotlight-size': '300px',
            '--feather-size': '150px',
          }}
          animate={{
            opacity: isHovering ? 1 : 0,
            transition: { duration: 0.3 }
          }}
        >
          <div className="absolute inset-0 w-full h-full"
            style={{
              background: `radial-gradient(
                circle at var(--mouse-x) var(--mouse-y),
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0) calc(var(--spotlight-size) - var(--feather-size)),
                rgba(0,0,0,0.95) var(--spotlight-size)
              )`,
              maskImage: `radial-gradient(
                circle at var(--mouse-x) var(--mouse-y),
                rgba(0,0,0,1) 0%,
                rgba(0,0,0,0.8) calc(var(--spotlight-size) - var(--feather-size)),
                rgba(0,0,0,0) var(--spotlight-size)
              )`,
              WebkitMaskImage: `radial-gradient(
                circle at var(--mouse-x) var(--mouse-y),
                rgba(0,0,0,1) 0%,
                rgba(0,0,0,0.8) calc(var(--spotlight-size) - var(--feather-size)),
                rgba(0,0,0,0) var(--spotlight-size)
              )`,
            }}
          >
            <Image
              src={heroImage}
              alt="heroimg-colored"
              fill
              priority
              style={{
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;