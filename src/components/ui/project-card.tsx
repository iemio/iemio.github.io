import React from "react";
import {
    MorphingDialog,
    MorphingDialogClose,
    MorphingDialogContainer,
    MorphingDialogContent,
    MorphingDialogTrigger,
} from "./morphing-dialog";
import { IoMdClose as XIcon } from "react-icons/io";
// import { CiLocationArrow1 } from "react-icons/ci";
import { FrameIcon } from "../icons/frame";
import { GithubIcon } from "../icons/github";
type Project = {
    name: string;
    description: string;
    link: string;
    video: string;
    id: string;
};

type ProjectCardProps = {
    project: Project;
};

type ProjectVideoProps = {
    src: string;
};

function ProjectVideo({ src }: ProjectVideoProps) {
    return (
        <MorphingDialog
            transition={{
                type: "spring",
                bounce: 0,
                duration: 0.3,
            }}
        >
            <MorphingDialogTrigger>
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    className="aspect-video w-full cursor-zoom-in rounded-xl"
                />
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
                    <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
                    />
                </MorphingDialogContent>
                <MorphingDialogClose
                    className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                    variants={{
                        initial: { opacity: 0 },
                        animate: {
                            opacity: 1,
                            transition: { delay: 0.3, duration: 0.1 },
                        },
                        exit: { opacity: 0, transition: { duration: 0 } },
                    }}
                >
                    <XIcon className="h-5 w-5 text-zinc-500" />
                </MorphingDialogClose>
            </MorphingDialogContainer>
        </MorphingDialog>
    );
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div
            key={project.name}
            className="group p-4 pb-8 rounded-lg transition-colors duration-400 hover:bg-zinc-300/30 dark:hover:bg-zinc-600/30 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.2)]"
        >
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 mb-3">
                <ProjectVideo src={project.video} />
                {/* <a
                    href="#"
                    className="projects__button button absolute right-4 bottom-[-1.5rem] p-[1.1rem_1.5rem] bg-black text-white font-[var(--font-medium)] rounded-lg transition-colors duration-400 hover:bg-[var(--first-color)]"
                >
                    <CiLocationArrow1 />
                </a> */}
            </div>
            <div className="px-1 mb-6">
                <h3 className="relative inline-block font-medium text-[0.813rem] text-zinc-600 dark:text-zinc-400 mb-3 pl-7">
                    App
                    <span className="absolute left-0 top-1/2 w-5 h-[1px] bg-zinc-600 dark:bg-zinc-400 transform -translate-y-1/2"></span>
                </h3>
                <h2 className="projects__title mb-3">Yoga App</h2>

                {/* <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                </a> */}
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.description}
                </p>
            </div>
            <div className="projects__buttons flex items-center gap-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-800 dark:text-zinc-200">
                <a
                    href="https://github.com/"
                    target="_blank"
                    className="flex items-center gap-1 text-sm font-medium transition-colors duration-400"
                >
                    {/* <RiGithubLine /> */}
                    <GithubIcon size={15} />
                    Source Code
                </a>

                <a
                    href="#"
                    target="_blank"
                    className="flex items-center gap-1  text-sm font-medium transition-colors duration-400"
                >
                    {/* <RiArtboard2Line /> */}
                    <FrameIcon size={15} />
                    Demo
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
