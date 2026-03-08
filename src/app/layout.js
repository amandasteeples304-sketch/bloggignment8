import NavBar from "@/components/NavBar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url("https://wallpapercave.com/wp/wp5718453.jpg")`,
        }}
      >
        <NavBar />
        <main className="max-w-4xl mx-auto my-10 p-8 bg-white/80 backdrop-blur-sm shadow-xl border border-black/10 rounded-lg min-h-[80vh]">
          {children}
        </main>
      </body>
    </html>
  );
}
