import { CiGlobe } from "react-icons/ci";
import React from "react";
import Link from "next/link";
import { EDUCATION, PROJECTS, SKILLS } from "../../public/data/info";
// import ProjectCard from "./ui/project-card";
// import { Badge } from "./ui/badge";
import SocialIcons from "./social-icons";
import { motion } from "motion/react";
import { HoverEffect } from "./ui/card-hover-effect";
import { Badge } from "./ui/badge";
import AnimatedUnderline from "./animated-underline";

const VARIANTS_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION_SECTION = {
    duration: 0.3,
};

const CV = () => {
    return (
        <motion.main
            className="space-y-14 mb-10 mt-6 md:mt-20"
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            {/**Header */}
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <div className="text-xl text-black dark:text-white mb-5 font-bold">
                    Keshav Kumar
                </div>
                <div className="flex-1">
                    <div className="text-zinc-600 dark:text-zinc-400">
                        Full Stack web developer
                        <br />
                        Interested in artificial intelligence and machine
                        learning.
                        <div className="flex flex-row gap-2 mt-2 items-center">
                            <CiGlobe />
                            <Link href="/" className="text-sm hover:underline">
                                Jharkhand, India
                            </Link>
                        </div>
                        <div className="mt-4">
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/**About */}
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <AnimatedUnderline>About</AnimatedUnderline>
                <p className="text-zinc-600 dark:text-zinc-400">
                    With expertise spanning web development, machine learning,
                    and occasional app development, I craft robust technical
                    solutions across multiple domains.
                </p>
            </motion.section>

            {/**Projects */}
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <AnimatedUnderline>Projects</AnimatedUnderline>
                <HoverEffect items={PROJECTS} />
            </motion.section>

            {/**Skills */}
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <AnimatedUnderline>Skills</AnimatedUnderline>
                <div className="mb-7">
                    {SKILLS.map((skill) => (
                        <div
                            className="flex flex-row gap-1 mb-2"
                            key={skill.type}
                        >
                            {" "}
                            <div>
                                <Badge
                                    variant="secondary"
                                    className="text-zinc-300 dark:text-zinc-200"
                                >
                                    {skill.type}
                                </Badge>
                            </div>
                            <div className="flex flex-wrap gap-0.5">
                                {skill.contents.map((content) => (
                                    <Badge
                                        variant="outline"
                                        key={content}
                                        className="text-zinc-500 dark:text-zinc-400"
                                    >
                                        {content}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/**Education */}
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <AnimatedUnderline>Education</AnimatedUnderline>
                <div className="flex flex-col space-y-2">
                    {EDUCATION.map((job) => (
                        <Link
                            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={job.id}
                        >
                            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                                <div className="relative flex w-full flex-row justify-between">
                                    <div>
                                        <h4 className="font-normal dark:text-zinc-100">
                                            {job.school}
                                        </h4>
                                        <p className="text-zinc-500 dark:text-zinc-400">
                                            {job.degree}
                                        </p>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-400">
                                        {job.start} - {job.end}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.section>
        </motion.main>
    );
};

export default CV;
