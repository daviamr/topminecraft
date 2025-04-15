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
import TagBaloon from "../tags"

export const TabelaServidores = () => {
  const [text, setText] = useState<string>('server.example-ip.net');

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="p-0 border-b-1 border-[#D7D7D7]">
            <div className="flex justify-between bg-[#262626] px-3 rounded-t-sm text-base">
              <div className="flex items-center gap-2 text-white">
                <span className="font-regular">#1</span>
                <p className="font-semibold">Server Name</p>
                <div>
                  <Image src="/country/br.svg" alt="Bandeira do Brasil" width={20} height={14} />
                </div>
              </div>
              <p className="text-[color:var(--primary-green)] font-semibold">
                1.XX.X ~ 1.XX.X
              </p>
            </div>
            <div>
              <Image src="/complex.webp" alt="Complex 1.21" width={468} height={60} />
            </div>
            <div className="text-base text-white bg-[#707070]">
              <button
                className="w-full flex items-center gap-2 text-left px-3 py-1 cursor-pointer font-[minecraft]"
                onMouseEnter={() => { setText('Clique para copiar o IP') }}
                onMouseLeave={() => { setText('server.example-ip.net') }}>
                <Copy size={16} />
                {text}
              </button>
            </div>
            <div className="flex flex-col gap-4 px-3">

              <div>
                <div className="flex items-center">
                  <div className="grow-1">
                    <p>a</p>
                  </div>
                  <div className="grow-1">
                    <p>a</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-evenly pb-2">
                <TagBaloon tag="MINIGAMES" />
                <TagBaloon tag="SKYBLOCK" />
                <TagBaloon tag="FULLPVP" />
                <TagBaloon tag="RANKUP" />
              </div>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}