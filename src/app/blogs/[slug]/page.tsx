// app/blog/[slug]/page.tsx
import { getAllBlogSlug, getBlogBySlug } from "../fetchers";

export async function generateStaticParams() {
    const slugs = await getAllBlogSlug();
    console.log("slugs", slugs);
    return slugs;
}

//https://nextjs.org/docs/app/building-your-application/upgrading/version-15#async-request-apis-breaking-change
type Params = Promise<{ slug: string }>;

export default async function BlogPage({ params }: { params: Params }) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    return <article>{blog.content}</article>;
}
