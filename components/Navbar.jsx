"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "#", label: "90FLORA", className: "font-semibold" },
    { id: "services", label: "SERVICES" },
    { id: "portfolio", label: "MY WORKS" },
    { id: "reviews", label: "REVIEWS" },
    { id: "about", label: "ABOUT US" },
    { id: "contact", label: "CONTACT US" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.div
        className={`relative w-full h-full ${
          scrolled ? "bg-white/90 shadow-sm" : ""
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="ceraPro text-[16px] h-full w-full lg:w-[75%] mx-auto px-4 lg:px-0">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-between h-full tracking-[1px]">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                className={item.className}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
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

          {/* Mobile Navigation Header */}
          <div className="flex items-center justify-between h-16 lg:hidden">
            <motion.a
              href="#"
              className="text-lg font-semibold"
              onClick={(e) => handleClick(e, "#")}
              whileTap={{ scale: 0.95 }}
            >
              90FLORA
            </motion.a>

            {/* Hamburger Menu Button */}
            <motion.button
              className="flex flex-col items-center justify-center w-6 h-6 space-y-1 cursor-pointer"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className="block w-6 h-0.5 bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-current"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                className="block w-6 h-0.5 bg-current"
              />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 z-50 max-w-full bg-white shadow-xl h-[70vh] w-80 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex flex-col h-full px-6 pt-20 pb-8">
                <ul className="flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      className={item.className}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      <motion.a
                        href={item.id}
                        className="inline-block py-2 text-lg transition-all duration-300 hover:text-gray-600"
                        onClick={(e) => handleClick(e, item.id)}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>

                {/* Close button for mobile */}
                <motion.button
                  className="w-full py-3 mt-auto font-semibold text-white bg-black rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close Menu
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
