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
import React from "react";
export function CommandMenu() {
    const [open, setOpen] = React.useState(false);

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
                    <CommandItem>
                        <RiGithubLine />
                        <span>Github</span>
                    </CommandItem>
                    <CommandItem>
                        <RiArtboard2Line />
                        <span>Personal portfolio</span>
                    </CommandItem>
                    <CommandItem>
                        <RiLinkedinLine />
                        <span>Linkedin</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <User />
                        <span>Change theme</span>
                        <CommandShortcut>⌘K</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
}
