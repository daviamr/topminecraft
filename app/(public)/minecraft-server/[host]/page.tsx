import Image from "next/image";
import { TableService } from "@/services/tableService";
// import { SeloDiamante } from "@/components/home/table/components/selo-diamante";
import { BreadcrumbServer } from "../_components/breadcrumb";
import TagBaloon from "@/components/tags";
import { TabelaServidor } from "../_components/tabela-servidor";

export default async function Page({ params }: { params: Promise<{ host: string }> }) {

  const host = (await params).host;
  const tableService = new TableService();
  const serverQuery = await tableService.fetchServerStatus(host);

  return (
    <>
      <div className="py-8 px-4">

        <div className="d-flex flex-col px-4 rounded-sm mb-8">
          <h1 className="text-center text-2xl">
            Junte-se à aventura no servidor <strong>{serverQuery.host}</strong>!
          </h1>
          <h2 className="text-center">
            Com <strong>{serverQuery.players?.online}</strong> jogadores online, você está prestes a viver uma experiência única.
          </h2>
        </div>

        <div className="mb-8 flex justify-center">
          <BreadcrumbServer server={serverQuery.host} />
        </div>

        <div className="bg-white dark:bg-[#262626] rounded-sm">
          {/* logo/ip */}
          <div className="flex flex-col gap-2 relative p-2 border rounded-sm">
            <div className="relative d-flex">

              <img src={serverQuery.icon ?
                serverQuery.icon : '/logo-smc-render.png'}
                alt={`Logo servidor ${serverQuery.host}`}
                className="rounded-lg" width={50} height={60} />

              <p className="font-semibold">{serverQuery.host}</p>
              {/* <SeloDiamante style="right-2" /> */}
            </div>

            <Image src='/complex.webp' alt="gif servidor" width={468} height={60}
              className="rounded-sm" />
          </div>

          {/* infos */}
          <div className="px-2 py-4">
            <TabelaServidor />
          </div>
          {/* tags */}
          <div>

            <div className="text-center py-2 border-t border-b">
              <p>Tags</p>
            </div>

            <div className="d-flex justify-between flex-wrap p-4">
              <TagBaloon tag="BEDWARS" />
              <TagBaloon tag="FULLPVP" />
              <TagBaloon tag="SKYWARS" />
              <TagBaloon tag="MINIGAMES" />
              <TagBaloon tag="BEDWARS" />
              <TagBaloon tag="FULLPVP" />
              <TagBaloon tag="SKYWARS" />
              <TagBaloon tag="MINIGAMES" />
            </div>

          </div>

        </div>

      </div>
    </>
  )
}