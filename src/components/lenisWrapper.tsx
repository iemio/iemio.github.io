// components/LenisWrapper.tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const lenis = new Lenis({
            smooth: true,
            lerp: 0.07, // best for smooth manual scrolling
            direction: "vertical",
            gestureDirection: "vertical",
            normalizeWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
