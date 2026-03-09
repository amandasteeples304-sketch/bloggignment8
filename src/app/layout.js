import NavBar from "@/components/NavBar";
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
        <main
          className="w-[95%] max-w-4xl mx-auto my-4 md:my-10 p-4 md:p-8 bg-white/50 shadow-2xl rounded-xl min-h-[80vh] bg-white/50 shadow-2xl rounded-xl min-h-[80vh] border border-white/20 text-black"
          style={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)" }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
