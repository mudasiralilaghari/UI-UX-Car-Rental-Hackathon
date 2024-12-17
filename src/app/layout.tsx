import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Car Rent Web",
  description: "This is a user-friendly Car Rent website that offers car rental services tailored to your needs. Whether you`re on a business trip, going on vacation, or need a car for a special occasion, we provide a wide range of vehicles to make your journey comfortable and enjoyable. Our service is available 24/7, and you can easily book your preferred car through our website. With a simple and secure booking process, CarRent is here to make your travels smoother and more convenient.",
  keywords: "car rental, car rent, rent a car, car hire, car booking",
  icons:{
    icon:{url:"/images/new-mg-zs.png", type:"image/png"}
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased -z-50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
