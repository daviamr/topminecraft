import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export const TabelaServidor = () => {
  return (
    <div {...{ itemScope: true, itemType: "https://schema.org/GameServer" }}>
      <Table>
        <TableBody aria-label="Estatísticas detalhadas do servidor de Minecraft, incluindo rank, status, votos e informações técnicas">

          <TableRow {...{ itemProp: "game", itemScope: true, itemType: "https://schema.org/VideoGame" }}>
            <TableCell className="font-semibold" scope="row" {...{ itemProp: "name" }}>Rank</TableCell>
            <TableCell className="text-wrap" {...{ itemProp: "serverStatus" }}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-semibold" scope="row">
              Status</TableCell>
            <TableCell {...{ itemProp: "serverStatus" }}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-semibold" scope="row">Votos</TableCell>
            <TableCell className="text-wrap" {...{ itemProp: "aggregateRating" }}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-semibold" scope="row">Nome</TableCell>
            <TableCell className="text-wrap" {...{ itemProp: "name" }}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-semibold" scope="row">MOTD</TableCell>
            <TableCell className="text-wrap" {...{ itemProp: "description" }}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-semibold" scope="row">Endereço IP</TableCell>
            <TableCell className="text-wrap" {...{ itemProp: "url" }}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-semibold" scope="row">Jogadores</TableCell>
            <TableCell className="text-wrap">
              <span {...{ itemProp: "playersOnline" }}></span>
              <span {...{ itemProp: "serverCapacity" }}></span>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-semibold" scope="row">Versão</TableCell>
            <TableCell className="text-wrap" {...{ itemProp: "gameVersion" }}></TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-semibold" scope="row">Discord Oficial</TableCell>
            <TableCell className="text-wrap">
              <a href="" {...{ itemProp: "discordUrl" }} rel="noopener noreferrer"></a>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-semibold" scope="row">Site Oficial</TableCell>
            <TableCell className="text-wrap">
              <a href="" {...{ itemProp: "url" }} rel="noopener noreferrer"></a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}