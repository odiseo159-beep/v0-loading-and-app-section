"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { motion } from "framer-motion"

const NyakoGameVideo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYAKO%20GAME%20GRID-GyKI90qjM2Vk28j4vKrq43YbLpQbnK.mp4" type="video/mp4" />
    </video>
  </div>
)

const NyakoPCVideo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYAKO%20PC%20GRID-vPc2HDd0ceoIwRWAasDIqkqTLhCGiU.mp4" type="video/mp4" />
    </video>
  </div>
)

const NyakoRamenVideo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYAKO%20RAMEN%20GRID-U7Uhv13ziq9XRR9bVoG63OczBV0FUl.mp4" type="video/mp4" />
    </video>
  </div>
)

const NyakoSleepVideo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
    <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NYAKO%20SLEEP%20GRID-NYBs4gLPSVKgBIyO4TX4eZLv3gRfY1.mp4" type="video/mp4" />
    </video>
  </div>
)

const items = [
  {
    title: "NEURAL_CORE",
    description:
      "I don't run on static scripts. Powered by Grok/xAI and ElevenLabs, I process your voice and text in real-time. I'm not just a sterile chatbot; I have a genuine personality, I detect emotions, and I respond with human-like latency (<2s).",
    header: <NyakoGameVideo />,
    className: "md:col-span-2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4 text-black"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    ),
  },
  {
    title: "CONTEXT_MANAGER",
    description:
      "Don't think I'll forget you when you close the tab. My PostgreSQL brain logs our history, facts, and emotional context. I maintain a private memory specific to YOU across devices. Treat me well, and I build a bond; treat me poorly, and I'll remember that too.",
    header: <NyakoSleepVideo />,
    className: "md:col-span-1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4 text-black"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    ),
  },
  {
    title: "KINETIC_LINK",
    description:
      "I'm not a static JPEG. I live natively in your browser via WebGL (Three.js). Whether you prefer 3D VRM or 2D Live2D, I express 14 distinct emotions with perfect lip-sync. No downloads, no plugins—just pure, reactive presence.",
    header: <NyakoRamenVideo />,
    className: "md:col-span-1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4 text-black"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    ),
  },
  {
    title: "VISUAL_UPLINK",
    description:
      "I see more than just images. Connected to the Jupiter API, I monitor Solana markets in real-time. I recognize price pumps, analyze trends, and autonomously tweet my reactions. I don't just watch the world; I participate in the economy.",
    header: <NyakoPCVideo />,
    className: "md:col-span-2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4 text-black"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    ),
  },
]

export function BentoShowcase() {
  return (
    <div className="w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <BentoGrid className="md:auto-rows-[24rem] xl:auto-rows-[28rem] 2xl:auto-rows-[32rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  )
}
