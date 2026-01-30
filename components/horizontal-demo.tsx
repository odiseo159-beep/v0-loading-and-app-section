import { Scroller } from "@/components/ui/scroller-1"
import Image from "next/image"

export default function HorizontalDemo() {
  return (
    <div className="w-full flex items-center justify-center py-12 2xl:py-16">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem] px-4">
        <h2
          className="text-6xl xl:text-7xl 2xl:text-8xl font-bold text-center mb-10 2xl:mb-16 text-foreground"
          style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
        >
          NYAKO LORE
        </h2>
        <Scroller height="100%" overflow="x" width="100%" withButtons childrenContainerClassName="gap-6 2xl:gap-8">
          <div className="bg-[#171717] dark:bg-[#ededed] h-[32rem] xl:h-[38rem] 2xl:h-[48rem] w-96 xl:w-[28rem] 2xl:w-[36rem] flex-shrink-0 relative overflow-hidden rounded-lg">
            <Image src="/nyako-portada.jpg" alt="Nyako Portada" fill className="object-contain" />
          </div>
          <div className="bg-[#171717] dark:bg-[#ededed] h-[32rem] xl:h-[38rem] 2xl:h-[48rem] w-96 xl:w-[28rem] 2xl:w-[36rem] flex-shrink-0 relative overflow-hidden rounded-lg">
            <Image src="/nyako-comic-2.jpg" alt="Nyako Comic 2" fill className="object-contain" />
          </div>
          <div className="bg-[#171717] dark:bg-[#ededed] h-[32rem] xl:h-[38rem] 2xl:h-[48rem] w-96 xl:w-[28rem] 2xl:w-[36rem] flex-shrink-0 relative overflow-hidden rounded-lg">
            <Image src="/nyako-comic-3.jpg" alt="Nyako Comic 3" fill className="object-contain" />
          </div>
          <div className="bg-[#171717] dark:bg-[#ededed] h-[32rem] xl:h-[38rem] 2xl:h-[48rem] w-96 xl:w-[28rem] 2xl:w-[36rem] flex-shrink-0 relative overflow-hidden rounded-lg">
            <Image src="/nyako-comic-4.jpg" alt="Nyako Comic 4" fill className="object-contain" />
          </div>
        </Scroller>
      </div>
    </div>
  )
}
