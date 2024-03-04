"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-nav bg-blend-darken bg-slate-800 w-full border-b-cyan-300 border-b-2 flex justify-between px-4 items-center">
      <Link href="/">Task Master.io</Link>
      <ul className=" flex justify-center gap-4">
        <Link href="about" className="cursor-pointer">
          About
        </Link>
        <Link href="login" className="cursor-pointer">
          Login
        </Link>
        <Link href="login" className="cursor-pointer">
          Admin
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
