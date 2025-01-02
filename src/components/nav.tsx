"use client";

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavLink from "./nav-link";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/products", text: "Products" },
  { href: "/custom-cut-lumber", text: "Custom-Cut Lumber" },
  { href: "/firewood", text: "Firewood" },
  { href: "/contact-us", text: "Contact Us" },
];

export default function Nav() {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <AppBar
      position="sticky"
      sx={{
        flexDirection: "row",
        padding: "5px",
        justifyContent: isLargeScreen ? "center" : undefined,
      }}
    >
      <Toolbar sx={{ width: "100%" }}>
        <Box width="100%" sx={{ display: { xs: "none", md: "flex" } }}>
          <Link href="/" style={{ display: "flex" }}>
            <Image
              src="/logo-trimmed.png"
              width={150}
              height={124.22}
              alt="Willmore Lumber logo"
              unoptimized
            />
          </Link>
          <Stack
            direction={"row"}
            spacing={3}
            sx={{
              display: "flex",
              marginLeft: "auto",
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <NavLink key={link.text} href={link.href} text={link.text} />
            ))}
          </Stack>
        </Box>
        <Box
          width={"100%"}
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Link href="/" style={{ display: "flex" }}>
              <Image
                src="/logo-trimmed.png"
                width={68.42}
                height={56}
                alt="Willmore Lumber logo"
                unoptimized
              />
            </Link>
          </Box>
        </Box>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box
            width={"250px"}
            role="presentation"
            onClick={() => setOpen(false)}
          >
            <List>
              {navLinks.map((link) => (
                <ListItem
                  key={link.text}
                  disablePadding
                  sx={
                    pathname === link.href
                      ? {
                          backgroundColor: "rgba(255, 255, 255, .2)",
                        }
                      : {}
                  }
                >
                  <ListItemButton>
                    <Link href={link.href}>{link.text}</Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
