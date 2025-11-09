"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    { id: 1, image: "/images/p1.webp", title: "Welcome Sign" },
    { id: 2, image: "/images/p2.webp", title: "Entrance Arch" },
    { id: 3, image: "/images/p3.webp", title: "Stage Decoration" },
    { id: 4, image: "/images/p4.webp", title: "Settee Back" },
    { id: 5, image: "/images/p5.webp", title: "Aisle Decoration" },
    { id: 6, image: "/images/p6.webp", title: "Cake Table" },
    { id: 7, image: "/images/p7.webp", title: "Table Centerpiece" },
    { id: 8, image: "/images/p8.webp", title: "Bridal Bouquet" },
  ];

  return (
    <div className="w-full px-4 p-30 sm:px-6 md:px-8 lg:px-30">
      <motion.div 
        className="w-[75%] w-full md:w-[90%] lg:w-[75%] h-full flex flex-col items-center justify-center mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 1.5,
          ease: [0.165, 0.84, 0.44, 1]
        }}
      >
        {/* Desktop view - 4 products per row */}
        <motion.div 
          className="hidden mb-12 lg:flex gap-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            staggerChildren: 0.25,
            when: "beforeChildren",
            delay: 0.4
          }}
        >
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2,
                delay: index * 0.15,
                ease: [0.165, 0.84, 0.44, 1],
                type: "spring",
                damping: 10,
                stiffness: 100
              }}
            >
              <ProductCard imageSrc={product.image} title={product.title} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="hidden lg:flex gap-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            staggerChildren: 0.25,
            when: "beforeChildren",
            delay: 0.8
          }}
        >
          {products.slice(4, 8).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2,
                delay: 0.8 + index * 0.15,
                ease: [0.165, 0.84, 0.44, 1],
                type: "spring",
                damping: 10,
                stiffness: 100
              }}
            >
              <ProductCard imageSrc={product.image} title={product.title} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile/Tablet view - fixed card size, flexible columns */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            staggerChildren: 0.25,
            when: "beforeChildren",
            delay: 0.4
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="flex justify-center"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2,
                delay: index * 0.15,
                ease: [0.165, 0.84, 0.44, 1],
                type: "spring",
                damping: 10,
                stiffness: 100
              }}
            >
              <ProductCard imageSrc={product.image} title={product.title} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Products;