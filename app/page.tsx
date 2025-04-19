import { TabelaServidores } from "@/components/home/tabela-servidores";
import Header from "@/components/layout/Header";
import { generateMetadata } from "@/components/SEO";
import { ChevronsDown } from "lucide-react";

export const metadata = generateMetadata({
  title: 'Encontre servidores de Minecraft de todos os tipos: survival, minigames, bedwars, fullpvp, rankup e muito mais. Servidores brasileiros e internacionais, atualizados constantemente para você jogar!',
  description: 'Descubra servidores de Minecraft de todos os tipos, com filtros por versão, região e modo de jogo. Jogue com a melhor experiência em servidores atualizados.',
  image: '',
  url: ''
})

export default function Page() {

  return (
    <div>
      <Header />

      <main>
        <div>
          {/* main */}
          <div className="flex flex-col gap-4 p-4 mt-8">
            <h1 className="relative uppercase font-semibold text-5xl/11">
              Descubra os <span className="font-bold animate-text-gradient">Melhores Servidores de Minecraft</span> para Jogar Agora!
              <ChevronsDown size={32} className="absolute text-[color:var(--primary-green)] bottom-0 right-4 animate-bounce" />
            </h1>
            <div>
              <h2 className="mb-2">
                Explore seleções <span className="font-bold">atualizadas</span> com os <span className="font-bold">melhores servidores de Minecraft</span> do <span className="font-bold">Brasil</span> e do <span className="font-bold">mundo</span>!
              </h2>
              <h2 className="relative">
                Filtre por modo de jogo como <span className="font-bold">Survival, BedWars, FullPvP, Skyblock, Rankup</span> e muito mais. Encontre seu servidor favorito, entre com um clique e comece sua aventura agora mesmo!
              </h2>
            </div>
          </div>

          <div className="mt-8 border-t rounded-t-sm">
            <TabelaServidores />
          </div>

        </div>
      </main>
    </div>
  );
}
