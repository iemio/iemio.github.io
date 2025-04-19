"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import Image from "next/image";
interface BlockProps {
    className?: string;
    children?: React.ReactNode;
    [key: string]: unknown; // For rest props
}

const Block = ({ className, ...rest }: BlockProps) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <Image
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
            width={14}
            height={14}
        />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
            Hi, I&apos;m Keshav.{" "}
            <span className="text-zinc-400">I build cool stuffs.</span>
        </h1>
        <a
            href="#"
            className="flex items-center gap-1 text-red-300 hover:underline"
        >
            Contact me <FiArrowRight />
        </a>
    </Block>
);

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-red-500 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiYoutube />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-green-600 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiGithub />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-zinc-50 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-black"
            >
                <SiInstagram />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-blue-500 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiX />
            </a>
        </Block>
    </>
);

const AboutBlock = () => (
    <Block className="col-span-12 text-3xl leading-snug">
        <p>
            My passion is learning and building cool stuff.{" "}
            <span className="text-zinc-400">
                With expertise spanning web development, machine learning, and
                occasional app development, I craft robust technical solutions
                across multiple domains.
            </span>
        </p>
    </Block>
);

const LocationBlock = () => (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
        <FiMapPin className="text-3xl" />
        <p className="text-center text-lg text-zinc-400">Cyberspace</p>
    </Block>
);

const EmailListBlock = () => (
    <Block className="col-span-12 md:col-span-9">
        <p className="mb-3 text-lg">Join my space</p>
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
        >
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
            />
            <button
                type="submit"
                className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
            >
                <FiMail /> Join the space
            </button>
        </form>
    </Block>
);

const Logo = () => {
    // Cat logo from https://logoipsum.com/
    return (
        <svg
            width="80"
            height="auto"
            viewBox="0 0 67 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-12 fill-zinc-50"
        >
            <path
                d="M45.0353 4.66312C45.8331 3.77669 46.7195 3.04539 47.6281 2.46921C49.2236 1.47198 50.9079 0.940125 52.6364 0.940125V15.411C51.3732 11.0232 48.6475 7.25591 45.0353 4.66312ZM66.5533 40.9401H15.2957C6.87461 40.9401 0.0712891 34.1146 0.0712891 25.7157C0.0712891 17.6714 6.3206 11.0675 14.232 10.5135V0.940125C16.0048 0.940125 17.7555 1.44982 19.3954 2.46921C20.304 3.02323 21.1904 3.75453 21.9882 4.59663C25.2458 2.31409 29.1904 0.984446 33.4674 0.984446C33.4674 10.2254 30.1433 20.9734 19.3289 20.9955H33.3566C32.9577 19.2005 31.3178 17.8709 29.3677 17.8487H37.5228C35.5727 17.8487 33.9328 19.2005 33.5339 21.0177H46.6087C49.2236 21.0177 51.8164 21.5274 54.2541 22.5468C56.6696 23.544 58.8857 25.0288 60.725 26.8681C62.5865 28.7296 64.0491 30.9235 65.0464 33.339C66.0436 35.7324 66.5533 38.3252 66.5533 40.9401ZM22.8525 10.7795C23.1849 11.6437 24.0713 12.6188 25.3123 13.3279C26.5533 14.0371 27.8386 14.3252 28.7472 14.1922C28.4148 13.3279 27.5284 12.3529 26.2874 11.6437C25.0464 10.9346 23.761 10.6465 22.8525 10.7795ZM41.5117 13.3279C40.2707 14.0371 38.9854 14.3252 38.0768 14.1922C38.4092 13.3279 39.2957 12.3529 40.5367 11.6437C41.7777 10.9346 43.063 10.6465 43.9716 10.7795C43.6613 11.6437 42.7527 12.6188 41.5117 13.3279Z"
                fill="#cccccc"
            ></path>
        </svg>
    );
};

const Footer = () => {
    return (
        <footer className="mt-12">
            <p className="text-center text-zinc-400">
                Made with ❤️ by{" "}
                <a href="#" className="text-red-300 hover:underline">
                    @iemio
                </a>
            </p>
        </footer>
    );
};

export default function Page() {
    return (
        <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
            <Logo />
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <SocialsBlock />
                <AboutBlock />
                <LocationBlock />
                <EmailListBlock />
            </motion.div>
            <Footer />
        </div>
    );
}
