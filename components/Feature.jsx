import Image from "next/image"
import star from "../public/images/star.png"

const Feature = () => {
  return (
    <div className="w-full h-[10vh] border-y-2 border-[#0D281A]">
      <div className="flex w-[75%] h-full mx-auto justify-between  items-center text-[24px] tracking-[1.5px] font-light">
        <p>MODERN</p>
        <Image src={star} alt="star" width={30}/>
        <p>MINIMAL</p>
        <Image src={star} alt="star" width={30}/>
        <p>ELEGANT</p>
        <Image src={star} alt="star" width={30}/>
        <p>LUXURIANT</p>
      </div>
    </div>
  )
}

export default Feature
