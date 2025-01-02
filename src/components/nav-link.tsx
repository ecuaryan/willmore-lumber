"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      style={
        pathname === href
          ? { backgroundColor: "rgba(255, 255, 255, .2)", borderRadius: 4 }
          : {}
      }
    >
      <Button color="inherit">{text}</Button>
    </Link>
  );
}
