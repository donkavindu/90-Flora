import Image from "next/image"
import portfolioImage1 from "../public/images/port1.webp" 
import portfolioImage2 from "../public/images/port2.webp" 
import portfolioImage3 from "../public/images/port3.webp" 
import portfolioImage4 from "../public/images/gallary01.webp" 
import portfolioImage5 from "../public/images/port5.webp" 
import portfolioImage6 from "../public/images/port6.webp" 
import portfolioImage7 from "../public/images/gallary21.webp" 
import portfolioImage8 from "../public/images/port8.webp" 
import portfolioImage9 from "../public/images/gallary10.webp" 
import portfolioImage10 from "../public/images/gallary18.webp"
import portfolioImage11 from "../public/images/gallary15.webp"
import portfolioImage12 from "../public/images/gallary30.webp"
import portfolioImage13 from "../public/images/gallary19.webp"

const Portfolio = ({id}) => {
  return (
    <div id={id} className="w-full h-auto lg:h-[180vh]">
      <div className="grid h-full grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-auto lg:grid-rows-4 lg:gap-0">
        {/* First column */}
        <div className="overflow-hidden bg-blue-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage1} 
              alt="portfolioimg1" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-blue-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage2} 
              alt="portfolioimg2" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-blue-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage3} 
              alt="portfolioimg3" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-blue-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto lg:row-span-3">
            <Image 
              src={portfolioImage4} 
              alt="portfolioimg4" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        
        {/* Second column */}
        <div className="overflow-hidden bg-green-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage5} 
              alt="portfolioimg5" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-green-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto lg:col-span-2">
            <Image 
              src={portfolioImage6} 
              alt="portfolioimg6" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        
        {/* Third column */}
        <div className="overflow-hidden bg-yellow-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage7} 
              alt="portfolioimg7" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-yellow-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage8} 
              alt="portfolioimg8" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-yellow-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage9} 
              alt="portfolioimg9" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
    
        {/* Fourth column */}
        <div className="overflow-hidden bg-purple-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage10} 
              alt="portfolioimg10" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-purple-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage11} 
              alt="portfolioimg11" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-purple-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage12} 
              alt="portfolioimg12" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
        <div className="overflow-hidden bg-purple-200 border-2 border-white group lg:border-3 aspect-square lg:aspect-auto">
            <Image 
              src={portfolioImage13} 
              alt="portfolioimg13" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
        </div>
      </div>
    </div>
  )
}

export default Portfolio