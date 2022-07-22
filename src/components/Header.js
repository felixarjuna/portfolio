import React, { useEffect, useState } from "react";

//import nav data
import { nav } from "../data";

// import logo
import Logo from "../assets/img/logo.png";

// import link from react scroll
import { Link } from "react-scroll";

// import icons
import { RiBarChartHorizontalLine, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // window scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 40 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-white shadow-lg py-5" : "py-9"
      } fixed left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="home" className="cursor-pointer">
            <img className="w-[120px]" src={Logo} alt="" />
          </Link>
          {/* nav */}
          <ul
            className={`${
              showNav ? "left-0" : "-left-full"
            } flex flex-col justify-center items-center fixed top-0 bg-accent text-white text-xl capitalize w-80 h-full gap-y-8 duration-200 transition-all z-20`}
          >
            {nav.map((item, index) => {
              return (
                <li className="cursor-pointer" key={index}>
                  <Link
                    to={item.name}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* nav trigger */}
          <div onClick={() => setShowNav(!showNav)} className="cursor-pointer">
            {showNav ? (
              <RiCloseFill className="w-8 h-8" />
            ) : (
              <RiBarChartHorizontalLine className="w-8 h-8" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
