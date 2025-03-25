import { Albert_Sans, Raleway } from "next/font/google";

export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
