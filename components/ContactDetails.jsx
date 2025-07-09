"use client"
import Image from "next/image";
import Banner from "../public/images/BannerArt.jpg";
import Star from "../public/images/star.png";

const ContactDetails = () => {
  const handleViewMoreClick = (e) => {
    e.preventDefault();
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[115vh] pt-30 relative">
      <div className="flex w-full h-full">
        <div className="w-[75%] mx-auto h-[60vh] rounded-xl absolute top-30 left-[50%] -translate-x-[50%]">
          <Image
            src={Banner}
            alt="test"
            className="w-[100%] h-full object-cover rounded-xl"
          />
          <button
            onClick={handleViewMoreClick}
            className="absolute top-0 left-[50%] -translate-y-[50%] -translate-x-[50%] flex py-3 px-6 bg-white rounded-lg items-center justify-center gap-2 border-[1px] border-[#3D5348] cursor-pointer hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
          >
            <Image src={Star} alt="start" width={15} height={15} />
            <p>View More</p>
            <Image src={Star} alt="start" width={15} height={15} />
          </button>
        </div>
        <div className="w-full h-[60vh] servicetexture mt-auto">
          <div className="w-[70%] mx-auto mt-48">
            <h3 className="text-[22px]">
              Let's Make Something <span className="font-bold">Beautiful</span>{" "}
              Together
            </h3>
            <p className="text-[14px] w-[70%]">
              Whether you're planning an intimate garden wedding or a grand
              floral affair, we'd love to hear from you. At 90Flora, every event
              starts with a conversation — and ends in unforgettable blooms.
            </p>
            <div className="flex justify-between mt-10">
              <div>
                <h2 className="newYork text-[40px]">Phone</h2>
                <p className="-mt-2 text-[20px]">094 718 721 181</p>
              </div>
              <div>
                <h2 className="newYork text-[40px]">Email</h2>
                <p className="-mt-2 text-[20px]">90floradecos@gmail.com</p>
              </div>
              <div>
                <h2 className="newYork text-[40px]">Address</h2>
                <p className="-mt-2 text-[20px]">
                  Kandy Road, Galigamuwa Town, Kegalle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;