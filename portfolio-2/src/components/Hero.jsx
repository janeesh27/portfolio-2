"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import TypingElement from "./Typingelement";

const Hero = () => {
  return (
    <>
      <div className="text-center transform translate-y-[30vh] mx-auto p-4">
        <div className="text-[1.5rem] md:text-[2rem] text-[#66FCF1]">
          <TypingElement message="Heello There..." />
        </div>
        <p className="text-[1.25rem] md:text-[1.5rem] text-[#C5C6C7]">
          I am Janeesh, a self-taught Web Developer with a knack for clean code.
        </p>
      </div>
      <div className="text-center transform translate-y-[50vh] mx-auto p-4">
        <div className="grid grid-flow-col sm:w-[30%] sm:mx-auto ">
          <div className="mx-auto">
            <a href="https://www.linkedin.com/in/janeeshpalsingh">
              <FaLinkedinIn className="w-4 h-4" fill="#66FCF1" />
            </a>
          </div>
          <div className="mx-auto">
            <a href="https://github.com/janeesh27">
              <FaGithub className="w-4 h-4" fill="#66FCF1" />
            </a>
          </div>
          <div className="mx-auto">
            <a href="https://twitter.com/_janeesh_">
              <FaTwitter className="w-4 h-4" fill="#66FCF1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
