"use client";
import React, { useEffect, useState } from "react";
import {
  TbBaselineDensityMedium,
  TbBaselineDensitySmall,
} from "react-icons/tb";

const Navbar = () => {
  const navigations = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="sticky top-0 inset-x-0 mx-auto py-3 px-4 bg-transparent backdrop-blur-md flex justify-between place-items-center">
      <h3 className="font-semibold text-2xl w-fit text-[#3F6212] dark:text-[#A3E635] md:basis-1/2 xl:basis-2/3">
        Personal Page
      </h3>
      <div className="hidden md:flex md:gap-2 md:basis-1/2 xl:basis-1/3">
        {navigations.map((item) => {
          return <NavItem name={item} key={item} />;
        })}
      </div>
      <Dropdown navigations={navigations} />
    </nav>
  );
};

function NavItem({ name }) {
  const [onThisSection, setOnThisSection] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setOnThisSection(window.location.hash === `#${name}`);
    };

    checkHash(); // Check on mount

    window.addEventListener("hashchange", checkHash); // Watch for changes

    return () => window.removeEventListener("hashchange", checkHash);
  }, [name]);

  const navItemHandler = () => {
    window.location.hash = name;
  };

  return (
    <p
      onClick={navItemHandler}
      className={`nav_item ${onThisSection ? "on_this_section" : ""}`}
    >
      {name}
    </p>
  );
}

const Dropdown = ({ navigations }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setDropdown((prev) => !prev)}
        className={`${dropdown ? "-rotate-90" : ""} transition-all`}
      >
        <TbBaselineDensitySmall size={"2em"} />
      </button>
      {dropdown && (
        <div className="flex flex-col gap-2.5 absolute right-0 rounded-sm bg-[#FAFDF6] dark:bg-[#1a1a1a] outline-1 outline-[#3f6212] dark:outline-[#a3e635] py-2.5 px-7">
          {navigations.map((item) => {
            return <NavItem name={item} key={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
