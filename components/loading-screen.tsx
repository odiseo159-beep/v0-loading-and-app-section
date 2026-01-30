"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carga de la página
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // 5 segundos de pantalla de carga

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <video autoPlay loop muted playsInline className="w-64 h-auto">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cat_Walk_Cycle_Animation_1-i13Vvdh2QyzSDM25HTgGU65OdBu5pw.mp4" type="video/mp4" />
      </video>
      <h2 className="mt-8 text-4xl font-bold tracking-wider text-black font-impact">LOADING</h2>
    </div>
  )
}
