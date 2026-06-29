import type { Metadata } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XDP technologies | Explore. Develop. Prosper.",
  description: "A global technology company focused on exploring innovative ideas, developing world-class digital solutions, and helping businesses prosper through technology.",
  keywords: ["XDP technologies", "Software Development", "Cloud & DevOps", "AI & Machine Learning", "SaaS Products", "Digital Transformation", "Consulting"],
  openGraph: {
    title: "XDP technologies | Explore. Develop. Prosper.",
    description: "A global technology company focused on exploring innovative ideas, developing world-class digital solutions, and helping businesses prosper through technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="h-screen w-screen bg-[#F0EEE9] p-3 md:p-4 overflow-hidden font-sans selection:bg-accent-yellow selection:text-black"
        suppressHydrationWarning
      >
        <div className="h-full w-full border border-white/10 rounded-[24px] overflow-y-auto overflow-x-hidden bg-bg-light text-text-light-primary relative flex flex-col no-scrollbar">
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}
