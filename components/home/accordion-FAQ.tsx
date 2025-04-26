import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaqSchema } from "../schemas/FaqSchema"

export function AccordionFAQ() {
  return (
    <>
      <FaqSchema />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="O que é um servidor de Minecraft?">
          <AccordionTrigger className="text-1xl">O que é um servidor de Minecraft?</AccordionTrigger>
          <AccordionContent>
            Um servidor de Minecraft é um servidor multiplayer administrado por indivíduos que permite que várias pessoas joguem Minecraft juntas. Os servidores geralmente oferecem uma grande variedade de modos de jogo, como <span className="font-bold">Survival, Factions, SkyBlock, Creative ou Prison.</span> Alguns servidores se concentram em apenas um desses modos, enquanto outros têm modos e recursos únicos, exclusivos daquele servidor. Quando um servidor possui vários modos conectados, ele é chamado de <span className="font-bold">rede de servidores Minecraft</span>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="O que é uma lista de servidores de Minecraft?">
          <AccordionTrigger className="text-1xl">O que é uma lista de servidores de Minecraft?</AccordionTrigger>
          <AccordionContent>
            Uma lista de servidores de Minecraft é uma plataforma online que reúne servidores públicos e privados, cadastrados por seus donos para que jogadores possam encontrar e entrar nesses servidores. Nossa lista oferece opções tanto para a <span className="font-bold">versão Java</span> quanto para a <span className="font-bold">versão Bedrock</span>, exibindo os melhores servidores de Minecraft de todo o mundo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Como entrar em um servidor de Minecraft?">
          <AccordionTrigger className="text-1xl">Como entrar em um servidor de Minecraft?</AccordionTrigger>
          <AccordionContent>
            Para entrar em um servidor, primeiro encontre um que você goste na nossa lista de servidores — exibimos os melhores do mundo. Cada IP no nosso site é <span className="font-bold">clicável</span> e será copiado para a sua área de transferência automaticamente. No Minecraft, clique em <span className="font-bold">“Multiplayer”</span>, depois em <span className="font-bold">“Adicionar servidor”</span>. Em seguida, cole ou digite o IP do servidor e clique em <span className="font-bold">“concluído”</span>. Agora é só selecionar o servidor que você adicionou e clicar em <span className="font-bold">“Entrar no servidor”</span>para começar uma nova aventura!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Qual a diferença entre Minecraft Java e Bedrock?">
          <AccordionTrigger className="text-1xl">Qual a diferença entre Minecraft Java e Bedrock?</AccordionTrigger>
          <AccordionContent>
            O <span className="font-bold">Minecraft Java Edition</span> é a versão original do jogo, lançada em 2011, e está disponível apenas para computadores. Já o <span className="font-bold">Minecraft Bedrock Edition</span> (também conhecido como “Pocket Edition”) é a versão multiplataforma do jogo, compatível com <span className="font-bold">PCs, celulares e consoles.</span> Se você gosta de mods e servidores grandes, o Java é ideal. Se você prefere jogar com amigos em diferentes plataformas ou gosta de jogar com controle, o Bedrock é a melhor escolha.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}