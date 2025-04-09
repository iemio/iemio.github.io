import { getBlogs } from "./fetchers";
import BlogsList from "@/components/blogList";

export default async function BlogsPage() {
    const blogs = await getBlogs();
    return <BlogsList blogs={blogs} />;
}
