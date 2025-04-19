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
import { useState } from "react"


export const usarControlador = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;
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


  return {
    currentPage,
    setCurrentPage,
    totalPages,
    CopiarIp,
    ComponenteDrawer,
  }
}