"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Code2, User, Briefcase } from "lucide-react";

const Navbar = () => {
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.nav
      className="flex justify-between items-center mx-4 sm:mx-8 text-[#C5C6C7] font-semibold text-[1rem] md:text-[1.125rem] pt-[1rem] pb-4 border-b border-[#1f2833]"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={linkVariants} className="flex items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-[#A78BFA] transition-colors duration-300 group focus:outline-none"
        >
          <Code2 className="w-6 h-6 text-[#A78BFA] group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
          <span className="font-bold">Janeesh</span>
        </Link>
      </motion.div>
      <motion.div className="flex gap-x-6 sm:gap-x-8" variants={linkVariants}>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Link
            href="/about"
            className="hover:text-[#A78BFA] transition-colors duration-300 relative group focus:outline-none flex items-center gap-1.5"
          >
            <User className="w-4 h-4" strokeWidth={2} />
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A78BFA] group-hover:w-full transition-all duration-300"></span>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <Link
            href="/work"
            className="hover:text-[#A78BFA] transition-colors duration-300 relative group focus:outline-none flex items-center gap-1.5"
          >
            <Briefcase className="w-4 h-4" strokeWidth={2} />
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A78BFA] group-hover:w-full transition-all duration-300"></span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
