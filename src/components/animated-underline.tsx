import { cn } from "@/lib/utils";
import React from "react";

type AnimatedUnderlineProps = {
    children: React.ReactNode;
    className?: string;
    underlineColorClass?: string; // e.g., "bg-primary", "bg-red-500"
};

const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({
    children,
    className = "",
    underlineColorClass = "bg-primary",
}) => {
    return (
        <div className={cn("mb-5", className)}>
            <span
                className={cn(
                    "relative inline-block text-lg font-medium",
                    "after:absolute after:left-0 after:bottom-0",
                    "after:h-px after:w-full",
                    `after:${underlineColorClass}`,
                    "after:origin-bottom-right after:scale-x-0",
                    "hover:after:origin-bottom-left hover:after:scale-x-100",
                    "after:transition-transform after:duration-300 after:ease-in-out"
                )}
            >
                {children}
            </span>
        </div>
    );
};

export default AnimatedUnderline;
