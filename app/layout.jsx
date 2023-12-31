import NavBar from "../components/NavBar";
import { orbitron, sora } from "./fonts";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${sora.variable}`}>
      <body className="bg-background-white flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-font-color-light border-t py-3 text-center text-xs">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-nintendo-blue font-bold hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
