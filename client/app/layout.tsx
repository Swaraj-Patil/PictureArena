import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/tailwind.css'
import '@/styles/index.css'
import '@/styles/fonts.css'
import { Footer, Navbar } from "./_components";
import StoreProvider from "./storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Picture Arena",
  description: "PictureArena is a full-stack OTT platform built with Next.js, Express.js, and MongoDB. It offers a seamless streaming experience with features like user authentication, an admin panel, and an integrated payment portal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
