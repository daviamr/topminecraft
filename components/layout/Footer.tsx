import { Copyright } from "lucide-react";
import Image from "next/image";
import { AccordionFooter } from "./components/accordion-footer";

export function Footer() {
  return (
    <footer className="mt-16 bg-white dark:bg-[#262626] p-4 md:px-8 2xl:px-0">
      <div className="max-w-7xl m-auto">
        <div className="d-flex flex-col">
          <Image src="/logo-smc.webp" alt="Logo Top Minecraft Servidores" width={64} height={0} />
          <AccordionFooter />
        </div>
        <div className="d-flex flex-col border-t text-xs pb-2 pt-4 mt-4">
          <span>
            Este site <strong>não é um serviço oficial do Minecraft</strong> e <strong>não é aprovado, afiliado ou associado à Mojang Studios ou à Microsoft</strong> de nenhuma forma.
          </span>
        </div>

        <div className="py-4">
          <p className="d-flex justify-center text-xs opacity-75">
            <Copyright size={14} /> Minecraft Servidores
          </p>
          <p className="text-center text-xs opacity-75">
            2025 | Todos os direitos reservados
          </p>
        </div>
      </div>

    </footer >
  )
}