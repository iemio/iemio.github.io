import React from "react";
import { Button } from "./ui/button";
import {
    RiMailFill,
    RiGithubFill,
    RiPhoneFill,
    RiLinkedinFill,
} from "react-icons/ri";
import Link from "next/link";
import { SOCIAL_LINKS } from "../../public/data/info";

const SocialIcons = () => {
    return (
        <div className="inline-flex flex-wrap gap-2">
            <Button
                variant="outline"
                aria-label="Send a mail"
                size="icon"
                className="cursor-pointer"
            >
                <Link href="mailto:iemio.dev@gmail.com">
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
            <Link href={SOCIAL_LINKS.Github}>
                <Button
                    variant="outline"
                    aria-label="Login with Github"
                    size="icon"
                    className="cursor-pointer"
                >
                    <RiGithubFill size={16} aria-hidden="true" />
                </Button>
            </Link>
            <Link href={SOCIAL_LINKS.LinkedIn}>
                <Button
                    variant="outline"
                    aria-label="Login with Linkedin"
                    size="icon"
                    className="cursor-pointer"
                >
                    <RiLinkedinFill size={16} aria-hidden="true" />
                </Button>
            </Link>
        </div>
    );
};

export default SocialIcons;
