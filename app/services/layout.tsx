import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Services",
  description:
    "Full stack web development and UI/UX design services — Next.js, React, and Node.js builds paired with Figma design. Custom websites, web apps, and MVPs for startups and small businesses.",
  keywords: [
    "web development services",
    "full stack development services",
    "Next.js development services",
    "UI UX design services",
    "figma design freelancer",
    "custom web app development",
    "freelance developer for hire",
  ],
  alternates: {
    canonical: "https://chithraksha.in/services",
  },
  openGraph: {
    title: "Services | Chithraksha",
    description:
      "Full stack development and Figma UI/UX design services for startups, businesses, and personal brands.",
    url: "https://chithraksha.in/services",
    images: [
      {
        url: "/og-services.png",
        width: 1200,
        height: 630,
        alt: "Services offered by Chithraksha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Chithraksha",
    description:
      "Full stack web development + Figma UI/UX design services, tailored for startups and small businesses.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
    <body>
        {children}
        </body>
    </html>
);
}
