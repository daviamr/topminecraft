import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";

export function DesktopTableRow({key}: {key: string}) {
  return (
    <>
      <TableRow className="hidden lg:table-row" key={key}>
        <TableCell className="py-8">
          <Image src="/complex.webp" alt="gif servidor" width={468} height={60} />
        </TableCell>
      </TableRow>
    </>
  )
}