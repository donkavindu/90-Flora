import Image from "next/image";
import Image1 from "../public/images/p1.png";
import Image2 from "../public/images/p2.png";
import Image3 from "../public/images/p3.png";
import Image4 from "../public/images/p4.png";
import Image5 from "../public/images/p5.png";
import Image6 from "../public/images/p6.png";
import Image7 from "../public/images/p7.png";
import Star from "../public/images/star.png";

function Portfolio({id}) {
  return (
    <div id={id} className="w-full">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-3 min-h-[350px]">
          <div className="border-[3px] border-white">
            <Image src={Image1} alt="image1" />
          </div>
          <div className="border-[3px] border-white">
            <Image src={Image2} alt="image1" />
          </div>
          <div className="border-[3px] border-white">
            <Image src={Image3} alt="image1" />
          </div>
        </div>
        <div className="grid grid-cols-3 min-h-[350px]">
          <div className="border-[3px] border-white col-span-2 bg-red-300">
             <Image src={Image4} alt="image1" />
          </div>
          <div className="border-[3px] border-white">
            <Image src={Image5} alt="image1" />
          </div>
        </div>
        <div className="grid grid-cols-3 min-h-[350px]">
          <div className="border-[3px] border-white">
            <Image src={Image6} alt="image1" />
          </div>
          <div className="border-[3px] border-white col-span-2 bg-red-300">
             <Image src={Image7} alt="image1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
