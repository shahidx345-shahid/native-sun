import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopStripe from "@/components/TopStripe";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Native Sun Studios",
  description: "Native Sun Studios Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`min-h-full flex flex-col bg-[#F7F7F7] ${inter.className}`}
        style={{
          backgroundColor: '#F7F7F7',
        }}
        suppressHydrationWarning
      >
        <TopStripe />
        <Header />
        <main className="flex-1">
          <div className="native-container bg-transparent shadow-none min-h-screen">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

