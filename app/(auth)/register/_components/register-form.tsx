"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";

export default function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [viewPassword, setViewPassword] = useState("password");
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-6 text-center">
        <Link href="/login">
          <Image
            src="/logo-smc-render.png"
            alt="Top Servidores de Minecraft"
            width={56}
            height={10}
          />
        </Link>
        <h1 className="text-2xl font-bold">Criar minha conta</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username">Nome de usuário</Label>
          <Input id="username" type="text" placeholder="nick name" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
          </div>
          <div className="flex items-center gap-1">
            <Input
              id="password"
              type={viewPassword}
              placeholder="*****"
              required
            />
            <div>
              {viewPassword === "password" ? (
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => setViewPassword("text")}
                >
                  <Eye size={16} />
                </Button>
              ) : (
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => setViewPassword("password")}
                >
                  <EyeClosed size={16} />
                </Button>
              )}
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer"
          variant="primary_orange"
        >
          Cadastrar
        </Button>
      </div>
      <div className="text-center text-sm">
        Já tem uma conta? {" "}
        <Link
          href="/login"
          className="underline underline-offset-4 text-verde-claro"
        >
          Entrar
        </Link>
      </div>
    </form>
  );
}
