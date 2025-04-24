import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-16 bg-white p-4">
      <Image src="/logo-smc-render.png" alt="Logo Top Servidores Minecraft" width={80} height={0} />
    </footer>
  )
}