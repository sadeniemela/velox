"use client"

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { compileFunction } from "vm";

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
            className="min-h-screen flex flex-col items-start justify-center gap-8 py-20">

            <h1 className="text-[clamp(3rem,10vw,9rem)] leading-[0.9] hero-title font-bold">
                {words.map((word, i) => (
                    <span key={i} className="hero-word font-bold text-8xl p-4 block font-bold">
                        {word}
                    </span>
                ))}
            </h1>

            <p className="hero-sub text-[clamp(1rem,2vw,1.25rem)] text-[#888] max-w-120 leading-relaxed">
            Velox uses AI to eliminate busywork so your team can focus on what actually matters.
            </p>


        </section>
    )
}