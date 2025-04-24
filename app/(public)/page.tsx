import { AccordionFAQ } from "@/components/home/accordion-FAQ";
import { TabelaServidores } from "@/components/home/table/tabela-servidores";
import { generateMetadata } from "@/components/SEO";
import { FaqSchema } from "@/components/SEO/FaqSchema";
import { ChevronsDown, Info, Megaphone } from "lucide-react";

export const metadata = generateMetadata({
  title: 'Encontre servidores de Minecraft de todos os tipos: survival, minigames, bedwars, fullpvp, rankup e muito mais. Servidores brasileiros e internacionais, atualizados constantemente para você jogar!',
  description: 'Descubra servidores de Minecraft de todos os tipos, com filtros por versão, região e modo de jogo. Jogue com a melhor experiência em servidores atualizados.',
  image: '',
  url: ''
})

export default function Page() {

  return (
    <>
      <FaqSchema />

      <main>
        <div>
          {/* main */}
          <div className="flex flex-col gap-4 p-4 mt-8">
            <h1 className="relative uppercase font-semibold text-5xl/11">
              Descubra os <span className="font-bold animate-text-gradient">Melhores Servidores de Minecraft</span> para Jogar Agora!
              <ChevronsDown size={32} className="absolute text-verde-claro bottom-0 right-4 animate-bounce" />
            </h1>
            <div>
              <h2 className="mb-2 text-justify">
                Explore seleções <span className="font-bold">atualizadas</span> com os <span className="font-bold">melhores servidores de Minecraft</span> do <span className="font-bold">Brasil</span> e do <span className="font-bold">mundo</span>!
              </h2>
              <h2 className="relative text-justify">
                Filtre por modo de jogo como <span className="font-bold">Survival, BedWars, FullPvP, Skyblock, Rankup</span> e muito mais. Encontre seu servidor favorito, entre com um clique e comece sua aventura agora mesmo!
              </h2>
            </div>
          </div>

          {/* anuncios */}
          <div className="flex flex-col gap-2 p-4 border mt-8">
            <div className="animate-background-gradient p-1 rounded-t-sm">
              <Megaphone size={18} color="white" />
            </div>
            <div className="bg-gray-500 flex items-center justify-center w-full p-4">
              <p className="text-white">Anuncie aqui!</p>
            </div>
          </div>

          {/* tabela */}
          <div>
            <TabelaServidores />
          </div>

          {/* accordions */}
          <div className="mt-8 p-4 bg-white dark:bg-[#262626]">
            <h3 className="d-flex justify-center text-2xl font-semibold mb-4">
              <Info />
              Perguntas frenquentes
            </h3>
            <AccordionFAQ />
          </div>

        </div>
      </main>
    </>
  );
}
