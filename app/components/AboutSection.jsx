"use client";

import { useState } from "react";
import Image from "next/image";
import { FaDatabase, FaMicrosoft } from "react-icons/fa";
import {
  SiFigma, SiGithub, SiGoogleanalytics, SiGooglebigquery, SiGoogletagmanager,
  SiHotjar, SiLooker, SiMicrosoftexcel, SiMixpanel, SiPowerbi, SiPython, SiTableau,
} from "react-icons/si";
import { Activity, Citrus } from "lucide-react";
import TabButton from "./TabButton";

const about = {
  image: "/images/about.png",
  headline: "Business & Data & Product Analyst",
  bio: [
    "I turn data into actionable insights that help businesses make better decisions. With experience in transaction data analysis, data quality validation, and business reporting, I enjoy connecting data with real business needs to find practical solutions.",
    "My background in e-commerce and product management gives me a strong business perspective and a user-centered approach. I'm naturally curious, enjoy exploring new technologies and AI tools, and like working with people from different backgrounds to solve problems and improve the way things work.",
  ],
};

const skillIcons = {
  SQL: { Icon: FaDatabase, color: "#a78bfa" },
  Python: { Icon: SiPython, color: "#60a5fa" },
  Tableau: { Icon: SiTableau, color: "#60a5fa" },
  "Power BI": { Icon: SiPowerbi, color: "#facc15" },
  Excel: { Icon: SiMicrosoftexcel, color: "#4ade80" },
  "Microsoft Office": { Icon: FaMicrosoft, color: "#f87171" },
  "Google Analytics": { Icon: SiGoogleanalytics, color: "#fb923c" },
  BigQuery: { Icon: SiGooglebigquery, color: "#60a5fa" },
  "Looker Studio": { Icon: SiLooker, color: "#60a5fa" },
  Mixpanel: { Icon: SiMixpanel, color: "#a78bfa" },
  LuckyOrange: { Icon: Citrus, color: "#fb923c" },
  Hotjar: { Icon: SiHotjar, color: "#fb7185" },
  AppsFlyer: { Icon: Activity, color: "#2dd4bf" },
  Figma: { Icon: SiFigma, color: "#c084fc" },
  GitHub: { Icon: SiGithub, color: "#f8fafc" },
  "Google Tag Manager": { Icon: SiGoogletagmanager, color: "#60a5fa" },
};

const tabs = [
  {
    title: "Skills",
    items: Object.keys(skillIcons),
  },
  {
    title: "Education",
    items: [
      "Data Analyst program, Hyper Island, Stockholm",
      "Accounting (ACCA), Guangxi University of Finance and Economics, China",
    ],
  },
  {
    title: "Certifications",
    items: [
      "Data Analyst Associate, DataCamp",
      "SQL Associate, DataCamp",
      "Data Engineer Associate, DataCamp",
      "Data Scientist Associate, DataCamp",
      "Data Literacy Certificate, DataCamp",
      "AI Fundamentals Certificate, DataCamp",
    ],
  },
];

export default function AboutSection() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section id="about" className="mt-16 px-4 py-8 text-white sm:py-16 lg:px-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-center xl:gap-16">
        <Image
          src={about.image}
          alt=""
          width={700}
          height={800}
          className="mx-auto h-auto w-full max-w-lg rounded-2xl"
        />
        <div>
          <h2 className="text-4xl font-bold">About Me</h2>
          <div aria-hidden="true" className="mt-3 h-1 w-10 bg-purple-400" />
          <p className="mt-5 text-xl font-semibold text-purple-200">{about.headline}</p>
          <div className="mt-4 space-y-3 leading-relaxed text-[#d3ccd8]">
            {about.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-6 flex flex-wrap">
            {tabs.map(({ title }, index) => (
              <TabButton key={title} active={index === active} selectTab={() => setActive(index)}>
                {title}
              </TabButton>
            ))}
          </div>
          <ul aria-label={current.title} className={active === 0 ? "mt-5 flex flex-wrap gap-2" : "mt-5 list-disc space-y-2 pl-5 text-[#d3ccd8]"}>
            {current.items.map((item) => {
              const skill = active === 0 ? skillIcons[item] : null;
              return (
                <li
                  key={item}
                  className={active === 0 ? "inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm" : undefined}
                >
                  {skill && <skill.Icon aria-hidden="true" className="h-[18px] w-[18px] shrink-0" style={{ color: skill.color }} />}
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
