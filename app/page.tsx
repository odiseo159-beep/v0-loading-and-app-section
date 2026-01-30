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
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FDF6E3]">
        <video autoPlay loop muted playsInline className="w-64 h-auto">
          <source
            src="/images/cat-walk-cycle-animation-1.mp4"
            type="video/mp4"
          />
        </video>
        <h2 className="mt-8 text-4xl font-bold tracking-wider text-[#8B7355]">LOADING</h2>
      </div>
    )
  }

  return (
    <div 
      className="min-h-screen text-[#6B5344] relative"
      style={{
        backgroundImage: `url('/images/14.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-[#FDF6E3]/30" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="p-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#6B5344] transition-colors text-lg bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[#C4A574] shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">BACK</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="px-6 pb-10 max-w-[1600px] mx-auto">
          <div className="flex gap-6">
            {/* Left Side - Stream */}
            <div
              className="relative flex-1 group"
              style={{ height: "650px" }}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              {/* Kawaii frame wrapper */}
              <div className="absolute -inset-3 bg-[#C4A574] rounded-[2rem] border-4 border-[#8B7355]" />
              <div className="absolute -inset-1 bg-[#FDF6E3] rounded-[1.5rem] border-2 border-[#C4A574]" 
                   style={{ 
                     borderStyle: 'dashed',
                     backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(196, 165, 116, 0.1) 10px, rgba(196, 165, 116, 0.1) 20px)'
                   }} 
              />
              
              <div className="relative rounded-2xl overflow-hidden bg-white h-full border-2 border-[#C4A574]">
                <iframe
                  src="https://amica-importer--ethshilder.replit.app/"
                  className="w-full h-full border-0"
                  allow="microphone; camera; autoplay"
                  allowFullScreen
                />

                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF6E3]/95 hover:bg-[#FDF6E3] backdrop-blur-sm border-2 border-[#C4A574] transition-colors shadow-md"
                    title="Brain/Thoughts"
                  >
                    <Brain className="w-5 h-5 text-[#E8A4B8]" />
                    <span className="text-[#6B5344] text-sm font-bold">Thoughts</span>
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF6E3]/95 hover:bg-[#FDF6E3] backdrop-blur-sm border-2 border-[#C4A574] transition-colors shadow-md"
                    title="Watch Media"
                  >
                    <MonitorPlay className="w-5 h-5 text-[#E8A4B8]" />
                    <span className="text-[#6B5344] text-sm font-bold">Watch Media</span>
                  </button>
                </div>

                {/* Bottom controls bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#C4A574]/95 via-[#C4A574]/70 to-transparent p-4 transition-opacity duration-300 ${
                    showControls ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {/* Left Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-[#E8A4B8] hover:bg-[#D893A7] flex items-center justify-center transition-colors border-2 border-[#D893A7] shadow-md"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        )}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-10 h-10 rounded-full bg-[#FDF6E3] hover:bg-white flex items-center justify-center transition-colors border-2 border-[#C4A574] shadow-md"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5 text-[#6B5344]" /> : <Volume2 className="w-5 h-5 text-[#6B5344]" />}
                      </button>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        className="w-10 h-10 rounded-full bg-[#FDF6E3] hover:bg-white flex items-center justify-center transition-colors border-2 border-[#C4A574] shadow-md"
                        title="Developer Tools"
                      >
                        <Code className="w-5 h-5 text-[#6B5344]" />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full bg-[#FDF6E3] hover:bg-white flex items-center justify-center transition-colors border-2 border-[#C4A574] shadow-md"
                        title="AI Configuration"
                      >
                        <Bot className="w-5 h-5 text-[#6B5344]" />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full bg-[#FDF6E3] hover:bg-white flex items-center justify-center transition-colors border-2 border-[#C4A574] shadow-md"
                        title="Settings"
                      >
                        <Settings className="w-5 h-5 text-[#6B5344]" />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full bg-[#FDF6E3] hover:bg-white flex items-center justify-center transition-colors border-2 border-[#C4A574] shadow-md"
                        title="Fullscreen"
                      >
                        <Maximize className="w-5 h-5 text-[#6B5344]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Chat */}
            <div
              className="w-[340px] relative"
              style={{ height: "650px" }}
            >
              {/* Kawaii frame wrapper for chat */}
              <div className="absolute -inset-3 bg-[#C4A574] rounded-[2rem] border-4 border-[#8B7355]" />
              <div className="absolute -inset-1 bg-[#FDF6E3] rounded-[1.5rem] border-2 border-[#C4A574]" 
                   style={{ borderStyle: 'dashed' }} 
              />
              
              <div className="relative rounded-2xl border-2 border-[#C4A574] bg-[#FFFEF9] flex flex-col h-full overflow-hidden shadow-lg">
                {/* Chat Tabs */}
                <div className="flex border-b-2 border-[#E8DCC8] bg-[#FDF6E3]">
                  <button
                    onClick={() => setActiveTab("group")}
                    className={`flex-1 py-3 text-sm font-bold transition-colors ${
                      activeTab === "group" ? "text-[#6B5344] border-b-3 border-[#E8A4B8] bg-white" : "text-[#A89078] hover:text-[#6B5344]"
                    }`}
                  >
                    Group Chat
                  </button>
                  <button
                    onClick={() => setActiveTab("private")}
                    className={`flex-1 py-3 text-sm font-bold transition-colors flex items-center justify-center gap-1 ${
                      activeTab === "private" ? "text-[#6B5344] border-b-3 border-[#E8A4B8] bg-white" : "text-[#A89078] hover:text-[#6B5344]"
                    }`}
                  >
                    Private Chat
                    <Lock className="w-3 h-3" />
                  </button>
                </div>

                {/* Donation highlights */}
                <div className="p-3 space-y-2 border-b-2 border-[#E8DCC8] bg-[#FDF6E3]/50">
                  <div className="flex items-center gap-2 text-sm bg-white/70 px-3 py-2 rounded-full border border-[#E8DCC8]">
                    <span className="w-6 h-6 rounded-full bg-[#E8A4B8] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                      6
                    </span>
                    <span className="text-[#E8A4B8] font-bold">$0.42</span>
                    <span className="text-[#6B5344]">FireFox2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-white/70 px-3 py-2 rounded-full border border-[#E8DCC8]">
                    <span className="w-6 h-6 rounded-full bg-[#F5D89A] flex items-center justify-center text-[#8B7355] text-xs font-bold shadow-sm">
                      1
                    </span>
                    <span className="text-[#C4A574] font-bold">$1.25</span>
                    <span className="text-[#6B5344]">StreamWatcher</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages
                    .filter((m) => m.message)
                    .map((msg) => (
                      <div key={msg.id} className="space-y-1">
                        <span className={`text-sm font-bold ${msg.isNyako ? "text-[#E8A4B8]" : "text-[#6B5344]"}`}>
                          {msg.isNyako && <span className="inline-block w-4 h-4 rounded-full bg-[#E8A4B8] mr-1 border border-[#D893A7]"></span>}
                          {msg.user}
                        </span>
                        <p
                          className={`text-sm px-4 py-2 rounded-2xl shadow-sm ${
                            msg.isNyako 
                              ? "bg-[#E8A4B8] text-white font-medium border-2 border-[#D893A7]" 
                              : "bg-[#FDF6E3] text-[#6B5344] border-2 border-[#E8DCC8]"
                          }`}
                        >
                          {msg.message}
                        </p>
                      </div>
                    ))}
                </div>

                {/* Connect Wallet */}
                <div className="p-4 border-t-2 border-[#E8DCC8] bg-[#FDF6E3]">
                  <p className="text-sm font-bold text-[#6B5344] mb-1">Connect wallet to chat</p>
                  <p className="text-xs text-[#A89078] mb-3">
                    Chat with <Lock className="w-3 h-3 inline" /> Nyako
                  </p>
                  <Button className="w-full bg-[#E8A4B8] hover:bg-[#D893A7] text-white font-bold rounded-full border-2 border-[#D893A7] shadow-md">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section Below */}
          <div className="mt-10 relative">
            {/* Kawaii frame wrapper for info */}
            <div className="absolute -inset-3 bg-[#C4A574] rounded-[2rem] border-4 border-[#8B7355]" />
            <div className="absolute -inset-1 bg-[#FDF6E3] rounded-[1.5rem] border-2 border-[#C4A574]" 
                 style={{ borderStyle: 'dashed' }} 
            />
            
            <div className="relative p-8 rounded-2xl border-2 border-[#C4A574] bg-[#FFFEF9] shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_auto_auto] gap-8 items-start">
                {/* Column 1: Name, Description, Link */}
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 p-3 bg-[#FDF6E3] rounded-2xl border-2 border-[#E8DCC8] inline-block">
                      <NyakoVideo width={128} height={96} />
                    </div>
                    <span className="inline-block mt-2 px-4 py-1 text-sm font-bold bg-[#E8A4B8] rounded-full border-2 border-[#D893A7] text-white shadow-sm">
                      AI
                    </span>
                  </div>
                  <div className="text-[#6B5344] text-base leading-relaxed">
                    <p>
                      Powered by Grok. Living on Solana. The first Autonomous AI Companion that remembers you, watches the
                      markets, and acts on its own.
                      {showMore &&
                        " Running on impulse and chaos energy, she's here to entertain, roast, and occasionally give surprisingly good advice."}
                    </p>
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="text-[#E8A4B8] hover:text-[#D893A7] mt-2 text-base font-bold"
                    >
                      {showMore ? "Show Less" : "Show More"}
                    </button>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDF6E3] border-2 border-[#E8DCC8] rounded-full hover:border-[#E8A4B8] transition-colors text-base text-[#6B5344] shadow-sm"
                  >
                    <span>https://nyako.ai</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Column 2: Contract, Wallet & Stats */}
                <div className="space-y-5">
                  {/* Contract & Wallet */}
                  <div className="flex gap-6">
                    <div className="bg-[#FDF6E3] p-3 rounded-xl border-2 border-[#E8DCC8]">
                      <div className="flex items-center gap-2 text-xs text-[#A89078] mb-1 font-bold">
                        <span>CONTRACT</span>
                        <ExternalLink className="w-3 h-3" />
                        <button onClick={() => handleCopy("contract", "0xNYAK0...F1R3")}>
                          {copied === "contract" ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                      <p className="text-sm font-mono text-[#6B5344]">0xNYAK0...F1R3</p>
                    </div>
                    <div className="bg-[#FDF6E3] p-3 rounded-xl border-2 border-[#E8DCC8]">
                      <div className="flex items-center gap-2 text-xs text-[#A89078] mb-1 font-bold">
                        <span>WALLET</span>
                        <ExternalLink className="w-3 h-3" />
                        <button onClick={() => handleCopy("wallet", "0xCAT39...BURN")}>
                          {copied === "wallet" ? (
                            <Check className="w-3 h-3 text-green-500" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                      <p className="text-sm font-mono text-[#6B5344]">0xCAT39...BURN</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 pt-4 border-t-2 border-[#E8DCC8]">
                    <div className="bg-[#FDF6E3] p-3 rounded-xl border-2 border-[#E8DCC8]">
                      <p className="text-xs text-[#A89078] font-bold">MARKET CAP</p>
                      <p className="text-xl font-bold text-[#6B5344]">$742,891</p>
                      <p className="text-xs text-[#E8A4B8]">-0.00%</p>
                    </div>
                    <div className="bg-[#FDF6E3] p-3 rounded-xl border-2 border-[#E8DCC8]">
                      <p className="text-xs text-[#A89078] font-bold">TOTAL VOLUME</p>
                      <p className="text-xl font-bold text-[#6B5344]">$583,204</p>
                    </div>
                    <div className="bg-[#FDF6E3] p-3 rounded-xl border-2 border-[#E8DCC8]">
                      <p className="text-xs text-[#A89078] font-bold">SUBSCRIBERS</p>
                      <p className="text-xl font-bold text-[#6B5344]">128</p>
                    </div>
                  </div>
                </div>

                {/* Column 3: Trade */}
                <div className="space-y-3 min-w-[200px]">
                  <div className="flex items-center justify-between">
                    <span className="text-base text-[#A89078] font-bold">TRADE</span>
                    <Info className="w-5 h-5 text-[#C4A574]" />
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-[#E8A4B8] hover:bg-[#D893A7] text-white font-bold text-base px-6 py-2.5 rounded-full border-2 border-[#D893A7] shadow-md">
                      <Heart className="w-5 h-5 mr-2 fill-current" />
                      BUY
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-[#C4A574] hover:border-[#8B7355] font-bold bg-[#FDF6E3] text-[#6B5344] text-base px-6 py-2.5 rounded-full shadow-md"
                    >
                      <Minus className="w-5 h-5 mr-2" />
                      SELL
                    </Button>
                  </div>
                </div>

                {/* Column 4: Subscribe */}
                <div className="space-y-3 min-w-[200px]">
                  <div className="flex items-center justify-between">
                    <span className="text-base text-[#A89078] font-bold">SUBSCRIBE</span>
                    <Info className="w-5 h-5 text-[#C4A574]" />
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-[#F5D89A] hover:bg-[#E8C987] text-[#6B5344] font-bold border-2 border-[#E8C987] text-base px-6 py-2.5 rounded-full shadow-md">
                      <Lock className="w-5 h-5 mr-2" />
                      SUB
                    </Button>
                    <Button variant="ghost" className="text-[#C4A574] font-bold text-base px-6 py-2.5 rounded-full" disabled>
                      <Lock className="w-5 h-5 mr-2" />
                      UNSUB
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
