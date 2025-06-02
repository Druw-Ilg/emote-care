"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "@/app/context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="flex justify-center items-center p-4 bg-white">
        <Link href={"/"} className="w-30">
          <Image
            src={"/emotecare.png"}
            alt="Emote Care"
            width={300}
            height={10}
          />
        </Link>
      </div>
      {/* Implementing Dark Mode */}
      {/*<div className="absolute top-7 right-10">
        <button
          onClick={toggleTheme}
          className="px-3 py-2 text-sm rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div> */}
    </>
  );
}

export default Header;
