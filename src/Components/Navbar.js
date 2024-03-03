"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-12 bg-blend-darken bg-slate-800 w-full border-b-cyan-300 border-b-2 flex justify-between px-4 items-center">
      <div>logo</div>
      <ul className=" flex justify-center gap-4">
        <Link href="home" className="cursor-pointer">
          Home
        </Link>
        <Link href="about" className="cursor-pointer">
          About
        </Link>
        <Link href="login" className="cursor-pointer">
          Login
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
