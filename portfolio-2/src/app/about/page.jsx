import React from "react";

const page = (children) => {
  return (
    <>
      <div className="py-4 transform translate-y-[5vh] mx-[1rem] sm:mx-8">
        <h1 className="text-center text-[#c5c6c7] text-[2rem]">About Me</h1>
        <div className="pt-[1rem] text-left text-[1rem] sm:text-[1.5rem] text-[#C5C6C7]">
          I'm a Frontend Developer experienced in building seamless user
          interfaces. Proficient in HTML, CSS, and JavaScript, I love creating
          engaging web experiences. With a keen eye for design and expertise in
          frameworks like React and Nextjs , I'm well-equipped to bring your
          vision to life.<div className="h-4"></div>I have completed my
          Bachelors
          <a className="italic text-[#66FCF1]" href="https://www.thapar.edu/">
            Thapar Institute of Engineering & Technology.
          </a>
          <div className="h-4"></div>
          Some of the technologies I usually work with are React.js, NextJS,
          HTML5, CSS3, SCSS, JavaScript, Node.js, and MongoDB, and for
          designing, I mainly use Figma.
          <div className="h-4"></div>
          With solid front-end and UI/UX design basics, I am currently focused
          on learning more about backend technologies.
        </div>
        <div className="h-8"></div>
        <div className="text-center text-[#C5C6C7] text-[1rem] sm:text-[1.5rem]">
          You can reach me here!<br></br>
          <span className="underline hover:text-[#66FCF1]">
            janeesh.tin@gmail.com
          </span>
        </div>
      </div>
    </>
  );
};

export default page;
