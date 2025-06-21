"use client";

import * as React from "react";
import CV from "@/components/cv";
import { HomeCommandMenu } from "@/components/home-command-menu";
import Footer from "@/components/footer";

export default function Page() {
    return (
        <>
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 md:px-0 ">
                <CV />
                <HomeCommandMenu />
            </div>
            <Footer />
        </>
    );
}
