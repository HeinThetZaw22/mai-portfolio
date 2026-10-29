import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import RouteAtmosphere from "@/components/route-atmosphere";
import { Toaster } from "react-hot-toast";
import {
  TransitionContent,
  TransitionProvider,
} from "@/components/transition-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hein Thet",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <TransitionProvider>
          <RouteAtmosphere />
          <Navbar />
          <Toaster />
          <TransitionContent>{children}</TransitionContent>
        </TransitionProvider>
      </body>
    </html>
  );
}
