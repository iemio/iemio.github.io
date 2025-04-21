import { CiGlobe } from "react-icons/ci";
import React from "react";
import Link from "next/link";
import { PROJECTS, SKILLS } from "@/app/data";
import ProjectCard from "./ui/project-card";
import { Badge } from "./ui/badge";

const CV = () => {
    return (
        <>
            <div className="text-3xl text-black dark:text-white mb-4 font-bold">
                Keshav
            </div>
            <div className="flex-1">
                <p className="text-zinc-600 dark:text-zinc-400 mb-7">
                    Passionate about solving real world problems.
                    <br /> Interested in artificial intelligence and machine
                    learning.
                    <Link href="/" className="text-sm">
                        <CiGlobe />
                        Jharkhand, India
                    </Link>
                </p>
            </div>
            <div className="text-xl text-black dark:text-white mb-4">About</div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-7">
                With expertise spanning web development, machine learning, and
                occasional app development, I craft robust technical solutions
                across multiple domains.
            </p>
            <div className="text-xl text-black dark:text-white mb-4">
                Work experience
            </div>
            <div className="text-xl text-black dark:text-white mb-4">
                Education
            </div>
            <div className="text-xl text-black dark:text-white mb-4">
                Skills
            </div>
            <div className="mb-7">
                {SKILLS.map((skill) => (
                    <div className="flex flex-row gap-1 mb-2">
                        {" "}
                        <div>
                            <Badge>{skill.type}</Badge>
                        </div>
                        <div className="flex flex-wrap gap-0.5">
                            {skill.contents.map((content) => (
                                <Badge variant="secondary">{content}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-xl text-black dark:text-white mb-4">
                Projects
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {PROJECTS.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </>
    );
};

export default CV;
