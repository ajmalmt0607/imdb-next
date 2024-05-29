import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "IMDb",
    description: "This is a movie database",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Here Provider is client side and evrything inside is serverside components */}
                <Providers>
                    <Header />
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
