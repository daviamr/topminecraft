'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <form className="hidden md:block">

      <div className="relative border rounded-sm">
        <Input type="text" className="border-none rounded-none w-60" placeholder="Buscar.." />
        <Button className="d-flex absolute top-0 right-0" type="submit" variant={"secondary"} size={"icon"}
          onClick={(e) => {
            e.preventDefault();
          }}>
          <Search />
        </Button>
      </div>

    </form>
  )
}