import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>Welcome to E-Commerce Application
      <Image src="/window.svg" alt="logo" width={200} height={100} />
      <p className={geistSans.className}>Welcome to E-Commerce Application</p>
      <Button>Log in</Button>
    </div>
  );
}