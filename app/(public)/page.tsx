import { AccordionFAQ } from "@/components/home/accordion-FAQ";
import { DesktopFilters } from "@/components/home/table/components/desktop-filters";
import { ServersTable } from "@/components/home/table/servers-table";
import { generateMetadata } from "@/components/SEO";
import { ChevronsDown, CircleHelp, Megaphone } from "lucide-react";
import Image from "next/image";

export const metadata = generateMetadata({
  title: 'Encontre servidores de Minecraft de todos os tipos: survival, minigames, bedwars, fullpvp, rankup e muito mais. Servidores brasileiros e internacionais, atualizados constantemente para você jogar!',
  description: 'Descubra servidores de Minecraft de todos os tipos, com filtros por versão, região e modo de jogo. Jogue com a melhor experiência em servidores atualizados.',
  image: '',
  url: ''
})

export default function Page() {

  return (
    <>
      <main>
        <div className="relative max-w-7xl m-auto">
          {/* anuncios desktop aside*/}
          <aside className="hidden xl:block fixed top-20 z-10 right-2">
            <div className="h-100 w-25 bg-gray-500 rounded-sm flex flex-col gap-4 items-center justify-center">
              <p className="text-gray-200 text-base rounded-t-sm text-center">Anuncie Aqui</p>
              <p className="text-gray-200 text-base rounded-t-sm text-center">100x400</p>
            </div>
          </aside>

          {/* main */}
          <div className="flex flex-col gap-4 p-4 mt-8
          md:p-8 md:text-center
          lg:mx-auto lg:my-16
          xl:text-left xl:w-full xl:mx-0 xl:flex xl:flex-row xl:justify-between
          2xl:px-0">
            <div className="lg:max-w-165">
              <h1 className="relative uppercase font-semibold text-5xl/11">
                Descubra os <span className="font-bold animate-text-gradient">Melhores Servidores de Minecraft</span> para Jogar Agora!
                <ChevronsDown size={32} className="absolute text-verde-claro bottom-0 right-4 animate-bounce" />
              </h1>
              <div>
                <h2 className="mb-2 text-justify
                md:text-center
                xl:text-left">
                  Explore seleções <span className="font-bold">atualizadas</span> com os <span className="font-bold">melhores servidores de Minecraft</span> do <span className="font-bold">Brasil</span> e do <span className="font-bold">mundo</span>!
                </h2>
                <h2 className="relative text-justify
                md:text-center
                xl:text-left">
                  Filtre por modo de jogo como <span className="font-bold">Survival, BedWars, FullPvP, Skyblock, Rankup</span> e muito mais. Encontre seu servidor favorito, entre com um clique e comece sua aventura agora mesmo!
                </h2>
              </div>
            </div>
            <Image src="/steve-search-server.webp" alt="Steve Procurando um Servidor no Servidores Minecraft"
              className="hidden xl:block dark:drop-shadow-2xl -scale-x-100"
              width={460} height={0} />
          </div>

          {/* anuncios */}
          <div className="flex flex-col gap-2 p-4 border-t border-b mt-8
          md:p-8 xl:hidden">
            <div className="animate-background-gradient p-1 rounded-t-sm">
              <Megaphone size={18} color="white" />
            </div>
            <div className="bg-gray-500 flex items-center justify-center w-full p-4">
              <p className="text-white">Anuncie aqui!</p>
            </div>
          </div>

          {/* tabela */}
          <div className="md:p-8 lg:flex lg:gap-4 2xl:px-0">
            <DesktopFilters />
            <ServersTable />
          </div>

          {/* accordions */}

        </div>
        <div className="mt-8 p-4 bg-white dark:bg-[#262626]
        md:p-8
        2xl:px-0">
          <div className="max-w-7xl m-auto
          lg:flex lg:gap-8">
            <div>
              <h3 className="flex items-center gap-2 justify-center text-2xl font-semibold mb-4
              lg:text-4xl lg:items-start">
                <CircleHelp className="lg:w-10 lg:h-10" />
                Perguntas frenquentes
              </h3>
            </div>
            <AccordionFAQ />
          </div>
        </div>
      </main>
    </>
  );
}
