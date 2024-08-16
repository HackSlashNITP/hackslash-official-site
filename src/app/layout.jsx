import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserContextProvider } from "@/lib/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hackslash",
  description: "Offical hackslash website of NITP",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>

  );
}
