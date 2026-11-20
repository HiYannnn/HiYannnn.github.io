"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 12,
    title: "Jobee Ops",
    description: "A local job application tracker. Paste a posting, attach the CV you submitted, and log the job as Applied.",
    image: "/images/projects/jobee-logo.svg",
    tag: ["All", "Web"],
    demoUrl: "/jobee-ops",
    demoLabel: "Try the Jobee Ops demo",
  },
  {
    id: 13,
    title: "Träna Matte",
    description: "Space-themed maths practice with short challenges, progress tracking, and lifetime points.",
    tag: ["All", "Vibe Coding"],
    gitUrl: "https://github.com/HiYannnn/Vibe-Coding/tree/main/trana-matte",
    demoUrl: "https://trana-matte.vercel.app",
    demoLabel: "Try the maths game",
  },
  {
    id: 14,
    title: "Swedish Election Guide",
    description: "A guide to Sweden’s 2026 elections in Swedish, English, and Chinese.",
    tag: ["All", "Vibe Coding"],
    gitUrl: "https://github.com/HiYannnn/Vibe-Coding/tree/main/sweden-election-guide",
    demoUrl: "https://minvalguide.vercel.app",
    demoLabel: "Open the guide",
  },
  {
    id: 15,
    title: "Farsta Uppkörning",
    description: "Plan driving practice in Farsta with maps, locally saved drives, and a shared route library.",
    tag: ["All", "Vibe Coding"],
    gitUrl: "https://github.com/HiYannnn/Vibe-Coding/tree/main/farsta-uppkorning",
    demoUrl: "https://farsta-uppkorning.vercel.app",
    demoLabel: "Open the driving tool",
  },
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Webdesign project using React.js, Tailwind CSS, and Framer Motion.",
    image: "./images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 2,
    title: "Stockholm City Housing Prices",
    description: "Project 2 description",
    image: "./images/projects/housing.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 3,
    title: "Stockholm Weather Analysis",
    description: "Project 3 description",
    image: "./images/projects/WEATHER.jpg",
    tag: ["All", "SQL"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 4,
    title: "Spotify Top 3000 Songs Analysis",
    description: "Project 4 description",
    image: "./images/projects/spotify-logo.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 5,
    title: "Simple API-Wine Analysis",
    description: "Project 5 description",
    image: "./images/projects/wines.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 6,
    title: "All Tableau Visualization",
    description: "Project 6 description",
    image: "./images/projects/tableau.jpg",
    tag: ["All", "Tableau"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 7,
    title: "Nobel-Prize Analysis",
    description: "Project 7 description",
    image: "./images/projects/nobel-prize.jpeg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 8,
    title: "Netflix Top Popularity Analysis",
    description: "Project 8 description",
    image: "./images/projects/netflix.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 9,
    title: "IMDB Analysis",
    description: "Project 9 description",
    image: "./images/projects/imdb.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 10,
    title: "Full-stack Roadmap",
    description: "Project 10 description",
    image: "./images/projects/flight.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
  {
    id: 11,
    title: "Lego Sets Analysis",
    description: "Project 11 description",
    image: "./images/projects/Cover-Lego.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/HiYannnn/HiYannnn.github.io",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mx-8 mt-8 md:mx-16 lg:mx-32 py-4">
      <h2 className="mt-20 mb-3 text-center text-4xl font-bold text-white">
        Projects
      </h2>
      <p className="mb-4 text-center text-sm text-[#ADB7BE] md:text-base md:whitespace-nowrap">
        A selection of my data projects and AI-assisted builds, with more on the way.
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            name="All"
            onClick={handleTagChange}
            isSelected={tag === "All"}
          />
          <ProjectTag
            name="Vibe Coding"
            onClick={handleTagChange}
            isSelected={tag === "Vibe Coding"}
          />
          <ProjectTag
            name="Web"
            onClick={handleTagChange}
            isSelected={tag === "Web"}
          />
          <ProjectTag
            name="Python"
            onClick={handleTagChange}
            isSelected={tag == "Python"}
          />
          <ProjectTag
            name="SQL"
            onClick={handleTagChange}
            isSelected={tag == "SQL"}
          />
          <ProjectTag
            name="Tableau"
            onClick={handleTagChange}
            isSelected={tag == "Tableau"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                demoUrl={project.demoUrl}
                demoLabel={project.demoLabel}
              />
            </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;