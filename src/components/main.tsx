"use client";

import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

import DefaultPageWidth from "./default-page-width";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <main>
      {pathname === "/" ? (
        <>{children}</>
      ) : (
        <DefaultPageWidth>
          <Box mt={"50px"}>{children}</Box>
        </DefaultPageWidth>
      )}
    </main>
  );
}
