import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { aeonik } from './fonts'
import "./globals.css";
import LenisProvider from "@/components/animated/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Fit Expert",
  description: "Fit Expert is your ultimate fitness companion, offering expert guidance, personalized workouts, and health tips to help you achieve your wellness goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aeonik.className} antialiased`} >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
