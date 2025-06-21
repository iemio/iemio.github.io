import { BackButton } from "@/components/back-button";
import { RiGhostLine } from "react-icons/ri";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen text-zinc-600 dark:text-zinc-400">
            <div className="text-center">
                <RiGhostLine size={69} className="mx-auto mb-4" />
                <p className="text-lg mb-8">Err_404 :(</p>
                <BackButton />
            </div>
        </div>
    );
};

export default NotFound;
