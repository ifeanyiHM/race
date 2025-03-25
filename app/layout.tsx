import type { Metadata } from "next";
import { raleway } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Race Educational Services",
    default: "Race Educational Services",
  },
  description:
    "Race Educational Services is an agency that provides individuals with international admissions. We provide professional support and advice to those who want to study abroad.",
  openGraph: {
    title: "Race Educational Services",
    description:
      "Race Educational Services is an agency that provides individuals with international admissions. We provide professional support and advice to those who want to study abroad.",
    type: "website",
    url: "https://raceeduconsult.com/",
    siteName: "Race Educational Services",
    images: [
      {
        url: "https://raceeduconsult.com/opengraph-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Race Educational Services",
    description:
      "Race Educational Services is an agency that provides individuals with international admissions. We provide professional support and advice to those who want to study abroad.",
    images: ["https://raceeduconsult.com/opengraph-image.png"],
    site: "https://raceeduconsult.com/",
    creator: "@Raceduservices",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>{children}</body>
    </html>
  );
}
