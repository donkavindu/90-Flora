const Navbar = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="ceraPro text-[16px] h-full w-[75%] mx-auto">
        <ul className="flex items-center justify-between h-full tracking-[1px]">
          <li className="font-semibold">
            <a 
              href="#" 
              className="inline-block"
              onClick={(e) => handleClick(e, '#')}
            >
              90FLORA
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="inline-block transition-transform duration-300 hover:scale-110"
              onClick={(e) => handleClick(e, 'services')}
            >
              SERVICES
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              className="inline-block transition-transform duration-300 hover:scale-110"
              onClick={(e) => handleClick(e, 'portfolio')}
            >
              MY WORKS
            </a>
          </li>
          <li>
            <a 
              href="#reviews" 
              className="inline-block transition-transform duration-300 hover:scale-110"
              onClick={(e) => handleClick(e, 'reviews')}
            >
              REVIEWS
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="inline-block transition-transform duration-300 hover:scale-110"
              onClick={(e) => handleClick(e, 'about')}
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="inline-block transition-transform duration-300 hover:scale-110"
              onClick={(e) => handleClick(e, 'contact')}
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;