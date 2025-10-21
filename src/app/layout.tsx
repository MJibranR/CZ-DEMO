import "./globals.css";
import type { Metadata } from "next";
import CursorSpark from "./components/CursorSpark";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Zenith",
  description: "A creative Next.js project with custom fonts and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen text-[var(--color-foreground)] bg-[var(--color-background)]"
        style={{
          fontFamily: "var(--font-montserrat)",
          background:
            "linear-gradient(to bottom right, #000000 0%, #200053 50%, #000000 100%)",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <CursorSpark />
        {children}
        <Footer />
      </body>
    </html>
  );
}
