import React from "react";
import { Button } from "./ui/button";
import {
    RiMailFill,
    RiGithubFill,
    RiPhoneFill,
    RiLinkedinFill,
} from "react-icons/ri";
import Link from "next/link";

const SocialIcons = () => {
    return (
        <div className="inline-flex flex-wrap gap-2">
            <Button
                variant="outline"
                aria-label="Send a mail"
                size="icon"
                className="cursor-pointer"
            >
                <Link href="https://google.com">
                    <RiMailFill size={16} aria-hidden="true" />
                </Link>
            </Button>
            <Button
                variant="outline"
                aria-label="Call with Phone"
                size="icon"
                className="cursor-pointer"
            >
                <RiPhoneFill size={16} aria-hidden="true" />
            </Button>
            <Button
                variant="outline"
                aria-label="Login with Github"
                size="icon"
                className="cursor-pointer"
            >
                <RiGithubFill size={16} aria-hidden="true" />
            </Button>
            <Button
                variant="outline"
                aria-label="Login with Linkedin"
                size="icon"
                className="cursor-pointer"
            >
                <RiLinkedinFill size={16} aria-hidden="true" />
            </Button>
        </div>
    );
};

export default SocialIcons;
