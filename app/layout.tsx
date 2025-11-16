import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISP Technology",
  description:
    "Driver safety technology built by ISP Security Inc. to protect fleets, cargo, and operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#353e43] text-slate-100`}
      >
        <div className="min-h-screen pb-[160px] sm:pb-[120px]">{children}</div>
        <FloatingNav />
      </body>
    </html>
  );
}
