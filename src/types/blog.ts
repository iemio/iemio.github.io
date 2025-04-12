import { JSXElementConstructor, ReactElement } from "react";

export type BlogPost = {
    frontmatter: {
        title: string;
        author: string;
        publishDate: string;
    };
    content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
    slug: string;
};
