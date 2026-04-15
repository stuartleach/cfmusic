import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Campfire Music Foundation",
  description:
    "Building a sustainable streaming platform that ensures artists receive fair, transparent payments while offering community-based music discovery for listeners. 501(c)(3) nonprofit.",
  openGraph: {
    title: "Campfire Music Foundation",
    description:
      "Building a sustainable streaming platform for fair artist compensation and ethical music discovery.",
    url: "https://www.cfmusic.org",
    siteName: "Campfire Music Foundation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#E8E0CE] text-[#131211]">
        {children}
      </body>
    </html>
  );
}
