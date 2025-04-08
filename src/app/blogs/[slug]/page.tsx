// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

// Use generateStaticParams to provide the route parameters
export async function generateStaticParams() {
    return getAllBlogSlug(); // ensure this returns string[] or similar
}

// Define your own props type inline (no promise here)
type BlogPageProps = {
    params: {
        slug: string;
    };
};

// Using an async Server Component is allowed in the App Router:
export default async function BlogPage({ params }: BlogPageProps) {
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
