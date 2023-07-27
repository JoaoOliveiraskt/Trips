import { NextAuthProvider } from "@/providers/auth";
import "./globals.css";
import { Inter } from "next/font/google";
import  Header  from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Trips",
  description: "Sistema de reserva de viagens!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
