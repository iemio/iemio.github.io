"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
    const pathname = usePathname();
    const slug = pathname.split("/").pop(); //removes the last element from an array and returns it
    return <div>Blog {slug} not found</div>;
};

export default NotFound;
