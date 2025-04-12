import React, { useState } from "react";
import { Button } from "./button";
import { CopyIcon } from "../icons/copy";
import { LuCheck } from "react-icons/lu";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
    textToCopy: string;
    className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, className }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Button
            variant="outline"
            size="icon"
            className={cn(
                "relative ml-2 rounded-full dark:text-zinc-400 text-zinc-500",
                className
            )}
            onClick={copyToClipboard}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
            <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
            <CopyIcon
                className={`h-4 w-4 transition-all duration-300 ${
                    copied ? "scale-0" : "scale-100"
                }`}
            />
            <LuCheck
                className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
                    copied ? "scale-100" : "scale-0"
                }`}
            />
        </Button>
    );
};

export default CopyButton;
