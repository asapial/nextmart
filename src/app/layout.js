import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Shared/NavBar";
import Footer from "@/Components/Shared/Footer";
import "../Components/NamePlate/NamePlate.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextMart",
  description: "NextMart – Where products meet simplicity.",
  icons: {
    icon: "/Logo/market.png",  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
