import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/ui/Providers";
import Navbar from "@/components/nav/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "ِAtheer Ganaiem",
  description: ` Hi! I'm Atheer Ganaiem, a full stack web developer with a passion for creating dynamic and
          efficient web applications. My journey into the world of coding began about three years
          ago, and since then, I've honed my skills in a variety of technologies. I enjoy crafting seamless user experiences and robust server-side logic, continuously
          expanding my skill set to stay updated with the latest industry trends. Currently, I'm
          diving into Go to enhance my backend capabilities.`,
};

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
