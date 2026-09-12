import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your next web development project. Available for freelance full stack development and Figma UI/UX design work — let's build something great together.",
  keywords: [
    "hire freelance developer",
    "contact full stack developer",
    "freelance web developer contact",
    "hire Next.js developer",
  ],
  alternates: {
    canonical: "https://chithraksha.in/contact",
  },
  openGraph: {
    title: "Contact | Chithraksha",
    description:
      "Reach out to discuss freelance web development or UI/UX design projects.",
    url: "https://chithraksha.in/contact",
    images: [
      {
        url: "/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Chithraksha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Chithraksha",
    description: "Let's talk about your project.",
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
