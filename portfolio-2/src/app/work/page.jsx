import React from "react";
import { client } from "@/utils/configSanity";

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
      imgsrc: "/Clearnox.png",
      tech: "React | TailwindCSS",
      discription:
        "A Landing page template that I made with Reactjs and TailwindCSS. Feel free to use this for your own projects.",
      url: "https://clearknox.netlify.app",
    },
  ];

  return (
    <>
      <div className="transform translate-y-[7vh] mx-[1rem] sm:mx-[10rem] text-center">
        <div className="text-[#C5C6C7] font-semibold text-[2rem]">Projects</div>
        <div className="text-[#C5C6C7] text-[1rem] sm:text-[1.5rem] pt-4">
          Welcome to my Projects Showcase, where I demonstrate my proficiency in
          creating engaging and user-friendly web experiences. These projects
          exemplify my expertise in crafting seamless interfaces with a focus on
          user-centric design principles. Each project below showcases my
          ability to implement responsive layouts, optimize performance, and
          deliver an exceptional user experience.
        </div>
        <div className="mt-8 sm:mt-20 ">
          {items.map((project, index) => (
            <div key={index} className="flex flex-col space-y-8 mb-8 sm:mb-16">
              <p className="text-[#c5c6c7] text-[20px] sm:text-[2rem]">
                {project.projecttype}
              </p>
              <h2 className="text-[#C5C6C7] text-[24px] sm:text-[2rem]">
                {project.title}
              </h2>

              <img src={project.imgsrc} alt={project.title} />
              <p className="text-[#c5c6c7] font-bold rounded-md">
                Technologies: {project.tech}
              </p>
              <p className="text-[#c5c6c7] text-left sm:text-[20px]">
                {project.discription}
              </p>

              <a
                href={project.url}
                target="_blank"
                className="border-[2px] border-[#c5c6c7] w-[130px] p-2 font-semibold text-[#c5c6c7]"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
