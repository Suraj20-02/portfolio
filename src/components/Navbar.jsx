import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger menu icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-[#2C3E50] shadow w-full fixed top-0 left-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center h-24 ">
          <h1 className="lg:pl-44 md:pl-20 sm:pl-6 text-4xl font-bold text-white font-[Poppins]">
            Suraj Timilsina
          </h1>
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 lg:pr-44 md:pr-20 sm:pr-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-100}
              className="text-white text-2xl font-bold font-[Poppins] hover:text-[#1abc9c]"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-100}
              className="text-white text-2xl font-bold font-[Poppins] hover:text-[#1abc9c]"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-100}
              className="text-white text-2xl font-bold font-[Poppins] hover:text-[#1abc9c]"
            >
              Contact Me
            </Link>
          </nav>
          {/* Hamburger Menu */}
          <div
            className="md:hidden text-white text-3xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#2C3E50] py-4">
            <nav className="flex flex-col items-center space-y-4">
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-white text-xl font-bold font-[Poppins] hover:text-[#1abc9c]"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-white text-xl font-bold font-[Poppins] hover:text-[#1abc9c]"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                className="text-white text-xl font-bold font-[Poppins] hover:text-[#1abc9c]"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
