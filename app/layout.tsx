import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flipside Energy — Brand Guidelines",
  description: "Official brand guide for Flipside Energy. The better side of energy. Aussie made & owned.",
  openGraph: {
    title: "Flipside Energy — Brand Guidelines",
    description: "Official brand guide for Flipside Energy. The better side of energy.",
    siteName: "Flipside Energy Brand Kit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
