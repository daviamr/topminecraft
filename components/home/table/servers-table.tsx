'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { Copy, ExternalLink, Heart, List } from "lucide-react"
import { DiamondSeal } from "./components/diamond-seal"
import { useController } from "./controller"
import Link from "next/link"
import { DesktopTableRow } from "./components/desktop-table-row"

export const ServersTable = () => {
  const {
    serverQuery: { data, isLoading, error },
    CopyIp,
    ComponenteDrawer } = useController();

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro pra caralho.</div>

  const ip = 'redeip.exemplo.net';

  return (
    <>
      <div className="relative px-4 pt-8 border-b bg-white dark:bg-background lg:hidden">
        <List size={24} className="absolute left-4 bottom-[4px] md:left-8" />
      </div>

      <Table className="border-b">
        <TableHeader className="bg-white dark:bg-[#262626]">
          <TableRow className="hidden lg:table-row">
            <TableHead className="px-4 rounded-t-sm overflow-hidden">
              <List size={24} />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({length: 15}, (_, i) => (<DesktopTableRow key={i.toString()}/>))}
          {/* versão padrão */}
          {data?.map((server) => (
            <TableRow key={server.host}>
              <TableCell className="lg:hidden md:px-8">
                <div>

                  {/* server image/gif/ip */}
                  <div>
                    <Link href={`/minecraft-server/${server.host}`}>
                      <Image src='/complex.webp' alt="gif servidor" width={468} height={60} />
                    </Link>


                    <button
                      className="d-flex font-semibold text-white cursor-pointer py-1 px-2 rounded-b-sm w-full bg-[#262626]"
                      onClick={() => CopyIp(server.host)}>
                      <Copy size={16} color="white" />
                      {server.host}
                    </button>

                    {ComponenteDrawer(ip)}
                  </div>

                  {/* server info */}
                  <div className="py-2">
                    <p className="text-wrap">
                      <span dangerouslySetInnerHTML={{ __html: server.motd?.html || '' }} />
                    </p>
                  </div>

                  {/* server votes */}
                  <div className="flex items-center justify-between">
                    <div className="d-flex">
                      <p className="d-flex font-semibold">
                        Rank:
                        <span className="font-normal">
                          #1
                        </span>
                      </p>
                      <p className="d-flex font-semibold">
                        Votos:
                        <span
                          className="flex items-center gap-1 font-normal">
                          <Heart size={16} />
                          1909
                        </span>
                      </p>
                    </div>
                    <p className="d-flex font-semibold">
                      Site:
                      <a
                        className="underline font-normal flex items-center gap-1"
                        href="#"
                        target="_blank">
                        <ExternalLink size={16} />
                        Acessar</a>
                    </p>

                  </div>

                </div>
              </TableCell>
            </TableRow>
          ))}
          {/* versão diamond */}
          <TableRow>
            <TableCell className="lg:hidden bg-white dark:bg-background md:px-8">
              <div className="relative pt-8 pb-4 rounded-sm">
                {/* selo diamond */}
                <p
                  className="d-flex absolute top-2 left-2 font-bold uppercase">
                  {/* rank */}
                  <span>
                    #2
                  </span>
                  Complex Mc
                </p>
                <DiamondSeal />

                {/* server image/gif/ip */}
                <div>
                  <Image src='/complex.webp' alt="gif servidor" width={468} height={60} />


                  <button
                    className="d-flex cursor-pointer py-1 px-2 rounded-b-sm w-full animate-bg-diamond"
                    onClick={() => CopyIp(ip)}>
                    <Copy size={16} color="white" />
                    <span className="font-semibold text-white drop-shadow-[0_0_4px_white]">
                      {ip}
                    </span>
                  </button>

                  {ComponenteDrawer(ip)}
                </div>

                {/* server info */}
                <div className="py-2">
                  <p className="text-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deserunt aut, dolor dicta cum accusantium.
                  </p>
                </div>

                {/* server votes */}
                <div className="flex items-center justify-between">
                  <p className="d-flex font-semibold">
                    Site:
                    <a
                      className="underline font-normal text-diamante flex items-center gap-1"
                      href="#"
                      target="_blank">
                      <ExternalLink size={16} />
                      Acessar
                    </a>
                  </p>

                  <div className="d-flex">

                    <p className="font-semibold">Votos:</p>
                    <span className="flex items-center gap-1 font-normal text-diamante">
                      <Heart size={16} fill="#0087df" />
                      1909
                    </span>

                    <div className="d-flex">
                      <p className="font-semibold">Último voto:</p>
                      <span className="flex items-center gap-1 font-normal text-diamante">
                        Há 39min
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table >
    </>
  )
}