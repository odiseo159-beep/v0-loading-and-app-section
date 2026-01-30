"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  ExternalLink,
  Copy,
  Check,
  Lock,
  Heart,
  Minus,
  Info,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Settings,
  Maximize,
  Code,
  Bot,
  Brain,
  MonitorPlay,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NyakoVideo } from "@/components/ui/nyako-video"

const chatMessages = [
  { id: 1, user: "FireFox2024", message: "nyako gang representin", amount: "$0.42", isNyako: false },
  { id: 2, user: "StreamWatcher", message: "", amount: "$1.25", isNyako: false },
  { id: 3, user: "FireFox2024", message: "nyako gang representin", isNyako: false },
  { id: 4, user: "CatLover99", message: "building the future one stream at a time", isNyako: false },
  { id: 5, user: "MetaGamer3574", message: "will there be merch or just digital collectibles?", isNyako: false },
  { id: 6, user: "Nyako", message: "haven't decided yet but merch sounds fun ngl", isNyako: true },
]

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [copied, setCopied] = useState<"contract" | "wallet" | null>(null)
  const [showMore, setShowMore] = useState(false)
  const [activeTab, setActiveTab] = useState<"group" | "private">("group")
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleCopy = (type: "contract" | "wallet", text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
        <video autoPlay loop muted playsInline className="w-64 h-auto">
          <source
            src="/images/cat-walk-cycle-animation-1.mp4"
            type="video/mp4"
          />
        </video>
        <h2 className="mt-8 text-4xl font-bold tracking-wider text-black font-impact">LOADING</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F3BA2F] text-black">
      {/* Header */}
      <div className="p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black/80 hover:text-black transition-colors text-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">BACK</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-10 max-w-[1600px] mx-auto">
        <div className="flex gap-4">
          {/* Left Side - Stream */}
          <div
            className="relative rounded-2xl overflow-hidden border border-gray-800 bg-black flex-1 group"
            style={{ height: "650px" }}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <iframe
              src="https://amica-importer--ethshilder.replit.app/"
              className="w-full h-full border-0"
              allow="microphone; camera; autoplay"
              allowFullScreen
            />

            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 hover:bg-white backdrop-blur-sm border border-gray-300 transition-colors"
                title="Brain/Thoughts"
              >
                <Brain className="w-5 h-5 text-[#F3BA2F]" />
                <span className="text-black text-sm font-bold">Thoughts</span>
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 hover:bg-white backdrop-blur-sm border border-gray-300 transition-colors"
                title="Watch Media"
              >
                <MonitorPlay className="w-5 h-5 text-[#F3BA2F]" />
                <span className="text-black text-sm font-bold">Watch Media</span>
              </button>
            </div>

            {/* Bottom controls bar */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-opacity duration-300 ${
                showControls ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center justify-between">
                {/* Left Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-full bg-[#F3BA2F] hover:bg-[#d4a328] flex items-center justify-center transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-black" />
                    ) : (
                      <Play className="w-5 h-5 text-black ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5 text-black" /> : <Volume2 className="w-5 h-5 text-black" />}
                  </button>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2">
                  <button
                    className="w-10 h-10 rounded-lg bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                    title="Developer Tools"
                  >
                    <Code className="w-5 h-5 text-black" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-lg bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                    title="AI Configuration"
                  >
                    <Bot className="w-5 h-5 text-black" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-lg bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                    title="Settings"
                  >
                    <Settings className="w-5 h-5 text-black" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-lg bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                    title="Fullscreen"
                  >
                    <Maximize className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Chat */}
          <div
            className="w-[320px] rounded-2xl border border-gray-200 bg-white flex flex-col"
            style={{ height: "650px" }}
          >
            {/* Chat Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab("group")}
                className={`flex-1 py-3 text-sm font-bold transition-colors ${
                  activeTab === "group" ? "text-black border-b-2 border-black" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Group Chat
              </button>
              <button
                onClick={() => setActiveTab("private")}
                className={`flex-1 py-3 text-sm font-bold transition-colors flex items-center justify-center gap-1 ${
                  activeTab === "private" ? "text-black border-b-2 border-black" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                Private Chat
                <Lock className="w-3 h-3" />
              </button>
            </div>

            {/* Donation highlights */}
            <div className="p-3 space-y-1 border-b border-gray-100">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-black text-xs font-bold">
                  6
                </span>
                <span className="text-[#F3BA2F] font-bold">$0.42</span>
                <span className="text-gray-700">FireFox2024</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-black text-xs font-bold">
                  1
                </span>
                <span className="text-[#F3BA2F] font-bold">$1.25</span>
                <span className="text-gray-700">StreamWatcher</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-4">
              {chatMessages
                .filter((m) => m.message)
                .map((msg) => (
                  <div key={msg.id} className="space-y-1">
                    <span className={`text-sm font-bold ${msg.isNyako ? "text-[#F3BA2F]" : "text-gray-800"}`}>
                      {msg.isNyako && <span className="inline-block w-4 h-4 rounded-full bg-[#F3BA2F] mr-1"></span>}
                      {msg.user}
                    </span>
                    <p
                      className={`text-sm px-3 py-2 rounded-lg ${
                        msg.isNyako ? "bg-[#F3BA2F] text-black font-bold" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {msg.message}
                    </p>
                  </div>
                ))}
            </div>

            {/* Connect Wallet */}
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm font-bold text-gray-800 mb-1">Connect wallet to chat</p>
              <p className="text-xs text-gray-500 mb-3">
                Chat with <Lock className="w-3 h-3 inline" /> Nyako
              </p>
              <Button className="w-full bg-[#F3BA2F] hover:bg-[#d4a328] text-black font-bold">
                <ExternalLink className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        </div>

        {/* Info Section Below */}
        <div className="mt-8 p-8 rounded-2xl border border-gray-300 bg-white font-roboto">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_auto_auto] gap-8 items-start">
            {/* Column 1: Name, Description, Link */}
            <div className="space-y-4">
              <div>
                <div className="mb-2">
                  <NyakoVideo width={128} height={96} />
                </div>
                <span className="inline-block mt-2 px-3 py-1 text-sm font-bold bg-gray-100 rounded-full border border-gray-300 text-black">
                  AI
                </span>
              </div>
              <div className="text-gray-700 text-base leading-relaxed">
                <p className="text-black">
                  Powered by Grok. Living on Solana. The first Autonomous AI Companion that remembers you, watches the
                  markets, and acts on its own.
                  {showMore &&
                    " Running on impulse and chaos energy, she's here to entertain, roast, and occasionally give surprisingly good advice."}
                </p>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-[#F3BA2F] hover:underline mt-2 text-base font-bold"
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-xl hover:border-[#F3BA2F] transition-colors text-base text-black"
              >
                <span>https://nyako.ai</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Column 2: Contract, Wallet & Stats */}
            <div className="space-y-5">
              {/* Contract & Wallet */}
              <div className="flex gap-8">
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1 font-bold">
                    <span>CONTRACT</span>
                    <ExternalLink className="w-4 h-4" />
                    <button onClick={() => handleCopy("contract", "0xNYAK0...F1R3")}>
                      {copied === "contract" ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-base font-mono text-black">0xNYAK0...F1R3</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-1 font-bold">
                    <span>WALLET</span>
                    <ExternalLink className="w-4 h-4" />
                    <button onClick={() => handleCopy("wallet", "0xCAT39...BURN")}>
                      {copied === "wallet" ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-base font-mono text-black">0xCAT39...BURN</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4 border-t border-gray-300">
                <div>
                  <p className="text-sm text-gray-500 font-bold">MARKET CAP</p>
                  <p className="text-2xl font-bold text-black">$742,891</p>
                  <p className="text-sm text-red-500">-0.00%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold">TOTAL VOLUME</p>
                  <p className="text-2xl font-bold text-black">$583,204</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold">SUBSCRIBERS</p>
                  <p className="text-2xl font-bold text-black">128</p>
                </div>
              </div>
            </div>

            {/* Column 3: Trade */}
            <div className="space-y-3 min-w-[200px]">
              <div className="flex items-center justify-between">
                <span className="text-base text-gray-500 font-bold">TRADE</span>
                <Info className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex gap-3">
                <Button className="bg-[#F3BA2F] hover:bg-[#d4a328] text-black font-bold text-base px-6 py-2.5">
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  BUY
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400 font-bold bg-transparent text-black text-base px-6 py-2.5"
                >
                  <Minus className="w-5 h-5 mr-2" />
                  SELL
                </Button>
              </div>
            </div>

            {/* Column 4: Subscribe */}
            <div className="space-y-3 min-w-[200px]">
              <div className="flex items-center justify-between">
                <span className="text-base text-gray-500 font-bold">SUBSCRIBE</span>
                <Info className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex gap-3">
                <Button className="bg-gray-200 hover:bg-gray-300 text-black font-bold border border-gray-300 text-base px-6 py-2.5">
                  <Lock className="w-5 h-5 mr-2" />
                  SUB
                </Button>
                <Button variant="ghost" className="text-gray-400 font-bold text-base px-6 py-2.5" disabled>
                  <Lock className="w-5 h-5 mr-2" />
                  UNSUB
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
