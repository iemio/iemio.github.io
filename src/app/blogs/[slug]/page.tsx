// app/blog/[slug]/page.tsx
import { getAllBlogSlug, getBlogBySlug } from "../fetchers";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const slugs = await getAllBlogSlug();
    console.log("slugs", slugs);
    return slugs;
}

type Params = Promise<{ slug: string }>;
export default async function BlogPage({ params }: { params: Params }) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    return (
        <main className="prose">
            <article>{blog.content}</article>
        </main>
    );
}

// export default async function BlogPage() {
//     const blog = await getBlogBySlug("blog1");
//     return (
//         <main className="prose">
//             <article>{blog.content}</article>
//         </main>
//     );
// }
