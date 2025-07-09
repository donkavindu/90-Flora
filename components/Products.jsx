import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    { id: 1, image: "/images/p1.jpeg", title: "Welcome Sign" },
    { id: 2, image: "/images/p2.jpeg", title: "Entrance Arch" },
    { id: 3, image: "/images/p3.jpeg", title: "Stage Decoration" },
    { id: 4, image: "/images/p4.jpeg", title: "Settee Back" },
    { id: 5, image: "/images/p5.jpeg", title: "Aisle Decoration" },
    { id: 6, image: "/images/p6.jpeg", title: "Cake Table" },
    { id: 7, image: "/images/p7.jpeg", title: "Table Centerpiece" },
    { id: 8, image: "/images/p8.jpeg", title: "Bridal Bouquet" },
  ];

  return (
    <div className="w-full p-30">
      <div className="w-[75%] h-full flex flex-col items-center justify-center mx-auto">
        {/* First row with 4 products */}
        <div className="flex mb-12 gap-15">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} imageSrc={product.image} title={product.title} />
          ))}
        </div>
        
        {/* Second row with 4 products */}
        <div className="flex gap-15">
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product.id} imageSrc={product.image} title={product.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;