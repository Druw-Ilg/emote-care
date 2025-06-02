import { Geist_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/header";
import { ThemeProvider } from "./context/ThemeContext";

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
        className={`${workSans.className} ${geistMono.className} antialiased bg-white text-black dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
