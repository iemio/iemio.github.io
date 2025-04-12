import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import "@/styles/globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import Dock from "@/components/dock";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export const metadata: Metadata = {
    title: "iemio's portfolio",
    description: "",
};

const geist = Geist({
    variable: "--font-geist",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
            >
                <ThemeProvider
                    enableSystem={true}
                    attribute="class"
                    storageKey="theme"
                    defaultTheme="system"
                >
                    <ViewTransitions>
                        <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
                            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
                                <Dock />
                                <Header />
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </ViewTransitions>
                </ThemeProvider>
            </body>
        </html>
    );
}
