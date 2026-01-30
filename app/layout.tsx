import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const _impact = localFont({
  src: "../public/fonts/impact.ttf",
  variable: "--font-impact",
})

const _msyi = localFont({
  src: "../public/fonts/msyi.ttf",
  variable: "--font-msyi",
})

const _roboto = localFont({
  src: "../public/fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Tu Visión Digital | Experiencias Web Innovadoras",
  description: "Creamos experiencias web innovadoras que transforman ideas en realidades digitales impactantes.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased ${_impact.variable} ${_msyi.variable} ${_roboto.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
