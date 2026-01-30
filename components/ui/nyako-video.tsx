import Image from "next/image"

interface NyakoVideoProps {
  className?: string
  width?: number
  height?: number
}

export function NyakoVideo({ className = "", width = 128, height = 96 }: NyakoVideoProps) {
  return (
    <Image
      src="/images/45.png"
      alt="Nyako character"
      width={width}
      height={height}
      className={`object-contain ${className}`}
    />
  )
}
