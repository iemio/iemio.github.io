// app/blogs/BlogsList.tsx
"use client";
import { useTransitionRouter } from "next-view-transitions";
import { motion } from "motion/react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { JSXElementConstructor, ReactElement } from "react";

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

export type BlogPost = {
    frontmatter: {
        title: string;
        author: string;
        publishDate: string;
    };
    content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
    slug: string;
};

export default function BlogsList({ blogs }: { blogs: BlogPost[] }) {
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
                <Link
                    href="/blogs"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/blogs", {
                            onTransitionReady: slideInOut,
                        });
                    }}
                >
                    <h3 className="mb-3 text-lg font-medium">Recent Blogs</h3>
                </Link>
                {/* <h3 className="mb-5 text-lg font-medium">blogs</h3> */}
                <div className="flex flex-col space-y-0">
                    <AnimatedBackground
                        enableHover
                        className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                        transition={{
                            type: "spring",
                            bounce: 0,
                            duration: 0.2,
                        }}
                    >
                        {blogs.map((post) => (
                            <Link
                                key={post.frontmatter.title}
                                className="-mx-3 rounded-xl px-3 py-3"
                                href={"blogs/" + post.slug}
                                data-id={post.frontmatter.title}
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("blogs/" + post.slug, {
                                        onTransitionReady: slideInOut,
                                    });
                                }}
                            >
                                <div className="flex flex-col space-y-1">
                                    <h4 className="font-normal dark:text-zinc-100">
                                        {post.frontmatter.title}
                                    </h4>
                                    <p className="text-zinc-500 dark:text-zinc-400">
                                        {post.frontmatter.author}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </AnimatedBackground>
                </div>
            </motion.section>
        </motion.main>
    );
}
