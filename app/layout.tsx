import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://junqiuzhu.github.io"),
  title: "Junqiu Zhu · Research",
  description:
    "Junqiu Zhu is a researcher at Shandong University working on appearance modeling, photorealistic rendering, and visual computing.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Junqiu Zhu · Research",
    description: "Appearance Modeling · Photorealistic Rendering · Visual Computing",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junqiu Zhu · Research",
    description: "Appearance Modeling · Photorealistic Rendering · Visual Computing",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
