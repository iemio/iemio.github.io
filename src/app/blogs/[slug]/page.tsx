// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

// Use generateStaticParams to provide the route parameters
export function generateStaticParams() {
    return getAllBlogSlug(); // ensure this returns string[] or similar
}

// Using an async Server Component is allowed in the App Router:
export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
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
