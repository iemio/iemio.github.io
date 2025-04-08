// app/blog/[slug]/page.tsx
import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

export async function generateStaticParams() {
    const slugs = await getAllBlogSlug();
    console.log("slugs", slugs);
    return slugs;
}

// export default async function BlogPage({
//     params,
// }: {
//     params: { slug: string };
// }) {
//     // const blog = await getBlogBySlug(params.slug);
//     return (
//         <main className="prose">
//             <article>{"blog.content"}</article>
//         </main>
//     );
// }

export default async function BlogPage() {
    // const blog = await getBlogBySlug(params.slug);
    return (
        <main className="prose">
            <article>{"blog.content"}</article>
        </main>
    );
}
