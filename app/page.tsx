import { FiltroPlataforma } from "@/components/home/filtro-plataforma";
import { LinhasTabela } from "@/components/home/linhas-tabela";
import { Table, TableBody } from "@/components/ui/table";
import Image from "next/image";

export const metadata = {
  title: "Top Melhores Servidores de Minecraft",
};

export default async function Page() {

  return (
    <>
      <main>
        <div className="mt-8">
          <div className="flex flex-col gap-4 px-3">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-4xl/7 uppercase">
                Top Servidores{" "}
                <span className="block text-5xl font-bold animate-text-gradient">
                  Minecraft
                </span>
              </h1>
              <Image
                src="/steve.webp"
                alt="Steve Procurando por Servidores de Minecraft"
                className="max-h-24"
                width={60}
                height={96}
              />
            </div>

          <div className="flex items-center justify-center gap-2">
            <h1 className="text-4xl/7 uppercase font-semibold">Top Servidores <span className="block text-5xl font-bold animate-text-gradient">Minecraft</span></h1>
            <Image src="/steve.webp" alt="Steve Procurando por Servidores de Minecraft" className="max-h-24" width={60} height={96} />
          </div>

          <div className="bg-[#262626] mt-8 py-4 px-2 text-center rounded-b-sm">
            <p className="font-semibold text-sm text-white mb-1">
              Filtrar por Plataforma
            </p>
            <FiltroPlataforma />
          </div>

          {/*Table*/}
          <div className="mt-8">
            <TabelaServidores />
          </div>
        </div>

        <div className="bg-[#262626] mt-8 py-4 px-2 text-center rounded-b-sm">
          <p className="font-semibold text-sm text-white mb-1">Filtrar por Plataforma</p>
          <FiltroPlataforma />
        </div>

        {/*Table*/}
        <div className="mt-8">
          <Table>
            <TableBody className="flex flex-col gap-4 bg-white py-4">
              <LinhasTabela />
            </TableBody>
          </Table>
        </div>

      </div>
    </main>
  );
}
