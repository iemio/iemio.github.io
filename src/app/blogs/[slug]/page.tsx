import { notFound } from "next/navigation";
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

export async function generateStaticParams() {
    return getAllBlogSlug(); // should return [{ slug: 'example' }, ...]
}

type BlogPageProps = {
    params: {
        slug: string;
    };
};

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = params;

    try {
        const blog = await getBlogBySlug(slug);
        return (
            <main className="prose prose-gray mt-24 pb-20 prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
                <article>{blog.content}</article>
            </main>
        );
    } catch (err) {
        console.error("Error fetching blog:", err);
        notFound();
    }
}
