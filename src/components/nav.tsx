"use client";

import { useEffect, useState } from "react";
import { ReactNode } from "react";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CollectionsIcon from "@mui/icons-material/Collections";
import ForestIcon from "@mui/icons-material/Forest";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavLink from "./nav-link";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

const navLinks = [
  { href: "/", text: "Home", icon: <HomeIcon /> },
  {
    text: "Products",
    icon: <ForestIcon />,
    subNavLinks: [
      { href: "/rough-cut-lumber", text: "Rough-Cut Lumber" },
      { href: "/posts-and-beams", text: "Posts and Beams" },
      { href: "/framing-lumber", text: "Framing Lumber" },
      { href: "/tongue-and-groove", text: "Tongue and Groove" },
      { href: "/flooring", text: "Flooring" },
      { href: "/decking", text: "Decking" },
      { href: "/siding", text: "Siding" },
      { href: "/baled-shavings", text: "Baled Shavings" },
      { href: "/firewood", text: "Firewood" },
      { href: "/railroad-ties", text: "Railroad Ties" },
      { href: "/wood-stain", text: "Wood Stain" },
    ],
  },
  {
    text: "Services",
    icon: <LocalShippingIcon />,
    subNavLinks: [
      { href: "/custom-cut-lumber", text: "Custom-Cut Lumber" },
      { href: "/delivery", text: "Delivery" },
    ],
  },
  { href: "/pricing", text: "Pricing", icon: <AttachMoneyIcon /> },
  { href: "/gallery", text: "Gallery", icon: <CollectionsIcon /> },
  { href: "/about-us", text: "About Us", icon: <GroupsIcon /> },
  { href: "/contact-us", text: "Contact Us", icon: <PhoneIcon /> },
];

function Brand({
  compact = false,
  onClick,
}: {
  compact?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Willmore Lumber home"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Image
        src="/logo.webp"
        width={58}
        height={47}
        alt=""
        style={{ width: 58, height: "auto" }}
      />
      <Box
        component="span"
        sx={{
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          lineHeight: 1.1,
          fontSize: compact ? "0.95rem" : "1.2rem",
          whiteSpace: "nowrap",
        }}
      >
        Willmore Lumber
      </Box>
    </Link>
  );
}

export default function Nav() {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const pathname = usePathname();
  const theme = useTheme();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpener, setDrawerOpener] = useState("");

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    // Reset scroll position on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <AppBar
      position="sticky"
      sx={{
        flexDirection: "row",
        justifyContent: isLargeScreen ? "center" : undefined,
      }}
    >
      <Toolbar sx={{ width: "100%" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => {
            setDrawerOpen(true);
            setDrawerOpener("menu icon");
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Box width="100%" sx={{ display: { xs: "none", md: "flex" } }}>
          <Brand />
          <Stack
            direction={"row"}
            spacing={3}
            sx={{
              display: "flex",
              marginLeft: "auto",
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => {
              if (link.href) {
                return (
                  <NavLink key={link.text} href={link.href} text={link.text} />
                );
              } else {
                return (
                  <Button
                    key={link.text}
                    color="inherit"
                    onClick={() => {
                      setDrawerOpen(true);
                      setDrawerOpener(link.text);
                    }}
                  >
                    {link.text}
                  </Button>
                );
              }
            })}
          </Stack>
        </Box>
        <Box
          width={"100%"}
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Brand compact />
          </Box>
        </Box>
        <Drawer
          open={drawerOpen}
          onClose={handleDrawerClose}
          disableRestoreFocus
          disableAutoFocus
          ModalProps={{
            disableScrollLock: true,
          }}
        >
          <DrawerHeader>
            <Brand compact onClick={handleDrawerClose} />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Box width={"275px"} role="presentation">
            <List>
              {navLinks.map((navLink) => {
                return !navLink.subNavLinks ? (
                  <NavListItem
                    key={navLink.text}
                    href={navLink.href}
                    text={navLink.text}
                    icon={navLink.icon}
                    onNavigate={handleDrawerClose}
                  />
                ) : (
                  <NavTree
                    key={navLink.text}
                    text={navLink.text}
                    icon={navLink.icon}
                    onNavigate={handleDrawerClose}
                    navListItems={navLink.subNavLinks}
                    expandedTree={
                      drawerOpener === navLink.text ||
                      navLink.subNavLinks.filter((s) => s.href === pathname)
                        .length > 0
                    }
                  />
                );
              })}
            </List>
            <Box px={2} pt={1} pb={3}>
              <Button
                component="a"
                href="tel:+12086247329"
                variant="contained"
                fullWidth
                startIcon={<PhoneIcon />}
              >
                Call (208) 624-7329
              </Button>
            </Box>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

type NavListItemType = {
  href: string;
  text: string;
  icon?: ReactNode;
  indent?: boolean;
};

function NavTree({
  text,
  navListItems,
  onNavigate,
  icon,
  expandedTree = false,
}: {
  text: string;
  navListItems: NavListItemType[];
  onNavigate: () => void;
  icon: ReactNode;
  expandedTree: boolean;
}) {
  const [expanded, setExpanded] = useState(expandedTree);

  return (
    <>
      <ListItemButton onClick={() => setExpanded(!expanded)}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={text} />
        {expanded ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {navListItems.map((navLink) => (
            <NavListItem
              key={navLink.text}
              href={navLink.href}
              text={navLink.text}
              onNavigate={onNavigate}
              indent={true}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
}

function NavListItem({
  href,
  text,
  onNavigate,
  icon,
  indent,
}: NavListItemType & { onNavigate: () => void }) {
  const pathname = usePathname();

  return (
    <ListItem
      disablePadding
      sx={
        pathname === href
          ? {
              backgroundColor: "rgba(255, 255, 255, .2)",
            }
          : {}
      }
    >
      <Link href={href} style={{ width: "100%" }}>
        <ListItemButton sx={indent ? { pl: 4 } : {}} onClick={onNavigate}>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}

// TODO: could probably simplify the nav sizing logic
