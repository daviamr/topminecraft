'use client'

import { useState } from "react"
import { ArrowDownNarrowWide } from "lucide-react";
import { IFiltroPlataforma } from "@/enum/FiltroPlataforma";
import Image from "next/image";

export const FiltroPlataforma = () => {
  const [plataform, setPlataform] = useState<IFiltroPlataforma>();
  console.log(plataform);
  return (
    <>
      <div className="flex flex-col gap-2">
        <button
          className="flex justify-center items-center gap-2 w-full bg-[color:var(--primary-green)] border-b-2 border-[color:var(--secondary-green)] rounded-[6px] hover:bg-green-600 duration-300 cursor-pointer py-2 font-semibold text-white"
          onClick={() => setPlataform(IFiltroPlataforma.java)}>
          <Image src="/mouse-icon.svg" alt="Botão Plataforma Java" />
          Java
        </button>

        <button
          className="flex justify-center items-center gap-2 w-full bg-[color:var(--primary-red)] border-b-2 border-[color:var(--secondary-red)] rounded-[6px] hover:bg-red-400 duration-300 cursor-pointer py-2 font-semibold text-white"
          onClick={() => setPlataform(IFiltroPlataforma.bedrock)}>
          <Image src="/gamepad-icon.svg" alt="Botão Plataforma Java" />
          Bedrock
        </button>

        <button
          className="flex justify-center items-center gap-2 w-full bg-[color:var(--primary-orange)] border-b-2 border-[color:var(--secondary-orange)] rounded-[6px] hover:bg-orange-300 duration-300 cursor-pointer py-2 font-semibold text-white"
          onClick={() => setPlataform(IFiltroPlataforma.crossplay)}>
          <Image src="/globe-icon.svg" alt="Botão Plataforma Java" />
          Crossplay
        </button>
      </div>
      <button className="flex justify-center items-center gap-2 w-full mt-2 py-2 rounded-[6px] text-white font-semibold cursor-pointer duration-300 hover:bg-[#303030]">
        <ArrowDownNarrowWide size={22} />
        Todos os Filtros
      </button>
    </>
  )
}