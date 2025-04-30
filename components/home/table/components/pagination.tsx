import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useController } from "../controller";

export function PaginationTable() {

  const {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalItems,
    totalPages } = useController();

  return (
    <div className="border-b py-4 bg-white dark:bg-background">
      <p className="text-sm text-center">
        Mostrando <strong className="text-verde-claro">1-{itemsPerPage}</strong> de <strong className="text-verde-escuro">{totalItems}</strong> resultados.
      </p>
      <Pagination className="select-none">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          <PaginationItem>
            <span>
              Página <strong className="text-verde-claro">{currentPage}</strong> de <span className="text-verde-escuro">{totalPages}</span>
            </span>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((prev) => Math.max(prev + 1))}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}