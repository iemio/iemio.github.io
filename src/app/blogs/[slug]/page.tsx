import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

export async function generateStaticParams() {
    return getAllBlogSlug(); // should return [{ slug: 'example' }, ...]
}

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
