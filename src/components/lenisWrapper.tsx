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
        const lenis = new Lenis();

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
