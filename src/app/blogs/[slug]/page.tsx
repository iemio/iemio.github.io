// app/blog/[slug]/page.tsx
import { getAllBlogSlug, getBlogBySlug } from "../fetchers";

export async function generateStaticParams() {
    const slugs = await getAllBlogSlug();
    console.log("slugs", slugs);
    // return slugs;
    return [{ slug: "blog1" }, { slug: "blog2" }];
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

// export default async function BlogPage() {
//     const blog = await getBlogBySlug("blog1");
//     return (
//         <main className="prose">
//             <article>{blog.content}</article>
//         </main>
//     );
// }
