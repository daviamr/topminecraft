import { Button } from "@/components/ui/button";
import { MessagesSquare } from "lucide-react";
import Link from "next/link";

export default function DesktopNavegation() {
  return (
    <div className="hidden lg:block">
      <nav className="flex items-center gap-4">
        <Link href="/servers" className="d-flex hover:opacity-75">
          Servidores
        </Link>
        <Link href="/contact" className="lg:hidden xl:block hover:opacity-75">
          Contato
        </Link>
        <Link href="/discord" className="lg:hidden xl:block hover:opacity-75">
          Discord
        </Link>
        <Link href="/blog" className="d-flex hover:opacity-75">
        <MessagesSquare size={18} color="white"/>
          Blog
        </Link>
        <Link href="/diamond-seal" className="hover:opacity-75">
          <Button type="button" size={"default"} className="text-white text-base font-semibold animate-bg-diamond">
            <span className="drop-shadow-[0_0_4px_white]">
              Selo Diamante
            </span>
          </Button>
        </Link>
      </nav>
    </div>
  )
}