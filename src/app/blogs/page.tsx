import { TextureButton } from "@/components/ui/texture-button";
import { getBlogs } from "./fetchers";
import BlogsList from "@/components/blogList";
import { ChevronLeftIcon } from "@/components/icons/arrows/chevron-left";
export default async function BlogsPage() {
    const blogs = await getBlogs();

    return (
        <div>
            <TextureButton variant="icon" size="icon">
                <ChevronLeftIcon size={20} />
            </TextureButton>
            <BlogsList blogs={blogs} />
        </div>
    );
}
