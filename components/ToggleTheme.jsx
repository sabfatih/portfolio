"use client";
import React, { useEffect, useState } from "react";
import { TbMoon, TbSunHigh } from "react-icons/tb";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("class", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeHandler = () => {
    setTheme((prev) => {
      return prev == "light" ? "dark" : "light";
    });
  };
  return (
    <button
      onClick={themeHandler}
      className="fixed bottom-4 right-4 size-12 p-2 rounded-full bg-[#FAFDF6] dark:bg-[#1A1A1A] cursor-pointer hover:scale-105 active:scale-90 transition-all"
    >
      {theme == "light" ? (
        <TbMoon size={"1.5em"} className="m-auto" />
      ) : (
        <TbSunHigh size={"1.5em"} className="m-auto" />
      )}
    </button>
  );
};

export default ToggleTheme;
