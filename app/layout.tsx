import type { Metadata } from "next";
import {IBM_Plex_Sans,Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter=Inter({
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],
  variable:"--font-inter"
})
const ibmplexsans=IBM_Plex_Sans({
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700"],
  variable:"--font-ibmplexsans"
})


export const metadata: Metadata = {
  metadataBase: new URL("https://chithraksha.in"),
  title: {
    default: "Chithraksha | Full Stack Developer & UI/UX Designer",
    template: "%s | Chithraksha",
  },
  description:
    "Freelancer and full stack developer specializing in Next.js, React, and Node.js, with Figma UI/UX design skills. Building fast, scalable web apps and clean, user-friendly interfaces for startups and businesses.",
  keywords: [
    "full stack developer",
    "freelance web developer",
    "Next.js developer",
    "React developer",
    "Figma UI designer",
    "freelance web design",
    "MERN stack developer",
    "hire full stack developer",
  ],
  authors: [{ name: "Chithraksha", url: "https://chithraksha.in" }],
  creator: "Chithraksha",
  openGraph: {
    type: "website",
    url: "https://chithraksha.in",
    title: "Chithraksha | Full Stack Developer & UI/UX Designer",
    description:
      "Freelancer and full stack developer building modern web apps with Next.js & React, plus Figma-based UI/UX design.",
    siteName: "Chithraksha's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chithraksha - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chithraksha | Full Stack Developer & UI/UX Designer",
    description:
      "Freelancer and full stack developer & Figma UI/UX designer. View my projects and get in touch for your next build.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-search-console-code",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inter.className} ${ibmplexsans.variable} ${ibmplexsans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-100 dark:bg-neutral-700">
        <Header/>
        {children}
        </body>
    </html>
  );
}
