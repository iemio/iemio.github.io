"use client";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { Magnetic } from "@/components/ui/magnetic";
import Link from "next/link";
import { PROJECTS, WORK_EXPERIENCE, EMAIL, SOCIAL_LINKS } from "./data";
import ProjectCard from "@/components/ui/project-card";
import { useTransitionRouter } from "next-view-transitions";
import LenisWrapper from "@/components/lenisWrapper";
import ResumeButton from "@/components/ui/resumeButton";

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

function MagneticSocialLink({
    children,
    link,
}: {
    children: React.ReactNode;
    link: string;
}) {
    return (
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
            <a
                href={link}
                className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
                {children}
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                >
                    <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </a>
        </Magnetic>
    );
}

export default function Personal() {
    const router = useTransitionRouter();

    function slideInOut() {
        document.documentElement.animate(
            [
                { opacity: 1, transform: "translateY(0)" },
                { opacity: 0.2, transform: "translateY(-35%)" },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87,0,0.13,1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        );
        document.documentElement.animate(
            [
                { clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)" },
                { clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)" },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87,0,0.13,1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }

    return (
        <LenisWrapper>
            <motion.main
                className="space-y-24"
                variants={VARIANTS_CONTAINER}
                initial="hidden"
                animate="visible"
            >
                <motion.section
                    variants={VARIANTS_SECTION}
                    transition={TRANSITION_SECTION}
                >
                    <div className="flex-1">
                        <p className="text-zinc-600 dark:text-zinc-400 mb-7">
                            Passionate about solving real world problems.
                            <br /> Interested in artificial intelligence and
                            machine learning.
                        </p>
                        <ResumeButton />
                    </div>
                </motion.section>
                <motion.section
                    variants={VARIANTS_SECTION}
                    transition={TRANSITION_SECTION}
                >
                    <h3 className="mb-5 text-lg font-medium">Some Projects</h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {PROJECTS.map((project) => (
                            <ProjectCard project={project} key={project.id} />
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    variants={VARIANTS_SECTION}
                    transition={TRANSITION_SECTION}
                >
                    <Link
                        href="/timeline"
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/timeline", {
                                onTransitionReady: slideInOut,
                            });
                        }}
                    >
                        <h3 className="mb-5 text-lg font-medium">
                            Work Experience
                        </h3>
                    </Link>
                    <div className="flex flex-col space-y-2">
                        {WORK_EXPERIENCE.map((job) => (
                            <Link
                                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                                href={job.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={job.id}
                            >
                                <Spotlight
                                    className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                                    size={64}
                                />
                                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                                    <div className="relative flex w-full flex-row justify-between">
                                        <div>
                                            <h4 className="font-normal dark:text-zinc-100">
                                                {job.title}
                                            </h4>
                                            <p className="text-zinc-500 dark:text-zinc-400">
                                                {job.company}
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

                <motion.section
                    variants={VARIANTS_SECTION}
                    transition={TRANSITION_SECTION}
                >
                    <h3 className="mb-5 text-lg font-medium">Connect</h3>
                    <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                        Feel free to contact me at{" "}
                        <Link
                            className="underline dark:text-zinc-300"
                            href={`mailto:${EMAIL}`}
                        >
                            {EMAIL}
                        </Link>
                    </p>
                    <div className="flex items-center justify-start space-x-3">
                        {SOCIAL_LINKS.map((link) => (
                            <MagneticSocialLink
                                key={link.label}
                                link={link.link}
                            >
                                {link.label}
                            </MagneticSocialLink>
                        ))}
                    </div>
                </motion.section>
            </motion.main>
        </LenisWrapper>
    );
}
