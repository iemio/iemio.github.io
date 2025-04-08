// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

type BlogPageProps = {
    params: {
        slug: string;
    };
};

// ✅ This enables static generation of all slugs at build time
export function generateStaticParams(): BlogPageProps["params"][] {
    return getAllBlogSlug(); // returns [{ slug: string }, ...]
}

// ✅ This is the statically generated page
export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params;

    try {
        const blog = await getBlogBySlug(slug);

        return (
            <main className="prose dark:prose-invert mt-24 pb-20">
                <article>{blog.content}</article>
            </main>
        );
    } catch (err) {
        console.error("Error fetching blog:", err);
        notFound();
    }
}
