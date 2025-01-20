import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makima Always - Karuta Activation & More Services",
  description: "Activate your Karuta account with ease on Discord. Get started with Makima Always, your ultimate helping hand!",
  icons: {
    icon: "pfp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
      </body>
    </html>
  );
}
