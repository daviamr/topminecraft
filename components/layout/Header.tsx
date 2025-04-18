import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, LogIn } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export function Header() {

  return (

    <header className="bg-white dark:bg-[#262626] py-2 px-4">

      {/* responsivity mobile */}
      <div className="flex items-center justify-between">

        <div className="flex gap-2">
          <Link href="/">
            <Image
              src="/logo-smc-render.png"
              alt="Top Servidores de Minecraft"
              width={44}
              height={0}
              priority />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className="border p-1 h-max rounded-sm">
              <ChevronDown size={16} />
              <span className="sr-only">Header Menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Servidores Minecraft</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Servidores</DropdownMenuItem>
              <DropdownMenuItem>Cadastrar Servidor</DropdownMenuItem>
              <DropdownMenuItem>Parceria</DropdownMenuItem>
              <DropdownMenuItem>Contato</DropdownMenuItem>
              <DropdownMenuItem>Doar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-4">
          <Link href="/login"
            className="flex items-center gap-2 text-sm">
            <LogIn size={16} />
            Iniciar sessão
          </Link>
          <ModeToggle />
        </div>
      </div>

      {/* responsivity tablet >>> */}
      <div className="hidden md:block">
        <span>header tablet&gt;&gt;&gt;</span>
      </div>

    </header>

  )
}

export default Header;