import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe, Headset, Info, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export function AccordionFooter() {
  return (
    <Accordion type="single" collapsible defaultValue="links-uteis-footer" className="w-full">
      {/* Contato */}
      <AccordionItem value="contato-footer">
        <AccordionTrigger>
          <p className="d-flex font-semibold">
            <Headset size={18} />
            Contato
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <address className="not-italic">
            Você pode entrar em contato conosco pelos seguintes meios:
            <ul className="mt-2 space-y-1">
              <li>
                E-mail:{" "}
                <a
                  href="mailto:contato@minecraftservidores.com"
                  className="text-blue-600 hover:underline"
                >
                  contato@minecraftservidores.com
                </a>
              </li>
              <li>
                Discord:{" "}
                <Link href="/discord" className="text-blue-600 hover:underline">
                  Entrar no Discord
                </Link>
              </li>
            </ul>
          </address>
        </AccordionContent>
      </AccordionItem>

      {/* Sobre nós */}
      <AccordionItem value="sobre-nos-footer">
        <AccordionTrigger>
          <p className="d-flex font-semibold">
            <Info size={18} />
            Sobre nós
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <p>
            Oferecemos uma plataforma para que jogadores descubram e compartilhem servidores multiplayer.
            Todas as informações dos servidores são enviadas pelos usuários e não têm ligação oficial com a Mojang ou Microsoft.
          </p>
          <p className="mt-2">
            <Link href="/sobre" className="text-blue-600 hover:underline">
              Saiba mais sobre a nossa missão
            </Link>
          </p>
        </AccordionContent>
      </AccordionItem>

      {/* Links Úteis */}
      <AccordionItem value="links-uteis-footer">
        <AccordionTrigger>
          <p className="d-flex font-semibold">
            <Globe size={18}/> Links Úteis</p>
        </AccordionTrigger>
        <AccordionContent>
          <nav aria-label="Links úteis">
            <ul className="space-y-2">
              <li>
                <Link href="/politicas-de-privacidade" target="_blank" className="d-flex text-blue-600 hover:underline">
                Políticas de Privacidade <SquareArrowOutUpRight size={16} />
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" target="_blank" className="d-flex text-blue-600 hover:underline">
                  Termos de Uso <SquareArrowOutUpRight size={16} />
                </Link>
              </li>
              <li>
                <Link href="/fale-conosco" target="_blank" className="d-flex text-blue-600 hover:underline">
                  Fale Conosco <SquareArrowOutUpRight size={16} />
                </Link>
              </li>
              <li>
                <Link href="/" target="_blank" className="d-flex text-blue-600 hover:underline">
                  Lista de Servidores <SquareArrowOutUpRight size={16} />
                </Link>
              </li>
            </ul>
          </nav>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
