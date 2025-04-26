"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftToLine, CircleCheck } from "lucide-react";
import Link from "next/link";

export default function FormUsername() {
  return (
    <>
      <form className="w-full mt-4">
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex flex-col items-start gap-1 w-full">
            <Label htmlFor="username">Minecraft username</Label>
            <Input type="text" id="username" placeholder="Ex: Steve" />
          </div>

          <Button
            type="submit"
            variant="primary_green"
            className="flex items-center gap-1 w-full"
          >
            <CircleCheck size={16} />
            Vote!
          </Button>
          <Link href="/" className="w-full">
            <Button
              type="button"
              variant="secondary_red"
              className="flex items-center gap-1 w-full"
            >
              <ArrowLeftToLine size={16} />
              Voltar para home
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
}
