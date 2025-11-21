"use client";
import React from "react";
import { motion } from "framer-motion";

const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <motion.div
        className="text-center text-[#C5C6C7] font-medium mt-8 mb-2 py-6 border-t border-[#1f2833]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.p
          className="text-sm sm:text-base"
          whileHover={{ scale: 1.05, color: "#A78BFA" }}
          transition={{ duration: 0.2 }}
        >
          © {currentYear} | Janeesh Pal Singh
        </motion.p>
        <motion.p
          className="text-xs sm:text-sm text-[#8B5CF6] mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Crafted with precision
        </motion.p>
      </motion.div>
    </>
  );
};

export default footer;
