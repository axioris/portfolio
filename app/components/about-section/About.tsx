import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I am Building the Future of Decentralized Solutions
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            My passion lies in leveraging blockchain technology to create innovative solutions that empower businesses and drive the future of decentralization. 
            Whether it&apos;s developing decentralized applications (dApps) on Solana or crafting robust Bitcoin-powered platforms, 
            I&apos;m committed to helping brands navigate the ever-evolving Web3 landscape and achieve their next big milestone.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Each blockchain project presents a unique challenge—be it optimizing transaction speeds on Solana or ensuring scalability with Bitcoin integrations. 
            I tackle these challenges head-on, delivering solutions that are not only technically sound but also scalable and tailored to the needs of my clients. 
            I strive for continuous improvement, ensuring my work evolves with the rapidly advancing blockchain ecosystem.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
          Ready to explore how blockchain can transform your business? 
          Whether it&apos;s creating your next Solana dApp, integrating Bitcoin payment systems, or building decentralized solutions from scratch, 
          I&apos;d love to bring your vision to life. Let&apos;s connect and build something extraordinary.
          <br className="hidden md:block" />
          Wanna learn more? Here&apos;s 
            <Link
              className="underline ml-3"
              href={
                "https://drive.google.com/file/d/19kl0gQ_KnZ7fOwLdqoHRrUs-KuRRQdd5/view?usp=sharing"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Languages & Platforms
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Rust, JavaScript(ES6+), TypeScript, React, Next.js, Git/GitHub, Bitcoin Core, Solana, Algorand
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Ecosystem & Testing
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Metaplex, Phantom, Serum, Electrumm, Anchor Tests, Jest, Mocha, Ganache
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Smart Contract
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Anchor, SPL, Web3.js, Taproot, Stacks
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Infrastructure
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Solana CLI, Anchor CLI, Docker, AWS, GCP
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
