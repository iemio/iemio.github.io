import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { Command, User } from "lucide-react";
import {
    RiGithubLine,
    RiLinkedinLine,
    RiDownloadLine,
    // RiMoonLine,
    // RiSunLine,
    RiQuillPenLine,
} from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { SOCIAL_LINKS } from "../../public/data/info";
import Link from "next/link";
import { Button } from "./ui/button";

export function HomeCommandMenu() {
    const [open, setOpen] = React.useState(false);
    const [theme, setTheme] = useState(
        typeof window !== "undefined" &&
            window.localStorage.getItem("theme") === "dark"
            ? "dark"
            : "light"
    );

    // Detect screen size
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        // Set initial theme
        if (typeof window !== "undefined") {
            setTheme(
                window.localStorage.getItem("theme") === "dark"
                    ? "dark"
                    : "light"
            );

            const updateScreen = () => {
                setIsLargeScreen(window.innerWidth >= 1280); // lg breakpoint
            };

            updateScreen(); // Run initially
            window.addEventListener("resize", updateScreen);
            return () => window.removeEventListener("resize", updateScreen);
        }
    }, []);

    useEffect(() => {
        if (!isLargeScreen) return;
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const handleThemeChange = () => {
        console.log("h");
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        window.localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            {/* Show button only on small screens */}
            {!isLargeScreen && (
                <div className="fixed bottom-4 right-4 z-50">
                    <Button
                        className="rounded-full h-11 w-11 cursor-pointer"
                        variant="outline"
                        size="icon"
                        aria-label="Open Command Menu"
                        onClick={() => setOpen(true)}
                    >
                        <Command
                            size={19}
                            strokeWidth={2}
                            aria-hidden="true"
                        ></Command>
                    </Button>
                </div>
            )}
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Actions">
                        <CommandItem>
                            <RiDownloadLine />
                            <span>Download CV</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Links">
                        <Link href={SOCIAL_LINKS.Github}>
                            <CommandItem>
                                <RiGithubLine />
                                <span>Github</span>
                            </CommandItem>
                        </Link>

                        <CommandItem>
                            <RiQuillPenLine />
                            <span>Personal blogs</span>
                        </CommandItem>
                        <Link href={SOCIAL_LINKS.LinkedIn}>
                            <CommandItem>
                                <RiLinkedinLine />
                                <span>Linkedin</span>
                            </CommandItem>
                        </Link>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <div onClick={handleThemeChange}>
                            <CommandItem>
                                <User />
                                <span>Change theme</span>
                                <CommandShortcut>⌘K</CommandShortcut>
                            </CommandItem>
                        </div>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
