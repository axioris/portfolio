import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axioris (Dane Foster) - Solana & Bitcoin Developer",
  description:
    "Axioris (Dane Foster) is a Blockchain Developer passionate about innovating in Solana and Bitcoin ecosystems. I drive growth by building decentralized solutions that merge cutting-edge technology with seamless user experiences. I excel in transforming complex ideas into robust, scalable blockchain applications.",
  keywords: [
    "axioris",
    "solana",
    "bitcoin",
    "blockchain",
    "web3",
    "frontend blockchain developer",
    "cryptocurrency",
    "developer portfolio",
    "Decentralized Applications (DApps)",
    "smart contract",
    "NFT",
    "token",
    "coinbase",
    "whale",
    "binance",
    "metaverse",
    "cardano",
    "dash",
    "airdrops",
    "supply",
    "cbdc",
    "polkadot",
    "market cap",
    "cryptography",
    "chainlink",
    "dex",
    "crypto wallet",
    "bull market",
    "defi",
    "fud",
    "personal finance",
    "global payments",
    "decentralization",
    "staking",
    "pump.fun",
    "sniper bot",
    "arbitrage bot",
    "volume bot",
    "scalping bot",
  ],
  openGraph: {
    title: "Axioris - Solana & Bitcoin Developer",
    description:
      "Blockchain Developer passionate about innovating in Solana and Bitcoin ecosystems. I drive growth by building decentralized solutions that merge cutting-edge technology with seamless user experiences. I excel in transforming complex ideas into robust, scalable blockchain applications.",
    url: "",
    siteName: "",
    images: [
      {
        url: "https://i.ibb.co/FKMqc28/dane-foster-logo.svg",
        width: 1200,
        height: 630,
        alt: "Axioris - Solana & Bitcoin Developer",
      },
      {
        url: "https://i.ibb.co/Y8hBTR4/dane-foster.svg",
        width: 800,
        height: 800,
        alt: "Axioris - Solana & Bitcoin Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axioris — Solana & Bitcoin Developer",
    description:
      "Blockchain Developer passionate about innovating in Solana and Bitcoin ecosystems. I drive growth by building decentralized solutions that merge cutting-edge technology with seamless user experiences. I excel in transforming complex ideas into robust, scalable blockchain applications.",
    creator: "@danefoster0",
    images: ["https://i.ibb.co/FKMqc28/dane-foster.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
