import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "AEMonitor",
      // gitLink: "https://github.com/axioris/AEMonitor",
      liveLink: "https://aeternity.com/",
      about:
        "Real time dashboard monitor for Aeternity blockchain. Periodically fetches the data from blockchain and saves in internal db allowing in-depth analytics.",
      stack: ["node.js", "javascript", "vue.js", "css", "HTML"],
      img: "/1.AEMonitor.svg",
    },
    {
      title: "Avax Queen",
      // gitLink: "https://github.com/axioris/web3-avax-queen",
      liveLink: "https://serene-quokka-8afcbb.netlify.app/",
      about:
        "AvaxQueen is a Web3 battle-style online multiplayer card game which includes a stunning design, interactive gameplay, smart wallet pairing, live interaction with smart contracts, & most importantly, the ability to battle other players in realtime.",
      stack: ["hardhat", "openzeppelin", "react.js", "typescript", "solidity", "css"],
      img: "/2.AvaxQueen.svg",
    },
    {
      title: "Farmers World",
      // gitLink: "https://github.com/axioris/nft-farmers-world",
      liveLink: "https://farmersworld.io/",
      about:
        "FarmersWorld is a browser-based automation tool for the Farmers World NFT game, featuring seamless integration, efficient auto-claiming, mining, energy refills, and tool repairs. With a transparent, open-source design and secure local execution, it enhances gameplay by automating repetitive tasks, letting players focus on strategy and progress.",
      stack: ["react", "javascript", "figma", "sass", "css"],
      img: "/4.farmersworld-auto-claim.svg",
    },
    {
      title: "Minimetis",
      // gitLink: "https://github.com/axioris/minimetis",
      liveLink: "https://minimetis.com/",
      about:
        "MiniMetis is a community-driven initiative supporting the Metis network, the ultimate hub for the Web3 economy. Founded on the principles of decentralization, MiniMetis amplifies community governance to foster a collaborative and impactful ecosystem. MiniMetis makes Web3 accessible to everyone, from beginners to seasoned investors, with a vision to drive innovation and growth.",
      stack: ["react.js", "typescript", "framer motion"],
      img: "/5.Minimetis.svg",
    },
    {
      title: "NFTKastle",
      // gitLink: "https://github.com/axioris/nft-kastle",
      liveLink: "https://nftkastle.netlify.app/",
      about:
        "NFT Kastle is a Multimedia NFT Minter and Marketplace Dapp where users Mint, List, Stake, Buy, Sell NFTs and play Games to win NFTs or Tokens.",
      stack: ["react.js", "typescript", "css", "solidity", "framer motion"],
      img: "/6.NFTKastle.svg",
    },
    {
      title: "QbitPay",
      // gitLink: "https://github.com/axioris/qbit-pay-dapp",
      liveLink: "https://qbit-explorer.netlify.app/",
      about:
        "qAR payments are a secure, fast, and decentralized way to transfer value on the blockchain using QR codes. They’re designed to make crypto transactions as easy as scanning a code!",
      stack: ["react.js", "sass", "typescript", "vite", "qbit-sdk"],
      img: "/7.QbitPay.svg",
    },
    {
      title: "Car Auction",
      // gitLink: "https://github.com/axioris/solana-car-auction",
      liveLink: "https://solana-car-auction.vercel.app/",
      about:
        "A decentralized car auction platform powered by the Solana blockchain, offering seamless, fast, and transparent bidding experiences. Users can list, bid, and purchase vehicles with the benefits of blockchain technology, including low fees, secure transactions, and real-time smart contract integration.",
      stack: ["solana/web3.js", "rust", "anchor"],
      img: "/8.SolanaCarAuction.svg",
    },
    {
      title: "Tez Bytes",
      // gitLink: "https://github.com/axioris/nft-tez-bytes",
      liveLink: "https://tezbytes.netlify.app/",
      about:
        "Tez Bytes is a community-focused NFT marketplace designed to empower artists and creators in the decentralized Web3 ecosystem. Built on the principles of accessibility and transparency, Tez Bytes allows anyone to mint and sell NFTs without the need for applications or intermediaries. Artists receive payments directly upon sale, fostering a seamless and empowering environment for both creators and collectors.",
      stack: ["react", "tezos", "typescript"],
      img: "/9.TezBytes.svg",
    },
    {
      title: "Towne Space",
      gitLink: "https://github.com/axioris/TowneSpace",
      liveLink: "https://townespace-new.vercel.app/",
      about:
        "TowneSpace is a cutting-edge, composable protocol and toolset designed for NFT creators and developers on the Aptos blockchain. As the first composable NFT standard utilizing Aptos Digital Assets, it empowers creators with flexibility and innovation to redefine the Web3 landscape.",
      stack: ["react", "sass", "typescript", "tailwind"],
      img: "/10.TowneSpace.svg",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
