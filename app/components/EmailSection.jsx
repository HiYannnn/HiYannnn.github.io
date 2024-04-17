"use client";
import React from "react";
import Link from "next/link";
import { Linkedin, Mail, Github } from "lucide-react";
import NavBar from "../components/Navbar";
import { Card } from "../components/Card";

const socials = [
    {
        icon: <Linkedin size={20} />,
        href: "https://linkedin.com/in/haiyanqin",
        label: "LinkedIn",
        handle: "@haiyanqin",
    },
    {
        icon: <Mail size={20} />,
        href: "mailto:haiyan.eriksson@gmail.com",
        label: "Email",
        handle: "haiyan.eriksson@gmail.com",
    },
    {
        icon: <Github size={20} />,
        href: "https://github.com/hiyannnn",
        label: "Github",
        handle: "HiYannnn",
    },
];

const EmailSection = () => {
    return (
        <section id="contact" className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <NavBar />
            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto text-center">
                <h5 className="text-xl font-bold text-white my-2">Let&rsquo;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I am currently seeking new opportunities, and my inbox is always open.
                    Whether you have a question or simply wish to greet me, I will do my
                    best to get back to you!
                </p>
                <div className="grid grid-cols-1 gap-8 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                    {socials.map((s, index) => (
                        <Card key={index}>
                            <Link href={s.href} target="_blank" className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
                                <span className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true" />
                                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {s.icon}
                                </span>
                                <div className="z-10 flex flex-col items-center">
                                    <span className="lg:text-l font-medium duration-150 xl:text-xl text-zinc-200 group-hover:text-white font-display">
                                        {s.handle}
                                    </span>
                                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {s.label}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
