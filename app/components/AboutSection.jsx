"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Office Suite</li>
        <li>SQL</li>
        <li>Python</li>
        <li>Tableau</li>
        <li>Power BI</li>
        <li>Google Analytics, Mixpanel, LuckyOrange, Hotjar</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Analyst, Hyper Isalnd Stockholm</li>
        <li>Accounting(ACCA),Guangxi University of Finance and Economics, China</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Analyst Associate,DataCamp</li>
        <li>SQL Associate,DataCamp</li>
        <li>Data Engineer Associate,DataCamp</li>
        <li>Data Scientist Associate,DataCamp</li>
        <li>Data Literacy Certificate,DataCamp</li>
        <li>AI Fundamentals Certificate,DataCamp</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-16 lg:py-16" id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16 relative">
        <Image src="/images/dec.jpg" width={500} height={700} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
            I am a dedicated Data Analyst deeply engaged in the exploration of emerging technologies. 
            I have competence in uncovering and applying data insights to make impactful decisions. I am a quick 
            learner and I actively seek opportunities to expand my knowledge and technical skill set. My approach
            is structured, and I am accustomed to managing multiple projects and teams. I can work both independently
            and as a collaborative team member. My focus on understanding user requirements ensures that my data 
            analysis is consistently aligned with real-world situation. I am excited to work with others to develop
            impactful data-driven solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;