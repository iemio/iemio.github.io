"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Project } from "../../../public/data/info";
import { LucideIcon, GithubIcon, FrameIcon } from "lucide-react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: Project[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2", className)}>
            {items.map((item, idx) => (
                <Link
                    href={item?.deployedLink}
                    key={item?.id}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-800 dark:text-zinc-200 gap-8 flex-row">
                            <CardLink link={item.sourceCode} icon={GithubIcon}>
                                Source Code
                            </CardLink>
                            <CardLink link={item.deployedLink} icon={FrameIcon}>
                                Demo
                            </CardLink>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-3xl h-full w-full p-2 overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-300/30 dark:border-zinc-600/30  group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4
            className={cn(
                "dark:text-zinc-100 font-normal tracking-wide mt-2",
                className
            )}
        >
            {children}
        </h4>
    );
};

export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-4 text-zinc-500 dark:text-zinc-400 tracking-wide leading-relaxed text-sm mb-10",
                className
            )}
        >
            {children}
        </p>
    );
};

export const CardLink = ({
    link,
    icon: Icon,
    className,
    children,
}: {
    icon: LucideIcon;
    link?: string;
    className?: string;
    children?: React.ReactNode;
}) => {
    if (!link) {
        return null;
    }
    return (
        <Link
            href={link}
            target="_blank"
            className={cn(
                "relative after:absolute after:bg-primary after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 flex items-center gap-1 text-sm",
                className
            )}
        >
            {/* <RiGithubLine /> */}
            <Icon size={15} className="icon-class" />
            {children}
        </Link>
        // <p
        //     className={cn(
        //         "mt-4 text-zinc-500 dark:text-zinc-400 tracking-wide leading-relaxed text-sm mb-10",
        //         className
        //     )}
        // >
        //     {children}
        // </p>
    );
};
