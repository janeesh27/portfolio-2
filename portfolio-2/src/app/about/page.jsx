"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, GraduationCap, Code2, Palette, Layers, Database, Cloud, GitBranch } from "lucide-react";

const page = (children) => {
  const techStack = {
    "Frontend": [
      "React.js", "Next.js", "React Native", "HTML5", "CSS3", 
      "Tailwind CSS", "JavaScript", "Vite", "Webpack", "Redux"
    ],
    "Backend": [
      "Node.js", "Python", "RESTful APIs", "Express.js",
      "Server-Side Rendering (SSR)", "Static Site Generation (SSG)"
    ],
    "Database & Cloud": [
      "MongoDB", "AWS S3", "JWT Authentication", "Firebase"
    ],
    "Tools & Others": [
      "Git", "GitHub Actions", "CI/CD", "Figma", "Framer Motion",
      "Agile", "SEO Optimization"
    ]
  };

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

  const techVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
          <div className="w-20 h-1 bg-[#A78BFA] mx-auto rounded-full"></div>
        </motion.div>
        <motion.div
          className="pt-[2rem] text-left text-[1rem] sm:text-[1.25rem] text-[#C5C6C7] leading-relaxed max-w-3xl mx-auto"
          variants={paragraphVariants}
        >
          <motion.p
            variants={paragraphVariants}
            className="mb-6 text-[1.125rem] sm:text-[1.375rem]"
          >
            I'm a Full Stack Developer experienced in building scalable web applications
            and eCommerce platforms. I specialize in developing high-performance digital
            solutions with expertise in modern web technologies, cloud infrastructure, and
            creating seamless user experiences that drive business growth.
          </motion.p>
          <motion.div
            variants={paragraphVariants}
            className="mb-4 flex items-start gap-3"
          >
            <GraduationCap className="w-6 h-6 text-[#A78BFA] mt-1 flex-shrink-0" strokeWidth={1.5} />
            <p>
              I have completed my Bachelors from{" "}
              <motion.a
                className="italic text-[#A78BFA] underline"
                href="https://www.thapar.edu/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, color: "#8B5CF6" }}
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
            <Palette className="w-6 h-6 text-[#A78BFA] mt-1 flex-shrink-0" strokeWidth={1.5} />
            <p>
              I specialize in building modern, responsive applications with a focus on
              performance optimization, SEO, and exceptional user experiences. My expertise
              spans from React Native mobile apps to Next.js-based eCommerce platforms.
            </p>
          </motion.div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className="mt-12 max-w-5xl mx-auto"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-8" variants={titleVariants}>
            <h2 className="text-[#c5c6c7] text-[2rem] md:text-[2.5rem] font-heading font-bold mb-4 tracking-tight">
              Tech Stack
            </h2>
            <div className="w-16 h-1 bg-[#A78BFA] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                className="bg-[#0b0c10] border border-[#1f2833] rounded-xl p-6 hover:border-[#A78BFA] transition-all duration-300"
                variants={techVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category === "Frontend" && <Layers className="w-6 h-6 text-[#A78BFA]" strokeWidth={1.5} />}
                  {category === "Backend" && <Code2 className="w-6 h-6 text-[#A78BFA]" strokeWidth={1.5} />}
                  {category === "Database & Cloud" && <Database className="w-6 h-6 text-[#A78BFA]" strokeWidth={1.5} />}
                  {category === "Tools & Others" && <GitBranch className="w-6 h-6 text-[#A78BFA]" strokeWidth={1.5} />}
                  <h3 className="text-[#C5C6C7] text-xl font-heading font-semibold">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1.5 bg-[#1f2833] text-[#C5C6C7] rounded-md text-sm hover:bg-[#A78BFA] hover:text-black transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="h-16"></div>
        
        {/* Separator */}
        <motion.div
          className="max-w-3xl mx-auto my-12"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent"></div>
        </motion.div>

        <motion.div
          className="text-center text-[#C5C6C7] mt-12"
          variants={contactVariants}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-6 text-lg"
          >
            You can reach me here!
          </motion.p>
          <motion.a
            href="mailto:janeesh.tin@gmail.com"
            className="inline-block text-[#A78BFA] hover:text-[#8B5CF6] underline underline-offset-4 text-lg sm:text-xl font-medium transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            janeesh.tin@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
};

export default page;
