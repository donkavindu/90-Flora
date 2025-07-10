import Image from "next/image"
import portfolioImage1 from "../public/images/port1.webp" 
import portfolioImage2 from "../public/images/port2.webp" 
import portfolioImage3 from "../public/images/port3.webp" 
import portfolioImage4 from "../public/images/port4.webp" 
import portfolioImage5 from "../public/images/port5.webp" 
import portfolioImage6 from "../public/images/port6.webp" 
import portfolioImage7 from "../public/images/port7.webp" 
import portfolioImage8 from "../public/images/port8.webp" 
import portfolioImage9 from "../public/images/port9.webp" 

const Portfolio = ({id}) => {
  return (
    <div id={id} className="w-full h-[180vh]">
      <div className="grid h-full grid-cols-4 grid-rows-4">
        {/* First column */}
        <div className="overflow-hidden bg-blue-200 border-white group border-3">
            <Image 
              src={portfolioImage1} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-blue-200 border-white group border-3">
            <Image 
              src={portfolioImage2} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-blue-200 border-white group border-3">
            <Image 
              src={portfolioImage3} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="row-span-3 overflow-hidden bg-blue-200 border-white group border-3">
            <Image 
              src={portfolioImage4} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        
        {/* Second column */}
        <div className="overflow-hidden bg-green-200 border-white group border-3">
            <Image 
              src={portfolioImage5} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="col-span-2 overflow-hidden bg-green-200 border-white group border-3">
            <Image 
              src={portfolioImage6} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        
        {/* Third column */}
        <div className="overflow-hidden bg-yellow-200 border-white group border-3">
            <Image 
              src={portfolioImage7} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-yellow-200 border-white group border-3">
            <Image 
              src={portfolioImage8} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-yellow-200 border-white group border-3">
            <Image 
              src={portfolioImage9} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
    
        {/* Fourth column */}
        <div className="overflow-hidden bg-purple-200 border-white group border-3">
            <Image 
              src={portfolioImage7} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-purple-200 border-white group border-3">
            <Image 
              src={portfolioImage8} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-purple-200 border-white group border-3">
            <Image 
              src={portfolioImage9} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-purple-200 border-white group border-3">
            <Image 
              src={portfolioImage9} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
      </div>
    </div>
  )
}

export default Portfolio