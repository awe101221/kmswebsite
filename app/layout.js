import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "kms.deals — Surplus, connected.",
  description:
    "The wholesale network where surplus meets demand. 40+ years connecting retailers, distributors, and manufacturers.",
  keywords: "wholesale, surplus inventory, liquidation, off-price, distribution",
  openGraph: {
    title: "kms.deals — Surplus, connected.",
    description:
      "The trusted platform for off-price wholesale. $2B+ in transactions completed.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
