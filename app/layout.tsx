import type { Metadata } from "next";
import { Schibsted_Grotesk , Martian_Mono} from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";

const SchibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martainMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The hub for every Dev Event You Mustn't Miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SchibstedGrotesk.variable} ${martainMono.variable}min-h-screen antialiased`}
      >
      <Navbar />
      <div className="absolute inset-0 -top-0 z-[-1] min-h-screen">
          <LightRays
              raysOrigin="top-center-offset"
              raysColor="#5dfeda"
              raysSpeed={0.9}
              lightSpread={0.8}
              rayLength={1.4}
              followMouse={true}
              mouseInfluence={0.02}
              noiseAmount={0.0}
              distortion={0.01}
          />
      </div>
      <main>
          {children}
      </main>

      </body>
    </html>
  );
}
