import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] text-[#C5C6C7] font-semibold md:grid-cols-[6fr_1fr] lg:grid-cols-[5fr_1fr] text-[1rem] md:text-[1.5rem] pt-[1rem] mx-[1rem]">
      <Link href="/" className="hover:text-[#66FCF1] transition-[2s]">
        Janeesh
      </Link>
      <div className="col-start-2 grid grid-cols-2 gap-x-4">
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
