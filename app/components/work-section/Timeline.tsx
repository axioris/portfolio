"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/pontem.svg",
    jobTitle: "Lead Blockchain Solutions Architect",
    company: "Pontem Innovations",
    jobType: "Remote",
    duration: "Oct 2023 - Oct 2024",
    stuffIDid: [
      "Supervised 3 developers to create several e-commerce dApps based on Solana and Algorand",
      "Designed complex algorithms for smart contracts, successfully reducing gas fees by 15% while maintaining functionality",
      "Developed various Trading Bots like Sniper, Volume, Arbitrage, Swing, Scalping Bots for Solana DEX platforms (Raydium, Serum, etc)",
    ],
  },
  {
    companyImg: "/default.svg",
    jobTitle: "Blockchain Network Optimization Specialist",
    company: "Amberdata",
    jobType: "Remote",
    duration: "Apr 2023 - Sept 2023",
    stuffIDid: [
      "Improved blockchain network efficiency through innovative tech implementations, reducing transaction latency by 10%",
      "Led a team of 2 developers in optimizing smart contract functionalities, achieving a 30% increase in execution efficiency",
      "Supported migrations of blockchain applications, decreasing downtime during transitions by 15%",
    ],
  },
  {
    companyImg: "/multis.svg",
    jobTitle: "Decentralized Finance (DeFi) Solutions Developer",
    company: "Multis",
    jobType: "Remote",
    duration: "Jan 2020 - Mar 2022",
    stuffIDid: [
      "Created the frontend part of a decentralized finance (DeFi) project using React and Redux",
      "Updated and Conducted a large point-of-sale (POS) system using Vue and Typescript",
      "Wrote smart contracts in Rust for the Solana blockchain",
      "Redesigned software that helped customers to simulate loans which increased the loans by 10%",
      "Utilized technologies such as Anchor, Tokio, Rocket, and @solana/web3.js",
      "Collaborated with team members to meet project deadlines and enhance platform performance.",
      "Participated in the development of cutting-edge blockchain solutions, which increased transactional throughput by 33%",
    ],
  },
  {
    companyImg: "/roobinium.svg",
    jobTitle: "Blockchain Network Optimization Specialist",
    company: "Roobinium Corp",
    jobType: "Internship",
    duration: "Jun 2018 - Dec 2019",
    stuffIDid: [
      "Competed 7+ projects using React, Redux, NodeJS and Socket.io",
      "Deployed applications using Docker and Kubernetes",
      "Converted user interfaces by updating menus to be more intuitive, attracting 5% more clients than the previous quarter",
      "Participated in developing a complex bookkeeping system that handled financial transactions 60% more efficiently",
      "Enhanced database performance by 12% by using materialized views and stored procedures",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
