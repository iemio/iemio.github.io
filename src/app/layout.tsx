import type { Metadata, Viewport } from "next";
import { Space_Mono, VT323 } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    title: "iemio's site",
    description: "",
};

const vt323 = VT323({
    subsets: ["latin"],
    weight: "400", // only one weight available
    variable: "--font-vt323", // optional: for CSS variables
});
const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-mono",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${vt323.variable} ${spaceMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
            >
                <ThemeProvider
                    enableSystem={true}
                    attribute="class"
                    storageKey="theme"
                    defaultTheme="system"
                >
                    <div className="flex w-full min-h-screen flex-col font-space-mono">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
