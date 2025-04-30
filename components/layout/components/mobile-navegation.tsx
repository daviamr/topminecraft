import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function MobileNavegation() {
  return (
    <div className="lg:hidden">
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
  )
}