"use client";

import * as React from "react";
import CV from "@/components/cv";
import { CommandMenu } from "@/components/command-menu";

export default function Page() {
    return (
        <>
            <CV />
            {/* <Footer /> */}
            <CommandMenu />
        </>
    );
}
