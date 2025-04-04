'use client'

import { HandleTitle } from "@/core/titles";
import "./globals.css";
import Header from "@/components/layout/Header";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const { title } = HandleTitle();

  return (
    <html lang="pt-br">
      <head>
        <title>{title}</title>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
