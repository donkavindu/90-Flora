import Image from "next/image";

const ProductCard = ({ imageSrc, title }) => {
  return (
    <div className="text-center hover:bg-[#E7EAE8] w-60 h-80 rounded-[8px] transition duration-500 ease-in hover:cursor-pointer">
      <div className="border-2 border-[#3D5348] w-60 h-60 rounded-[8px] mt-4 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={236}  
          height={236}
          quality={100}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="text-[24px] mt-5">{title}</p>
    </div>
  );
};

export default ProductCard;