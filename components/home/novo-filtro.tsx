'use client'

import { IFiltroPlataforma } from "@/enum/FiltroPlataforma";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const NovoFiltro = () => {
  const [plataform, setPlataform] = useState<IFiltroPlataforma>();
  console.log(plataform);

  return (
    <div className="bg-white hidden">

      {/*filter by plataform */}
      <div className="px-3">
        <p className="text-center text-sm font-semibold p1-2">
          Filtre por plataforma
        </p>
        <div className="grid grid-cols-3 gap-2">
          <Button className="flex items-center gap-2"
            variant={"primary_green"} type="button">
            <Image
              src="/table/mouse.svg"
              alt="Botão Plataforma Java"
              width={0} height={0}
              style={{ width: 'auto', height: '32px' }} />
            Java
          </Button>

          <Button className="flex items-center gap-2"
            variant={"primary_green"} type="button">
            <Image
              src="/table/gamepad.svg"
              alt="Botão Plataforma Bedrock"
              width={0} height={0}
              style={{ width: '32px', height: 'auto' }} />
            Bedrock
          </Button>

          <Button className="flex items-center gap-2"
            variant={"primary_green"} type="button">
            <Image
              src="/table/globe.svg"
              alt="Botão Plataforma Crossplay"
              width={0} height={0}
              style={{ width: '32px', height: 'auto' }} />
            Crossplay
          </Button>
        </div>
      </div>

    </div>
  )
}