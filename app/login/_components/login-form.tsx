"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";

export default function LoginForm({
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
            alt="Top Servidores de Minecraft Logo"
            width={56}
            height={10}
          />
        </Link>
        <h1 className="text-2xl font-bold">Acessar minha conta</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm text-[color:var(--primary-green)] underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
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
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Ainda não tem uma conta?{" "}
        <Link
          href="/register"
          className="underline underline-offset-4 text-verde-claro"
        >
          Cadastrar
        </Link>
      </div>
    </form>
  );
}
