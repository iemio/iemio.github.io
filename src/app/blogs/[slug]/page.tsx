// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

// We'll inline the type for clarity, ensuring it matches Next.js expectations.
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return await getAllBlogSlug();
}

export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
    // Remove the await on params; it's a plain object.
    const { slug } = params;

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
