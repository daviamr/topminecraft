import { FiltroPlataforma } from "@/components/home/FiltroPlataforma";
import { TabelaServidores } from "@/components/home/TabelaServidores";
import Image from "next/image";

export const metadata = {
  title: 'Top Melhores Servidores de Minecraft',
};

export default function Page() {
  return (
    <main>
      <div className="mt-8">

        <div className="flex flex-col gap-4 px-3">

          <div className="flex items-center justify-center gap-2">
            <h1 className="text-4xl/7 uppercase">Top Servidores <span className="block text-5xl font-bold animate-text-gradient">Minecraft</span></h1>
            <Image src="/steve.webp" alt="Steve Procurando por Servidores de Minecraft" className="max-h-24" width={60} height={96}/>
          </div>

          <div>
            <p>No <span className="font-bold">Top Minecraft Servers</span>, reunimos uma lista dos <span className="font-bold">melhores servidores de Minecraft</span> disponíveis para você se divertir.</p>
            <p className="mt-2">Navegue pela nossa lista e descubra servidores incríveis, até encontrar aquele que se encaixa perfeitamente no seu estilo de jogo!</p>
          </div>

        </div>

        <div className="bg-[#262626] mt-8 py-4 px-2 text-center rounded-b-sm">
          <p className="font-semibold text-sm text-white mb-1">Filtrar por Plataforma</p>
          <FiltroPlataforma />
        </div>

        {/*Table*/}
        <div className="mt-8">
          <TabelaServidores />
        </div>

      </div>
    </main>
  );
}
