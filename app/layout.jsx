import { Hammersmith_One, Poppins, Inter, Sora } from "next/font/google";
import "./globals.css";
import HomePageNavbar from "./Components/HomePageNavbar";

const hso = Hammersmith_One({
  weight: "400",
  variable: "--hso",
  subsets: ["latin"],
});

const pop = Poppins({
  weight: ["500", "600","300"],
  variable: "--pop",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["600"],
  variable: "--inter",
  subsets: ["latin"],
});

const sora = Sora({
  weight: ["300"],
  variable: "--sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eazy Referral",
  description:
    "A Platform where one can refer others and also one can post referals ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-screen bg-[#DEE2E7] ${hso.variable} ${pop.variable} ${inter.variable} ${sora.variable}`}
      >
        <HomePageNavbar />
        {children}
      </body>
    </html>
  );
}
