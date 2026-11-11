import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@components/Imports";



// opsz axis -> lets us mimic "Inter Display" (see .ff-ui in globals.css)
const inter = Inter({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-bricolage",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "School Express",
  description:
    "Safe, reliable school, college, care and group transport across Berkshire, Oxfordshire, Hampshire and the South East.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">

        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}