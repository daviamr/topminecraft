'use client'

import { Copy } from "lucide-react";
import { useState } from "react";

export const CopiarIp = () => {
  const [text, setText] = useState<string>('server.example-ip.net');

  return (
    <button
      className="w-full flex items-center gap-2 text-left px-3 py-1 cursor-pointer font-[minecraft]"
      onMouseEnter={() => { setText('Clique para copiar o IP') }}
      onMouseLeave={() => { setText('server.example-ip.net') }}>
      <Copy size={16} />
      {text}
    </button>
  )

}