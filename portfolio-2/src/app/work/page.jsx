"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";

// async function getdata() {
//   const query = `*[_type == 'work']`;
//   //const url = `https://n8a3iqt4.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27work%27%5D`;
//   // const res = await fetch(url);
//   //const data = await res.json();
//   const data = await client.fetch(query);
//   return data;
// }

const page = () => {
  const items = [
    {
      projecttype: "Personal Project",
      title: "Apple Landing Page Clone",
      imgsrc: "/applelandingpage.png",
      tech: "Nextjs | SCSS",
      discription:
        "An Apple-inspired Land Page Clone powered by Next.js and elevated with SCSS styling, delivering a seamless blend of cutting-edge web development and minimalist design aesthetics.",
      url: "https://apple-landing-page-look-alike-pg5u.vercel.app",
    },
    {
      projecttype: "zus.network",
      title: "Zus Business Website",
      imgsrc: "/zusnetwork.png",
      tech: "Nextjs | SCSS | Framer Motion",
      discription: "Company website revamped using Nextjs & SCSS.",
      url: "https://zus.network",
    },
    {
      projecttype: "Personal Project",
      title: "saucekudasai.com",
      imgsrc: "/saucekudasai.png",
      tech: "Nextjs | TailwindCSS | GraphQL | Figma",
      discription:
        "An anime search engine that fetches anime info and tells you which anime, which episode, and the exact moment this scene appears.",
      url: "https://saucekudasai.com/",
    },
    {
      projecttype: "Freelancing",
      title: "HGSM Coaching Classes",
      imgsrc: "/hgsmwebsite.png",
      tech: "Nextjs | TailwindCSS | Canva & Figma",
      discription:
        "Business website made for client using Nextjs & styled using TailwindCSS. For designing i have used Figma and Canva.",
      url: "https://hgsmandolia.netlify.app",
    },
    {
      projecttype: "Ecomexperts.io",
      title: "Shopify Store ",
      imgsrc: "/manlyman.png",
      tech: "Shopify & Liquid | CSS | Javascript",
      discription:
        "A Shopify store I worked on while working for ecomexperts.io",
      url: "https://manlymanco.com",
    },
    {
      projecttype: "Practice",
      title: "Clearnox Landing Page ",
      imgsrc: "/clearnox.png",
      tech: "React | TailwindCSS",
      discription:
        "A Landing page template that I made with Reactjs and TailwindCSS. Feel free to use this for your own projects.",
      url: "https://clearknox.netlify.app",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="transform translate-y-[7vh] mx-[1rem] sm:mx-[10rem] text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="mb-4"
          variants={titleVariants}
        >
          <h1 className="text-[#C5C6C7] font-heading font-bold text-[2.5rem] md:text-[3.5rem] tracking-tight">
            Projects
          </h1>
          <div className="w-20 h-1 bg-[#66FCF1] mx-auto rounded-full mt-4"></div>
        </motion.div>
        <motion.div
          className="text-[#C5C6C7] text-[1rem] sm:text-[1.25rem] pt-4 leading-relaxed max-w-3xl mx-auto"
          variants={titleVariants}
        >
          Welcome to my Projects Showcase, where I demonstrate my proficiency in
          creating engaging and user-friendly web experiences. These projects
          exemplify my expertise in crafting seamless interfaces with a focus on
          user-centric design principles. Each project below showcases my
          ability to implement responsive layouts, optimize performance, and
          deliver an exceptional user experience.
        </motion.div>
        <div className="mt-8 sm:mt-20">
          {items.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-y-6 mb-8 sm:mb-16 p-6 sm:p-8 rounded-xl border border-[#1f2833] hover:border-[#66FCF1] bg-[#0b0c10] hover:bg-[#1a1a1a] transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="flex items-center gap-2 text-[#66FCF1] text-[18px] sm:text-[1.25rem] font-semibold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Folder className="w-5 h-5" strokeWidth={1.5} />
                {project.projecttype}
              </motion.div>
              <motion.h2
                className="text-[#C5C6C7] text-[24px] sm:text-[2rem] font-heading font-bold tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h2>

              <motion.div
                className="overflow-hidden rounded-xl border border-[#1f2833] relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.imgsrc}
                  alt={project.title}
                  className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </motion.div>
              <motion.p
                className="text-[#66FCF1] font-bold rounded-md text-[16px] sm:text-[18px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Technologies: {project.tech}
              </motion.p>
              <motion.p
                className="text-[#c5c6c7] text-left sm:text-[20px] leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {project.discription}
              </motion.p>

              <motion.a
                href={project.url}
                target="_blank"
                className="inline-flex items-center gap-2 border-2 border-[#66FCF1] w-fit px-6 py-3 font-semibold text-[#66FCF1] rounded-lg text-center group"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#66FCF1",
                  color: "#000",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Visit Project
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default page;
