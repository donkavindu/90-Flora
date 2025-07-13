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
    <div className="w-full p-30">
      <motion.div 
        className="w-[75%] h-full flex flex-col items-center justify-center mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* First row with 4 products */}
        <motion.div 
          className="flex mb-12 gap-15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            staggerChildren: 0.15,
            when: "beforeChildren"
          }}
        >
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard imageSrc={product.image} title={product.title} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Second row with 4 products */}
        <motion.div 
          className="flex gap-15"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            staggerChildren: 0.15,
            when: "beforeChildren",
            delay: 0.4
          }}
        >
          {products.slice(4, 8).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
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