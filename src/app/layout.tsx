import Navbar from "@/components/Navbar";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>FoodApp</title>
      </head>
      <body className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
