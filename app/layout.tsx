import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "R.H. Jewellers LLP | Gold Jewellery in Rajkot",
    template: "%s | R.H. Jewellers LLP",
  },

  description:
    "R.H. Jewellers LLP is a trusted gold jewellery shop in Rajkot, Gujarat. Explore BIS Hallmarked 22K gold jewellery including bridal jewellery, antique jewellery, gold necklaces, chains, rings, bangles, bracelets, mangalsutra and pendant sets. Timeless Gold. Trusted Craftsmanship.",

  keywords: [
    "R.H. Jewellers LLP",
    "RH Jewellers Rajkot",
    "gold jewellery shop Rajkot",
    "gold jewellery Rajkot",
    "22K gold jewellery Rajkot",
    "BIS Hallmarked gold jewellery Rajkot",
    "bridal jewellery Rajkot",
    "antique gold jewellery Rajkot",
    "gold necklace Rajkot",
    "gold chain Rajkot",
    "gold rings Rajkot",
    "gold bangles Rajkot",
    "gold bracelets Rajkot",
    "gold mangalsutra Rajkot",
    "gold pendant sets Rajkot",
  ],

  authors: [
    {
      name: "R.H. Jewellers LLP",
    },
  ],

  creator: "R.H. Jewellers LLP",

  metadataBase: new URL("https://rhjewellersllp.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "R.H. Jewellers LLP | Gold Jewellery in Rajkot",
    description:
      "Timeless Gold. Trusted Craftsmanship. Discover handcrafted BIS Hallmarked gold jewellery by R.H. Jewellers LLP in Rajkot, Gujarat.",
    url: "https://rhjewellersllp.com",
    siteName: "R.H. Jewellers LLP",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "R.H. Jewellers LLP Gold Jewellery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "R.H. Jewellers LLP | Gold Jewellery in Rajkot",
    description:
      "R.H. Jewellers LLP is a trusted gold jewellery shop in Rajkot, Gujarat. Explore BIS Hallmarked 22K gold jewellery including bridal jewellery, antique jewellery, gold necklaces, chains, rings, bangles, bracelets, mangalsutra and pendant sets.",
    images: ["/hero.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}