'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Copy } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export const TabelaServidores = () => {
  const [text, setText] = useState<string>('server.example-ip.net');

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="p-0 border-b-1 border-[#D7D7D7]">
            <div className="flex justify-between bg-[#262626] px-3 rounded-t-sm text-sm">
              <div className="flex items-center gap-2 text-white">
                <span className="font-semibold">1.</span>
                <p className="font-semibold uppercase">Server Name</p>
              </div>
              <p className="text-[color:var(--primary-green)] font-semibold">
                1.XX.X
              </p>
            </div>
            <div>
              <Image src="/complex.webp" alt="Complex 1.21" width={468} height={60} />
            </div>
            <div className="text-sm text-white bg-[#707070]">
              <button
                className="w-full flex items-center gap-2 text-left px-3 py-1 cursor-pointer"
                onMouseEnter={() => { setText('Clique para copiar o IP') }}
                onMouseLeave={() => { setText('server.example-ip.net') }}>
                <Copy size={16} />
                {text}
              </button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}