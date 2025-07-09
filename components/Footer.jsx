const Footer = () => {
  return (
    <div className="w-full h-[50vh] footertexture py-10">
      <div className="flex flex-col justify-center text-center text-[#E7EAE8] items-center gap-12">
        <div className="newYork">
          <h1 className="text-[50px]">90Flora</h1>
          <h4 className="text-[18px] -mt-3 tracking-widest">
            Wedding Decoration & Event Planner
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex text-[14px] gap-10">
            <h6>SERVICES</h6>
            <h6>MY WORKS</h6>
            <h6>REVIEWS</h6>
            <h6>ABOUT US</h6>
            <h6>CONTACT US</h6>
          </div>
          <div>
            <p className="text-[12px]">Bringing timeless floral design to modern weddings. From intimate ceremonies to grand celebrations, we craft every petal with precision, elegance, and emotion.</p>
          </div>
        </div>
        <div className="w-full">
            <hr className="border-1 border-white w-[80%] mx-auto" />
        </div>
        <div>
            <p className="text-[14px]">© 2025 90Flora. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
