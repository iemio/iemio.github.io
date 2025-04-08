// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

type BlogPageProps = {
    params: {
        slug: string;
    };
};

// ✅ Correct usage — mark async and return the correct type
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return await getAllBlogSlug(); // assuming this returns Promise<{ slug: string }[]>
}

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
