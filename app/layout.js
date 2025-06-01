import { Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/header";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Emote Care",
  description: "Find the right therapist | emote care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} ${geistMono.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
