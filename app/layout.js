import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "KMS Wholesale | Your Inventory, Connected",
  description:
    "KMS is the network where surplus meets demand. Over 40 years connecting retailers, distributors, and manufacturers with the inventory they need.",
  keywords: "wholesale, surplus inventory, liquidation, off-price, distribution",
  openGraph: {
    title: "KMS Wholesale | Your Inventory, Connected",
    description:
      "The trusted platform for off-price wholesale. $2B+ in transactions completed.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
