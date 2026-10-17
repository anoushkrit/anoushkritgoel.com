import { Cormorant_Garamond, Inter } from "next/font/google";
import { OnePage } from "@/components/home/one-page";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export default function Page() {
  return <OnePage fontClass={`${display.variable} ${body.variable}`} />;
}
