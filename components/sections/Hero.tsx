"use client"

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {

    const container = useRef<HTMLDivElement>(null);
    const words = [
        "Work",
        "faster.",
        "Think",
        "clearer.",
        "Do",
        "more.",
    ]

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(".hero-word", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    })
    .from(".hero-sub", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3")
    .from(".hero-cta", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.4")

  }, { scope: container })


    return (
        <section ref={container}
            className="min-h-screen flex flex-col items-center justify-center gap-8 py-20 px-6 sm:px-12 lg:px-20 text-center overflow-x-hidden">

            <h1 className="text-[clamp(3rem,10vw,9rem)] leading-[0.9] hero-title font-bold">
                {words.map((word, i) => (
                    <span key={i} className="hero-word p-2 sm:p-4 block">
                        {word}
                    </span>
                ))}
            </h1>

            <p className="hero-sub text-[clamp(1rem,2vw,1.25rem)] text-[#888] max-w-2xl mx-auto leading-relaxed">
            Velox uses AI to eliminate busywork so your team can focus on what actually matters.
            </p>


        </section>
    )
}