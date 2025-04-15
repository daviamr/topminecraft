'use client'

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen)

  return (
    <>
      <header className="bg-white">

        <div className="relative flex justify-center items-center py-4 px-4">
          <button
            className="absolute left-4 cursor-pointer"
            onClick={() => { setIsOpen(prev => !prev) }}>
            <Menu size={28} color="#262626" />
          </button>
          <Link
            className=""
            href="/">
            <Image src="/logo.png" alt="Top Servidores de Minecraft" className="max-h-8" />
          </Link>
        </div>

      </header>
    </>
  )
}

export default Header;