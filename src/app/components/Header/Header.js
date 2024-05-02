"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isScrolled);

  return (
    <>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        } fixed top-0 z-50 transition-all duration-500`}
        style={{
          backgroundColor: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "#48afde -10px 25px 50px 10px" : "",
        }}
      >
        <nav className="invisible xl:visible xl:max-w-4xl 2xl:max-w-7xl mw-auto">
          <ul className="flex font-recoletaBlack flex-row items-center h-24">
            <li className="group text-2xl relative font-bold mr-20">
              <a
                className={`menu-item ${
                  selectedIndex1 === 0 ? "text-black" : ""
                }text-[#666d47] group-hover:text-black`}
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
