import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import CoreProvider from "./_components/core-provider";

const mainFontFamily = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-smc-render.png" sizes="any" />
      </head>
      <body className={mainFontFamily.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem disableTransitionOnChange>
          <CoreProvider>
            {children}
          </CoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
