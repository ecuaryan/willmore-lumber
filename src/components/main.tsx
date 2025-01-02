"use client";

import { usePathname } from "next/navigation";

import DefaultPageWidth from "./default-page-width";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <main>{children}</main>
      ) : (
        <DefaultPageWidth>{children}</DefaultPageWidth>
      )}
    </>
  );
}
