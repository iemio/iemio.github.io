"use client";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

export function Header() {
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
        <header className="mb-8 flex items-center justify-between">
            <div>
                <Link
                    href="/"
                    className="font-medium text-black dark:text-white"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push("/", {
                            onTransitionReady: slideInOut,
                        });
                    }}
                >
                    Hi! I&apos;m Keshav.
                </Link>
                <TextEffect
                    as="p"
                    preset="fade"
                    per="char"
                    className="text-zinc-600 dark:text-zinc-500"
                    delay={0.5}
                >
                    Active learner
                </TextEffect>
            </div>
        </header>
    );
}
