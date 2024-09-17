import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-black/20 backdrop-blur-lg rounded-full">
      {/* Desktop Navbar */}
      <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-full border border-stone-50/30 py-3 lg:flex shadow-[0_4px_8px_rgba(255,255,255,0.8)]">
        <div className="flex items-center justify-between gap-6">
          <div className="flex-grow"></div>
          <div>
            <ul className="flex items-center gap-3">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-lg font-bold text-white hover:bg-white hover:text-black py-2 px-4 rounded-full transition duration-300"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="rounded-lg backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex-grow"></div>
          <div className="flex items-center">
            <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-6" />
              ) : (
                <FaBars className="m-2 h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <ul className="ml-4 mt-4 flex flex-col gap-4 text-right pr-5 bg-black/20 backdrop-blur-lg rounded-md py-4">  {/* Added text-right and padding-right */}
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block w-full text-lg font-bold text-white hover:bg-white hover:text-black py-2 px-4 rounded transition duration-300"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Hire Me button positioned outside the borders */}
      <div className="absolute right-10 top-3">
        <a
          href="https://www.linkedin.com/in/eisha-farooq-64019a26a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white shadow-[0_4px_8px_rgba(255,255,255,0.8)] font-bold 
          py-2 lg:py-3 px-7 lg:px-9 rounded-full hover:bg-gray-600 transition duration-300"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
