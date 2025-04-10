"use client";
import React, { useEffect, useState } from "react";
import {
  TbBaselineDensityMedium,
  TbBaselineDensitySmall,
} from "react-icons/tb";

const Navbar = () => {
  const navigations = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 inset-x-0 mx-auto py-3 px-4 bg-transparent backdrop-blur-md flex justify-between place-items-center">
      <h3 className="font-semibold text-2xl text-cyan-500 basis-1/2">
        Sabihisma Fatih
      </h3>
      <div className="hidden md:flex md:gap-2 md:basis-1/2 ">
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
      className={`nav_item ${onThisSection ? "on_this_section" : "asuu"}`}
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
        className={`${dropdown ? "rotate-180" : ""} transition-all`}
      >
        <TbBaselineDensitySmall size={"2em"} />
      </button>
      {dropdown && (
        <div className="flex flex-col gap-2.5 absolute right-0 rounded-sm bg-zinc-400  dark:bg-zinc-800 py-2.5 px-7">
          {navigations.map((item) => {
            return <NavItem name={item} key={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
