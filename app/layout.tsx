import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agamsiingh.AI – AI Automation, Software Development & IT Consulting",
  description:
    "Agamsiingh.AI is a technology services company founded by Agam Singh, offering AI automation, software development, mobile apps, IT consulting, and education consulting for businesses and startups in India.",
  keywords: [
    "AI Automation",
    "Software Development",
    "IT Consulting",
    "AI Agents",
    "Web Development",
    "Mobile Apps",
    "Education Consulting",
    "Agam Singh",
    "Agamsiingh AI",
    "India",
  ],
  authors: [{ name: "Agam Singh" }],
  creator: "Agam Singh",
  openGraph: {
    title: "Agamsiingh.AI – AI Automation & Software Development",
    description:
      "Helping businesses and startups scale using AI automation, intelligent systems, and modern software development.",
    url: "https://agamsiingh.ai",
    siteName: "Agamsiingh.AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agamsiingh.AI – AI Automation & Software Development",
    description:
      "Helping businesses and startups scale using AI automation, intelligent systems, and modern software development.",
    creator: "@agamsiingh",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
