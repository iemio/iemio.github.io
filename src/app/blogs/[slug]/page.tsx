// app/blog/[slug]/page.tsx

import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

// We'll inline the type for clarity, ensuring it matches Next.js expectations.
export async function generateStaticParams() {
    return getAllBlogSlug();
}

export default async function BlogPage({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const blog = await getBlogBySlug(params.slug);
    return (
        <main className="prose">
            <article>{blog.content}</article>
        </main>
    );
}
