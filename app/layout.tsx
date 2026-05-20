import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico-google",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flying Safari",
  description:
    "Embark on experiences not just destinations with our East Africa safari trips.",
  metadataBase: new URL("https://flying-safari-gold.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pacifico.className} ${pacifico.variable}`}>
      <body className="relative min-h-screen tracking-widest text-black antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
