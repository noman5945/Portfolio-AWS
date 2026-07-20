import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PersonSchema from "@/components/PersonSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Md Abdullah Al Noman | Backend & Cloud Engineer",
    template: "%s | Md Abdullah Al Noman",
  },

  description:
    "Md Abdullah Al Noman is a Backend and Cloud Engineer specializing in NestJS, TypeScript, AWS, PostgreSQL, and scalable cloud-native applications.",

  keywords: [
    "Md Abdullah Al Noman",
    "Backend Engineer",
    "Cloud Engineer",
    "NestJS Developer",
    "TypeScript Developer",
    "AWS Developer",
    "Node.js Developer",
    "PostgreSQL",
  ],

  authors: [
    {
      name: "Md Abdullah Al Noman",
    },
  ],

  creator: "Md Abdullah Al Noman",

  openGraph: {
    title: "Md Abdullah Al Noman | Backend & Cloud Engineer",
    description:
      "Backend & Cloud Engineer specializing in NestJS, TypeScript, AWS, PostgreSQL, and cloud-native systems.",
    type: "website",
    locale: "en_US",
    siteName: "Md Abdullah Al Noman",
  },

  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PersonSchema />
        <Providers>
          <Navbar />
          {children}
          <FooterSection />
        </Providers>
      </body>
    </html>
  );
}
