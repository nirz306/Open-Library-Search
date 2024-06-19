import React, { useState } from "react";
import logoImg from "../components/images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <div className="flex items-center p-4 relative">
      <div className="flex items-center">
        <Link to="/">
          <img 
            src={logoImg} 
            alt="logo" 
            className="pl-2" 
            style={{ width: '50%' }} // Set logo size to 50%
          />
        </Link>

        <Link to="/">
          <div className="font-bold text-[30px] ml-[-50px]">BOOKHUB</div>
        </Link>
      </div>

      {/* Push the menu button to the rightmost part, ml-auto does it */}
      <button 
        type="button" 
        onClick={handleNavbar} 
        className="lg:hidden ml-auto flex justify-end z-50"
      > 
        <HiOutlineMenuAlt3
          size={35}
          style={{
            color: `${toggleMenu ? "#fff" : "#010101"}`,
          }}
        />
      </button>

      <div
        className={`fixed lg:ml-auto top-0 right-0 h-full lg:bg-white bg-black transition-transform transform  ${
          toggleMenu ? "translate-x-0" : "translate-x-full"       //  When toggleMenu is true, this class makes the element translate to 0 on the x-axis, meaning it's fully visible.
          // oggleMenu is false, this class translates the element 100% on the x-axis, meaning it's moved completely off-screen to the right.
        } w-[250px] lg:static lg:transform-none lg:flex lg:w-auto`} 
      > 
        <ul className="navbar-nav flex flex-col lg:flex-row items-center justify-start lg:justify-end h-full p-4 ">
          <li className="nav-item mb-4 lg:mb-0">

            <Link
              to="/"
              className="nav-link text-uppercase lg:text-black text-white text-[30px] mr-4"
            >
              Home
            </Link>
          </li>

          <li className="nav-item mb-4 lg:mb-0">
            <Link
              to="/about"
              className="nav-link text-uppercase  lg:text-black  text-white text-[30px]"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
