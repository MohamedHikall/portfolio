import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/shared/SmoothScroll/SmoothScroll";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "My Portfolio | Creative Developer",
  description: "Senior UI/UX designer and web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased relative`} suppressHydrationWarning>
        <SmoothScroll>
          <div className="col min-h-screen relative">
            <Header />
            <main className="pt-20 grow relative">
              {children}
            </main>

            <ScrollToTop />

            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
