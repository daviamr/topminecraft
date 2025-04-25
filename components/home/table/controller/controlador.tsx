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
import { IServerStatus } from "@/interfaces/server";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react"


export const useController = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalItems = 12197;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [open, setOpen] = useState<boolean>(false);

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

  // const serverQuery = useQuery({
  //   queryKey: ["servers"],
  //   queryFn: () => tableService.fetchAllServers(),
  //   staleTime: 1000 * 60 * 5, // tempo que os dados estão 'frescos'
  //   refetchInterval: 1000 * 60 * 5,
  //   refetchOnWindowFocus: false,
  // })

  //fetch dados no cache
  const fetchDados = async () => {
    const res = await axios.get<IServerStatus[]>('/api/dados');
    return res.data;
  }

  const serverQuery = useQuery({
    queryKey: ["data"],
    queryFn: fetchDados,
  })


  return {
    // serverQuery,
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