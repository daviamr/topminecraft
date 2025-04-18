import Header from "@/components/layout/Header";
import Image from "next/image";

export const metadata = {
  title: "Top Melhores Servidores de Minecraft",
};

export default async function Page() {

  return (
    <>
      <Header />

      <main>
        <div className="flex flex-col gap-4">

          {/* hero */}
          {/* <div className="w-full max-h-100">
          <Image src="/home/hero-background.jpg" alt="" width={1920} height={0} />
        </div> */}

          {/* main */}
          <div className="flex flex-col gap-2 py-4 px-3">
            <h1 className="uppercase font-semibold text-5xl/7">
              Top Servidores <span className="block text-6xl font-bold animate-text-gradient">Minecraft</span>
            </h1>
            <h2>No <span className="font-bold">Top Minecraft Servers</span>, reunimos uma lista dos <span className="font-bold">melhores servidores de Minecraft</span> disponíveis para você se divertir.</h2>
            <h2>
              Navegue pela nossa lista e descubra servidores incríveis, até encontrar aquele que se encaixa perfeitamente no seu estilo de jogo!
            </h2>
          </div>

        </div>
      </main>
    </>
  );
}
