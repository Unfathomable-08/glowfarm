import { Outfit } from "next/font/google"; // Changed to Outfit
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "GlowFarm",
  description: "Lamps and lights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
