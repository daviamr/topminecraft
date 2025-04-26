// components/SEO/FaqSchema.tsx
export const FaqSchema = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é um servidor de Minecraft?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Um servidor de Minecraft é um servidor multiplayer administrado por indivíduos que permite que várias pessoas joguem Minecraft juntas. Os servidores geralmente oferecem modos de jogo como Survival, Factions, SkyBlock, Creative ou Prison. Alguns são dedicados a apenas um modo, enquanto outros possuem modos e recursos únicos. Quando há vários modos conectados, chamamos de rede de servidores Minecraft."
            }
          },
          {
            "@type": "Question",
            "name": "O que é uma lista de servidores de Minecraft?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Uma lista de servidores de Minecraft é uma plataforma online que reúne servidores públicos e privados para que jogadores possam encontrar e entrar neles. A lista oferece opções tanto para a versão Java quanto para a Bedrock, com servidores do mundo inteiro."
            }
          },
          {
            "@type": "Question",
            "name": "Como entrar em um servidor de Minecraft?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Encontre um servidor na nossa lista. Cada IP é clicável e copiado automaticamente. No jogo, clique em 'Multiplayer', depois 'Adicionar servidor', cole o IP e clique em 'Concluído'. Depois, selecione o servidor e clique em 'Entrar no servidor'."
            }
          },
          {
            "@type": "Question",
            "name": "Qual a diferença entre Minecraft Java e Bedrock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Minecraft Java é a versão original para PC, ideal para mods e grandes servidores. Bedrock é a versão multiplataforma (PC, consoles, mobile), ideal para quem quer jogar com amigos em diferentes dispositivos ou com controle."
            }
          },
        ]
      })
    }} />
);
