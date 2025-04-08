// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

// We'll inline the type for clarity, ensuring it matches Next.js expectations.
export async function generateStaticParams() {
    return getAllBlogSlug();
}

export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
    const blog = await getBlogBySlug(params.slug);
    return (
        <main className="prose">
            <article>{blog.content}</article>
        </main>
    );
}
