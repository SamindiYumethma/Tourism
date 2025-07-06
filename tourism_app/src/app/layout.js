import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BootstrapScript from "./components/BootstrapScript";
import LoadingScreen from "./components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blissful Lanka",
  description: "Explore Sri Lanka's soul — from sun-kissed shores to misty highlands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <LoadingScreen />
        <Navbar />
        
        <main>
          {children}
        </main>
        
        <Footer />
        <BootstrapScript />
      </body>
    </html>
  );
}
