"use client"

// Importing necessary modules and types
import { useEffect } from "react"
import Lenis from "lenis"
import { ScrollTrigger } from "@/lib/gsap"

// Custom hook to initialize and manage the Lenis smooth scrolling library
export function useLenis() {
  useEffect(() => {
    // Creating a new instance of Lenis with specified options
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Setting up an event listener to update ScrollTrigger on scroll events
    lenis.on("scroll", ScrollTrigger.update)

    // Function to handle the animation frame updates for Lenis
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Recalculate ScrollTrigger's trigger positions now that Lenis is driving
    // scroll. Without this, ScrollTrigger can measure trigger elements before
    // layout/fonts settle and leave scroll-triggered animations (e.g. the
    // Features card fade-in) stuck in their "from" state.
    ScrollTrigger.refresh()

    // Cleanup function to destroy the Lenis instance when the component unmounts
    return () => {
      lenis.destroy()
    }
  }, [])
}