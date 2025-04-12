import path from "path";
import { promises as fs } from "fs";
import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
    try {
        const filePath = path.join(process.cwd(), "public", "project.json");
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data) as Project[];
    } catch (error) {
        console.error("Error reading project.json:", error);
        return [];
    }
}
