'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Image from "next/image"
import { Copy, ExternalLink, Heart, List } from "lucide-react"
import { ECabecalhosTabela } from "@/enum/CabecalhosTabela"
import { SeloDiamante } from "./components/selo-diamante"
import { useController } from "./controller"
import Link from "next/link"

export const TabelaServidores = () => {
  const cabecalhos = Object.keys(ECabecalhosTabela) as (keyof typeof ECabecalhosTabela)[];
  const {
    serverQuery: { data, isLoading, error },
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalItems,
    totalPages,
    CopiarIp,
    ComponenteDrawer } = useController();

  if (isLoading) return <div>Carregando...</div>
  if (error) return <div>Erro pra caralho.</div>

  const ip = 'redeip.exemplo.net';

  return (
    <>
      <div className="relative px-4 pt-8 border-b bg-white dark:bg-background">
        <List size={24} className="absolute left-4 bottom-[4px] md:left-8" />
      </div>

      <Table className="border-b">
        <TableHeader>
          <TableRow className="hidden lg:table-row">
            {cabecalhos.map((key) => (
              <TableHead className="px-4" key={ECabecalhosTabela[key]}>
                {ECabecalhosTabela[key]}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
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
                      onClick={() => CopiarIp(server.host)}>
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
                <SeloDiamante />

                {/* server image/gif/ip */}
                <div>
                  <Image src='/complex.webp' alt="gif servidor" width={468} height={60} />


                  <button
                    className="d-flex cursor-pointer py-1 px-2 rounded-b-sm w-full animate-bg-diamond"
                    onClick={() => CopiarIp(ip)}>
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
      <div className="border-b py-4 bg-white dark:bg-background">
        <p className="text-sm text-center">
          Mostrando <strong className="text-verde-claro">1-{itemsPerPage}</strong> de <strong className="text-verde-escuro">{totalItems}</strong> resultados.
        </p>
        <Pagination className="select-none">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            <PaginationItem>
              <span>
                Página <strong className="text-verde-claro">{currentPage}</strong> de <span className="text-verde-escuro">{totalPages}</span>
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.max(prev + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  )
}