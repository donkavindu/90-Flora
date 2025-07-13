"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { id: '#', label: '90FLORA', className: 'font-semibold' },
    { id: 'services', label: 'SERVICES' },
    { id: 'portfolio', label: 'MY WORKS' },
    { id: 'reviews', label: 'REVIEWS' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'contact', label: 'CONTACT US' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className={`relative w-full h-full ${scrolled ? 'bg-white/90 shadow-sm' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="ceraPro text-[16px] h-full w-[75%] mx-auto">
        <ul className="flex items-center justify-between h-full tracking-[1px]">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              className={item.className}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: 0.2 + index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.a 
                href={item.id} 
                className="inline-block transition-transform duration-300 hover:scale-110"
                onClick={(e) => handleClick(e, item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;