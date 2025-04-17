'use client'

import { IFiltroPlataforma } from "@/enum/FiltroPlataforma";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const NovoFiltro = () => {
  const [plataform, setPlataform] = useState<IFiltroPlataforma>();
  console.log(plataform);

  return (
    <div className="bg-white pt-4">

      {/*filter by plataform */}
      <div className="px-3">
        <p className="text-center text-sm font-semibold pb-2">
          Filtre por plataforma
        </p>
        <div className="flex flex-col gap-2">
          <Button className="w-full flex items-center gap-2"
            variant={"primary_green"} type="button">
            <Image src="/table/mouse.svg" alt="Botão Plataforma Java" width={24} height={24}/>
            Java
          </Button>

          <Button className="w-full flex items-center gap-2"
            variant={"primary_green"} type="button">
            <Image src="/table/gamepad.svg" alt="Botão Plataforma Bedrock" width={24} height={24} />
            Bedrock
          </Button>

          <Button className="w-full flex items-center gap-2"
            variant={"primary_green"} type="button">
            <Image src="/table/globe.svg" alt="Botão Plataforma Crossplay" width={24} height={24} />
            Crossplay
          </Button>
        </div>
      </div>

    </div>
  )
}