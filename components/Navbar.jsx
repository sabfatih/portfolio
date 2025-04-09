"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 w-[80%] mx-auto my-4 py-3 px-5 bg-transparent backdrop-blur-xs border border-white rounded-full flex justify-between place-items-center">
      <h3 className="font-semibold text-2xl text-cyan-500 basis-1/2">
        Sabihisma Fatih
      </h3>
      <div className="flex gap-2 basis-1/2">
        {/* {["Home", "About", "Skills", "Projects", "Contact"].map((name, i) => {
          return <NavItem name={name} i={i} />;
        })} */}

        <NavItem name={"Home"} />
        <NavItem name={"About"} />
        <NavItem name={"Skills"} />
        <NavItem name={"Projects"} />
        <NavItem name={"Contact"} />
        {/* <p onClick={() => navItemHandler("Home")} className={`nav_item ${hash == "Home" ? "on_this_section" : ""}`}>
          Home
        </p>
        <p onClick={() => navItemHandler("About")} className={`nav_item ${hash == "About" ? "on_this_section" : ""}`}>
          About
        </p>
        <p onClick={() => navItemHandler("Skills")} className={`nav_item ${hash == "Skills" ? "on_this_section" : ""}`}>
          Skills
        </p>
        <p onClick={() => navItemHandler("Projects")}
          className={`nav_item ${hash == "Projects" ? "on_this_section" : ""}`}
        >
          Projects
        </p>
        <p onClick={() => navItemHandler("Contact")} className={`nav_item ${hash == "Contact" ? "on_this_section" : ""}`}>
          Contact
        </p> */}
      </div>
    </nav>
  );
};

const NavItem = ({ name, i }) => {
  const [hashName, setHashName] = useState("");

  useEffect(() => {
    let currentHashName = window.location.hash;
    window.location.hash = hashName;

    console.log(" useEffect ~ hashName", hashName);
    console.log(name);

    // if (hashName == name && name == "Skills") {
    //   console.log("betool");
    // } else {
    //   console.log("sleaaah");
    // }
  }, [hashName]);

  const navItemHandler = (itemName) => {
    setHashName(itemName);
  };

  return (
    <p
      onClick={() => navItemHandler(name)}
      className={`nav_item ${hashName == name ? "on_this_section" : ""}`}
    >
      {name}
    </p>
  );
};

export default Navbar;
