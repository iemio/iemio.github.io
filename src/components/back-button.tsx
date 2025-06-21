"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackButton() {
    const router = useRouter();
    return (
        <Button
            className="group relative overflow-hidden cursor-pointer"
            variant={"outline"}
            onClick={() => {
                router.back();
            }}
        >
            <span className="w-20 translate-x-2 transition-opacity duration-500 group-hover:opacity-0">
                Go Back
            </span>
            <i className="absolute inset-0 z-10 grid w-1/4 place-items-center bg-primary-foreground/15 transition-all duration-500 group-hover:w-full">
                <ChevronLeft
                    className="opacity-60"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                />
            </i>
        </Button>
    );
}
