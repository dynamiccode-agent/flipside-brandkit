import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

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
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
