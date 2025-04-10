"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/dock";
// import ContactForm from "@/components/ui/message-form";
import { Icons } from "@/lib/icons";
const links = [
    {
        title: "Home",
        icon: (
            <Icons.home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        activeIcon: (
            <Icons.aHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/",
    },
    {
        title: "Blogs",
        icon: (
            <Icons.blogs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        activeIcon: (
            <Icons.aBlogs className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/blogs",
    },
    {
        title: "Gallery",
        icon: (
            <Icons.gallery className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        activeIcon: (
            <Icons.aGallery className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/gallery",
    },
    {
        title: "Message",
        icon: (
            <Icons.message className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        activeIcon: (
            <Icons.aMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/message",
    },
    {
        title: "Diary",
        icon: (
            <Icons.diary className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        activeIcon: (
            <Icons.aDiary className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "/diaries",
    },
    {
        title: "GitHub",
        icon: (
            <Icons.github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        activeIcon: (
            <Icons.aGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
];
const Dock = () => {
    return <FloatingDock items={links} />;
};

export default Dock;
