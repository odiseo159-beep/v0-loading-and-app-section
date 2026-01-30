"use client"

import { useEffect, useRef } from "react"
import { RippleButton } from "./ui/ripple-button"
import Link from "next/link"

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("[v0] Autoplay was prevented:", error)
      })
    }
  }, [])

  const handleLearnMore = () => {
    const bentoSection = document.getElementById("bento-grid")
    if (bentoSection) {
      bentoSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bakgroundnyako-9qju8l2fMnJav2W6LhfZmEcc1P9QYh.mp4" type="video/mp4" />
      </video>

      <div className="absolute bottom-24 left-0 right-0 z-10 flex flex-col items-center gap-6 px-4">
        <p className="text-white text-center text-xl md:text-2xl font-impact max-w-4xl leading-relaxed font-sans">
          Powered by Grok. Living on Solana. The first Autonomous AI Companion that remembers you, watches the markets,
          and acts on its own.
        </p>
        <div className="flex flex-row gap-4 items-center">
          <RippleButton onClick={handleLearnMore}>Learn More</RippleButton>
          <Link href="/app">
            <RippleButton>Launch App</RippleButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
