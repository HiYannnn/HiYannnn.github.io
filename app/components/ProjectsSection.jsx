"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "./images/projects/portfolio.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Stockholm city Housing Prices",
    description: "Project 2 description",
    image: "./images/projects/housing.png",
    tag: ["All", "Python"],
  },
  {
    id: 3,
    title: "Stockholm Weather Analysis",
    description: "Project 3 description",
    image: "./images/projects/WEATHER.jpg",
    tag: ["All", "SQL"],
  },
  {
    id: 4,
    title: "Spotify Top 3000 Songs Analysis",
    description: "Project 4 description",
    image: "./images/projects/spotify-logo.jpg",
    tag: ["All", "Python"],
  },
  {
    id: 5,
    title: "Simple API-Wine Analysis",
    description: "Project 5 description",
    image: "./images/projects/wines.jpg",
    tag: ["All", "Python"],
  },
  {
    id: 6,
    title: "All Tableau Visualization",
    description: "Project 6 description",
    image: "./images/projects/tableau.jpg",
    tag: ["All", "Tableau"],
  },
  {
    id: 7,
    title: "Nobel-Prize Analysis",
    description: "Project 7 description",
    image: "./images/projects/nobel-prize.jpeg",
    tag: ["All", "Python"],
  },
  {
    id: 8,
    title: "Netflix Top Popularity Analysis",
    description: "Project 8 description",
    image: "./images/projects/netflix.png",
    tag: ["All", "Python"],
  },
  {
    id: 9,
    title: "IMDB Analysis",
    description: "Project 9 description",
    image: "./images/projects/imdb.jpg",
    tag: ["All", "Python"],
  },
  {
    id: 10,
    title: "Full-stack Roadmap",
    description: "Project 10 description",
    image: "./images/projects/flight.jpg",
    tag: ["All", "Python"],
  },
  {
    id: 11,
    title: "Lego Sets Analysis",
    description: "Project 11 description",
    image: "./images/projects/Cover-Lego.jpg",
    tag: ["All", "Python"],
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
      <h2 className="text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-8">
        My Recent Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            name="All"
            onClick={handleTagChange}
            isSelected={tag === "All"}
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
              key={index}
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
                previewUrl={project.previewUrl}
              />
            </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;