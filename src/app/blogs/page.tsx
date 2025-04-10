import { TextureButton } from "@/components/ui/texture-button";
import { getBlogs } from "./fetchers";
import BlogsList from "@/components/blogList";
import { LuChevronLeft } from "react-icons/lu";
export default async function BlogsPage() {
    const blogs = await getBlogs();

    return (
        <div>
            <TextureButton variant="icon" size="icon">
                <LuChevronLeft className="h-6 w-6 p-1" />
            </TextureButton>
            <BlogsList blogs={blogs} />
        </div>
    );
}
