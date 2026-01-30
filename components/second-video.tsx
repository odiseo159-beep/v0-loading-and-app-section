import { BentoShowcase } from "@/components/bento-showcase"

export function SecondVideo() {
  return (
    <section id="bento-grid" className="relative w-full h-auto bg-black pb-0">
      <video autoPlay loop muted playsInline className="w-full h-auto object-contain z-10">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nyakobase%202-ZgmdESqjE3uCXqjxyVi6NmLHF4Xre1.mp4" type="video/mp4" />
      </video>

      {/* Overlay bento grid on the left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center p-8 md:p-12 lg:p-16 z-50">
        <BentoShowcase />
      </div>
    </section>
  )
}
