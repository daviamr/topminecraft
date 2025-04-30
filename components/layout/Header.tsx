import Image from "next/image";
import Link from "next/link";
import { LogIn, UserPlus } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { MobileNavegation } from "./components/mobile-navegation";
import { SearchBar } from "./components/search-bar";
import DesktopNavegation from "./components/desktop-navegation";

export function Header() {

  return (

    <header className="bg-white dark:bg-[#262626] py-2 px-4 md:px-8 2xl:px-0"> 

      <div className="flex items-center justify-between lg:max-w-7xl lg:m-auto">

        <div className="flex gap-2 lg:items-center lg:gap-8">
          <Link href="/">
            <Image
              src="/logo-smc.webp"
              alt="Top Servidores de Minecraft"
              width={44}
              height={0}
              priority />
          </Link>

          <DesktopNavegation />
          <MobileNavegation />

        </div>

        <div className="flex items-center gap-8">
          <SearchBar />
          <div className="flex gap-4 lg:justify-end">
            <Link href="/login"
              className="flex items-center gap-2 text-sm lg:text-base">
              <LogIn size={16} />
              Entrar
            </Link>
            <Link href="/register"
              className="hidden lg:flex items-center gap-2 text-base ml-2">
              <UserPlus size={16} />
              Cadastrar
            </Link>
            <ModeToggle />
          </div>
        </div>

      </div>


    </header>

  )
}

export default Header;