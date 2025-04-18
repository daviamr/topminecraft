import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import TagBaloon from "../tags"
import { CopiarIp } from "./copiar-ip"

export const LinhasTabela = () => {

  return (
    <TableRow>
      <TableCell className="p-0">
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
          <CopiarIp />
        </div>
        <div className="flex flex-col gap-2 px-3 pt-2">

          {/* <div>
            <p className="text-wrap text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, iure voluptas reiciendis eaque quis minima cum temporibus accusamus sed maiores tempore.
            </p>
          </div> */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Votos: <span className="font-bold text-orange-500">1238</span></p>
            </div>
            <button className="font-bold bg-[color:var(--primary-green)] px-4 py-1 rounded-full text-white">
              100/1000 <span className="font-semibold">Jogadores Online</span>
            </button>
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
  )
}