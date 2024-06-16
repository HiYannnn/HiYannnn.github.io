"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 mb-32">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&rsquo;m Haiyan{" "}
            </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={[
                "Data Analyst",
                1000,
                "BI Developer",
                1000,
                "Data Engineer",
                1000,
                "BI Analyst",
                1000,
                "ProductManager",
                1000,
                "Accountant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
            I am currently a Data Analyst student at Hyper Island Stockholm.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Let&rsquo;s Connect
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Completed Course Tracks
              </span>
            </Link>
            {/* Certificate container with icon */}
            <div style={{ display: 'flex', marginTop: '40px' }}>
              <div style={{ marginRight: '20px' }}>
                <a href="https://www.datacamp.com/certificate/DAA0016310169827" target="_blank">
                  <img src="/images/data_analyst_associate_badge.svg" alt="Data Analyst Associate Badge" style={{ width: '120px', height: '120px' }}/>
                </a>
              </div>
              <div style={{ marginRight: '20px' }}>
                <a href="https://www.datacamp.com/certificate/SQA0010905237449" target="_blank">
                  <img src="/images/sql_associate_badge.svg" alt="Associate SQL Badge" style={{ width: '120px', height: '120px' }}/>
                </a>
              </div>
              <div style={{ marginRight: '20px' }}>
                <a href="https://www.datacamp.com/certificate/DEA0012470083529" target="_blank">
                  <img src="/images/data_engineer_associate_badge.svg" alt="Data Engineer Associate Badge" style={{ width: '120px', height: '120px' }}/>
                </a>
              </div>
              <div style={{ marginRight: '20px' }}>
                <a href="https://www.datacamp.com/certificate/DSA0014809456740" target="_blank">
                  <img src="/images/data_scientist_associate_banner.svg" alt="Data Scientist Associate Badge" style={{ width: '120px', height: '120px' }}/>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="bg-[#181818] lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/jag.png"
              alt="jag image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
