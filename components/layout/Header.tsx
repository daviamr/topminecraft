import { DoorClosed, HandHeart, Handshake, Headset, LogIn, Menu, Server } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <header className="relative bg-[#262626] w-full h-full">
        <div className="p-4">
          <div className="flex justify-between">
            <Link href="/">HOME TESTE</Link>

            <button
              className="cursor-pointer"
              onClick={() => { setIsOpen(prev => !prev) }}>
              <Menu size={24} />
            </button>

          </div>
        </div>

      </header>
      <div
        className={`
          absolute h-0 w-full bg-orange-400 duration-300 overflow-hidden
          ${isOpen && 'h-[300]'}`}>
        <div className="h-full py-8">
          <nav>
            <div className="w-max m-auto">
              <ul className="flex flex-col gap-4 items-start justify-center">
                <li className="flex items-center gap-2">
                  <DoorClosed size={16} />
                  <Link href="/login" onClick={() => { setIsOpen(prev => !prev) }}>Início</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Server size={16} />
                  <Link href="/login" onClick={() => { setIsOpen(prev => !prev) }}>Servidores</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Handshake size={16} />
                  <Link href="/login" onClick={() => { setIsOpen(prev => !prev) }}>Parceria</Link>
                </li>
                <li className="flex items-center gap-2">
                  <Headset size={16} />
                  <Link href="/login" onClick={() => { setIsOpen(prev => !prev) }}>Contato</Link>
                </li>
                <li className="flex items-center gap-2">
                  <HandHeart size={16} />
                  <Link href="/login" onClick={() => { setIsOpen(prev => !prev) }}>Doar</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="w-max m-auto pt-4">
            <Button
              className="flex items-center justify-center gap-2"
              variant={"secondary"}>
              <LogIn size={16} />
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;