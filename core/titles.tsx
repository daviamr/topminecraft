'use client'

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

export function HandleTitle() {

  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState<string | undefined>();

  const titles: { [key: string]: string } = {
    "/": "Home",
    "/login": "Login",
  }

  useEffect(() => {
    setPageTitle(titles[pathname] || "Title ta cagado chefe");
  }, [pathname]);

  return { title: pageTitle };

}
