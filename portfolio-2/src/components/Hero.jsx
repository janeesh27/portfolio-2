"use client";
import React, { useState } from "react";
import { Linkedin, Github, Twitter, ArrowRight, Briefcase } from "lucide-react";
import TypingElement from "./Typingelement";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [showCTA, setShowCTA] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        className="text-center mx-auto p-4 mt-[170px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-[1.5rem] md:text-[2.5rem] min-h-[40px] text-[#A78BFA] font-heading tracking-tight"
          variants={itemVariants}
        >
          <TypingElement message="Hello There..." onComplete={() => setShowCTA(true)} />
        </motion.div>
        <motion.p
          className="text-[1.125rem] md:text-[1.375rem] text-[#C5C6C7] mt-6 leading-relaxed max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I am Janeesh, a self-taught Web Developer with a knack for clean code.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showCTA ? 1 : 0, y: showCTA ? 0 : 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <Link href="/work">
            <motion.button
              className="group px-6 py-3 bg-transparent border-2 border-[#A78BFA] text-[#A78BFA] rounded-lg font-semibold flex items-center gap-2 mx-auto hover:bg-[#A78BFA] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Briefcase className="w-5 h-5" />
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="text-center mt-[170px] mx-auto p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.div
          className="grid grid-flow-col sm:w-[30%] sm:mx-auto gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mx-auto" variants={iconVariants}>
            <motion.a
              href="https://www.linkedin.com/in/janeeshpalsingh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={iconVariants}
              className="block p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              <Linkedin
                className="w-6 h-6 md:w-8 md:h-8"
                color="#A78BFA"
                strokeWidth={1.5}
              />
            </motion.a>
          </motion.div>
          <motion.div className="mx-auto" variants={iconVariants}>
            <motion.a
              href="https://github.com/janeesh27"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={iconVariants}
              className="block p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              <Github className="w-6 h-6 md:w-8 md:h-8" color="#A78BFA" strokeWidth={1.5} />
            </motion.a>
          </motion.div>
          <motion.div className="mx-auto" variants={iconVariants}>
            <motion.a
              href="https://twitter.com/_janeesh_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={iconVariants}
              className="block p-2 rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              <Twitter className="w-6 h-6 md:w-8 md:h-8" color="#A78BFA" strokeWidth={1.5} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
