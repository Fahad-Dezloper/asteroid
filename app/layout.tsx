import type { Metadata } from "next";
import { Merriweather_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sourceSans',
})

const merriweather = Merriweather_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-merriweather',
})
export const metadata: Metadata = {
  title: "Asteroid Ai",
  description: "Building Infrastructure for AI Agents",
  keywords: "AI, Artificial Intelligence, Infrastructure, Agents, Asteroid Ai",
  openGraph: {
    type: 'website',
    url: 'https://asteroid.ai',
    title: "Asteroid Ai",
    description: "Building Infrastructure for AI Agents",
    images: [
      {
        url: "https://asteroid.ai/logo-128-nobg.png",
        width: 128,
        height: 128,
        alt: "Asteroid Ai",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
