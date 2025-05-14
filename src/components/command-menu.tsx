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
import { User } from "lucide-react";
import {
    RiGithubLine,
    RiLinkedinLine,
    RiDownloadLine,
    // RiMoonLine,
    // RiSunLine,
    RiArtboard2Line,
} from "react-icons/ri";
import React, { useState } from "react";
import { SOCIAL_LINKS } from "@/app/data";
import Link from "next/link";
export function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const [theme, setTheme] = useState(
        typeof window !== "undefined" &&
            window.localStorage.getItem("theme") === "dark"
            ? "dark"
            : "light"
    );

    React.useEffect(() => {
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
                        <RiArtboard2Line />
                        <span>Personal portfolio</span>
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
    );
}
