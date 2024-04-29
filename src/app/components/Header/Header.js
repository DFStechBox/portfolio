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
  // console.log(isScrolled);

  return (
    <>
      <Header
        className={`${
          isScrolled ? "headerShow" : ""
        } fixed top-0 z-50 transition-all duration-500`}
        style={{
          backgroundColor: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "#48afde -10px 24px 50px 10px" : "",
        }}
      >
        <h1>testing the header</h1>
      </Header>
    </>
  );
};

export default Header;
