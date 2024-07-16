import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-4 text-[#C5C6C7] font-semibold text-[1rem] md:text-[1.5rem] pt-[1rem]">
      <Link href="/" className="hover:text-[#66FCF1] transition-[2s]">
        Janeesh
      </Link>
      <div className=" flex gap-x-4">
        <Link href="/about" className="hover:text-[#66FCF1]">
          About
        </Link>
        <Link href="/work" className="hover:text-[#66FCF1]">
          Work
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
