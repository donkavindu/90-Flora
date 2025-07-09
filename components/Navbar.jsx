const Navbar = () => {
  return (
    <div className="relative w-full h-full">
      <div className="ceraPro text-[16px] h-full w-[75%] mx-auto">
        <ul className="flex items-center justify-between h-full tracking-[1px]">
          <li className="font-semibold">
            <a href="#" className="inline-block">
              90FLORA
            </a>
          </li>
          <li>
            <a href="#ser" className="inline-block transition-transform duration-300 hover:scale-110">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#my" className="inline-block transition-transform duration-300 hover:scale-110">
              MY WORKS
            </a>
          </li>
          <li>
            <a href="#rev" className="inline-block transition-transform duration-300 hover:scale-110">
              REVIEWS
            </a>
          </li>
          <li>
            <a href="#abo" className="inline-block transition-transform duration-300 hover:scale-110">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#con" className="inline-block transition-transform duration-300 hover:scale-110">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;