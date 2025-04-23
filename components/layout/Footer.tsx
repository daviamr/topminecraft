import { Copyright } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#262626] p-4 mt-16">
      <div className="flex flex-col justify-center items-center">
        <Image src="/logo-smc-render.png" alt="Logo Top Servidores Minecraft" width={80} height={0} />
        <p className="d-flex text-xs font-semibold opacity-75">
          <Copyright size={14} /> 2025 - Top Minecraft Servidores
        </p>
        <span className="text-xs font-semibold opacity-75">
          Todos os direitos reservados.
        </span>
        <p>Este site não é afiliado ao Minecraft ou à Mojang</p>
      </div>
    </footer>
  )
}