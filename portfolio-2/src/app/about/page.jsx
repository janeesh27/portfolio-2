"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, GraduationCap, Code2, Palette } from "lucide-react";

const page = (children) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="py-4 transform translate-y-[5vh] mx-[1rem] sm:mx-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center"
          variants={titleVariants}
        >
          <h1 className="text-[#c5c6c7] text-[2.5rem] md:text-[3.5rem] font-heading font-bold mb-4 tracking-tight">
            About Me
          </h1>
          <div className="w-20 h-1 bg-[#66FCF1] mx-auto rounded-full"></div>
        </motion.div>
        <motion.div
          className="pt-[2rem] text-left text-[1rem] sm:text-[1.25rem] text-[#C5C6C7] leading-relaxed max-w-3xl mx-auto"
          variants={paragraphVariants}
        >
          <motion.p
            variants={paragraphVariants}
            className="mb-6 text-[1.125rem] sm:text-[1.375rem]"
          >
            I'm a Frontend Developer experienced in building seamless user
            interfaces. Proficient in HTML, CSS, and JavaScript, I love creating
            engaging web experiences. With a keen eye for design and expertise in
            frameworks like React and Next.js, I'm well-equipped to bring your
            vision to life.
          </motion.p>
          <motion.div
            variants={paragraphVariants}
            className="mb-4 flex items-start gap-3"
          >
            <GraduationCap className="w-6 h-6 text-[#66FCF1] mt-1 flex-shrink-0" strokeWidth={1.5} />
            <p>
              I have completed my Bachelors from{" "}
              <motion.a
                className="italic text-[#66FCF1] underline"
                href="https://www.thapar.edu/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, color: "#45A29E" }}
                transition={{ duration: 0.2 }}
              >
                Thapar Institute of Engineering & Technology
              </motion.a>
              .
            </p>
          </motion.div>
          <motion.div
            variants={paragraphVariants}
            className="mb-4 flex items-start gap-3"
          >
            <Code2 className="w-6 h-6 text-[#66FCF1] mt-1 flex-shrink-0" strokeWidth={1.5} />
            <p>
              Some of the technologies I usually work with are React.js, NextJS,
              HTML5, CSS3, SCSS, JavaScript, Node.js, and MongoDB, and for
              designing, I mainly use Figma.
            </p>
          </motion.div>
          <motion.div
            variants={paragraphVariants}
            className="flex items-start gap-3"
          >
            <Palette className="w-6 h-6 text-[#66FCF1] mt-1 flex-shrink-0" strokeWidth={1.5} />
            <p>
              With solid front-end and UI/UX design basics, I am currently focused
              on learning more about backend technologies.
            </p>
          </motion.div>
        </motion.div>
        <div className="h-8"></div>
        <motion.div
          className="text-center text-[#C5C6C7] text-[1rem] sm:text-[1.5rem] mt-8"
          variants={contactVariants}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-4"
          >
            You can reach me here!
          </motion.p>
          <motion.a
            href="mailto:janeesh.tin@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#66FCF1] text-[#66FCF1] rounded-lg hover:bg-[#66FCF1] hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Mail className="w-5 h-5" strokeWidth={1.5} />
            janeesh.tin@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default page;
