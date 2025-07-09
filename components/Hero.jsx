"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroImage from "../public/images/heroimg.png";
import Navbar from "./Navbar";

const Hero = ({id}) => {
  const containerRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCursorInContainer, setIsCursorInContainer] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Check if cursor is within container bounds
      const isInside = x >= 0 && x <= width && y >= 0 && y <= height;
      
      setCursorPosition({
        x,
        y
      });
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
  }, []);

  return (
    <div id={id}>
      <div className="h-[8vh] w-full navtexture fixed top-0 z-20 border-b-[2px] border-white">
        <Navbar/>
      </div>
      <div 
        ref={containerRef}
        className="h-[100vh] w-full bg-amber-800 relative overflow-hidden"
      >
        {/* Grayscale background image */}
        <Image
          src={heroImage}
          alt="heroimg"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top",
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease-out"
          }}
          quality={100}
        />
        <div className="absolute top-32 left-[50%] z-10 newYork -translate-x-[50%] flex flex-col items-center">
          <p className="text-[18px] tracking-[3px] text-white">CINEMATIC DREAM PLANNER</p>
          <p className="text-[130px] tracking-[20px] text-[#333] leading-36 font-medium">90 FLORA</p>
          <p className="text-[12px] tracking-[3px] text-white ml-auto">BY CHINTHAKA KASUN</p>
        </div>
        
        {/* Custom Gray Circle Cursor */}
        {isHovering && isCursorInContainer && (
          <div 
            className="absolute z-50 w-[120px] h-[120px] transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2 border-3 border-white rounded-full pointer-events-none bg-opacity-70"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          />
        )}

        {/* Colored spotlight layer */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 ease-out pointer-events-none"
          style={{
            opacity: isHovering ? 1 : 0,
            '--mouse-x': `${cursorPosition.x}px`,
            '--mouse-y': `${cursorPosition.y}px`,
            '--spotlight-size': '400px',
            '--feather-size': '150px',
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
              style={{
                objectFit: "cover",
                objectPosition: "top",
              }}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;