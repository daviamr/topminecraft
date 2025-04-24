'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { TableService } from "@/services/table";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react"


export const useController = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalItems = 12197;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [open, setOpen] = useState<boolean>(false);
  const tableService = new TableService();

  const CopiarIp = async (ip: string) => {
    await navigator.clipboard.writeText(ip);
    setOpen(true);
  }

  const ComponenteDrawer = (ip: string) => (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>IP Copiado!</DrawerTitle>
            <DrawerDescription>IP do caraio já foi copiado: {ip}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose onClick={() => setOpen(prev => !prev)}>
              Fechar
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )

  const serverQuery = useQuery({
    queryKey: ["servers"],
    queryFn: () => tableService.fetchAllServers(),
    staleTime: 1000 * 60 * 5, // tempo que os dados estão 'frescos'
    refetchInterval: 1000 * 60 * 1,
    refetchOnWindowFocus: false,

  })


  return {
    serverQuery,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalItems,
    totalPages,
    CopiarIp,
    ComponenteDrawer,
  }
}