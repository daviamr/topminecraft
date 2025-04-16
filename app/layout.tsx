import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

const mainFontFamily = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={mainFontFamily.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
