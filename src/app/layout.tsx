import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { JotaiProvider } from "@/components/jotai-provider";

import { Toaster } from "@/components/ui/sonner";

import { Modals } from "@/components/modals";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "TalkTree",
    description: "Talktree",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ConvexAuthNextjsServerProvider>
            <html lang="en">
                <head>
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                </head>
                <body className={inter.className}>
                    <ConvexClientProvider>
                        <JotaiProvider>
                            <Toaster />
                            <Modals />
                            {children}
                        </JotaiProvider>
                    </ConvexClientProvider>
                </body>
            </html>
        </ConvexAuthNextjsServerProvider>
    );
}
