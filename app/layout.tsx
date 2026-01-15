import type { Metadata } from "next";
import { Inter, Montserrat, Cairo } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Qlaat Al Madeena Transport - Dubai's Premier Logistics Partner",
    template: "%s | Qlaat Al Madeena Transport"
  },
  description: "Qlaat Al Madeena Transport L.L.C provides professional cargo transport services in Dubai, UAE. Specializing in raw materials transport, heavy truck cargo, and light truck cargo transport.",
  keywords: ["cargo transport Dubai", "logistics UAE", "heavy truck transport", "raw materials transport", "Dubai transport company", "freight services UAE"],
  authors: [{ name: "Qlaat Al Madeena Transport L.L.C" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qlaat-transport.ae",
    siteName: "Qlaat Al Madeena Transport",
    title: "Qlaat Al Madeena Transport - Dubai's Premier Logistics Partner",
    description: "Professional cargo transport services in Dubai, UAE",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Qlaat Al Madeena Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qlaat Al Madeena Transport - Dubai's Premier Logistics Partner",
    description: "Professional cargo transport services in Dubai, UAE",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${cairo.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
