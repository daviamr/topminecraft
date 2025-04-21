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
import { Copy, List } from "lucide-react"
import { ECabecalhosTabela } from "@/enum/CabecalhosTabela"
import { useController } from "./utils/controlador"

export const TabelaServidores = () => {
  const cabecalhos = Object.keys(ECabecalhosTabela) as (keyof typeof ECabecalhosTabela)[];
  const {
    currentPage,
    setCurrentPage,
    totalPages,
    CopiarIp,
    ComponenteDrawer } = useController();

  const ip = 'redeip.exemplo.net';

  return (
    <>
      <div className="relative border-b px-4">
        <List size={24} className="absolute left-4 bottom-[6px]" />

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
                Página <span className="font-bold">{currentPage}</span> de {totalPages}
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

      <Table className="mb-100">
        <TableHeader>
          <TableRow className="hidden lg:table-row">
            {cabecalhos.map((key) => (
              <TableHead className="px-4" key={ECabecalhosTabela[key]}>
                {ECabecalhosTabela[key]}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="lg:hidden">
              <div>

                {/* server image/gif/ip */}
                <div>
                  <Image src='/complex.webp' alt="gif servidor" width={425} height={60} />


                  <button
                    className="flex items-center gap-2 font-semibold text-white cursor-pointer bg-[color:var(--primary-green)] py-1 px-2 rounded-b-sm w-full"
                    onClick={() => CopiarIp(ip)}>
                    <Copy size={16} color="white" />
                    {ip}
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
                  <div className="flex items-center gap-2">
                    <p>Votos: <span className="font-bold text-[color:var(--primary-orange)]"> 1390</span>
                    </p>
                    |
                    <p>Último: <span className="font-bold text-[color:var(--primary-orange)]">
                      39 min~
                    </span>
                    </p>
                  </div>
                  <p className="font-bold">Site: <a className="underline text-[color:var(--primary-orange)]"> Clique aqui</a></p>
                </div>

              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table >
    </>
  )
}