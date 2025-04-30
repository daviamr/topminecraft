import Image from "next/image";



export function DiamondSeal({style}: {style?: string} ) {
  return (
    <div
      className={`flex items-center gap-1 absolute top-1 right-0 px-4 rounded-sm animate-bg-diamond select-none ${style}`}>
        <Image src="/diamante.png" alt="Selo Servidor Diamante" width={24} height={0}/>
      <p className="font-semibold text-sm uppercase text-white drop-shadow-[0_0_4px_white]">
        Diamante
        </p>
    </div>
  )
}