"use client";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-black  px-6 py-4  text-white flex gap-6 text-lg justify-between items-center">
      <h1>Movies Land</h1>

      <div className="flex gap-10">
        <Link href="/movies?page=1">Movies</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
export default Navbar;
