import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-center transform translate-y-[30vh] mx-auto p-4">
        <p className="text-[1.5rem] md:text-[2rem] text-[#66FCF1]">
          Hello There!
        </p>
        <p className="text-[1.25rem] md:text-[1.5rem] text-[#C5C6C7]">
          I am Janeesh, a self-taught Web Developer with a knack for clean code.
        </p>
      </div>
      <div className="text-center transform translate-y-[50vh] mx-auto p-4">
        <div className="grid grid-flow-col sm:w-[30%] sm:mx-auto">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
