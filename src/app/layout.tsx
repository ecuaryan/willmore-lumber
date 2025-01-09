import Footer from "@/components/footer";
import Main from "@/components/main";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";

import Nav from "../components/nav";
import theme from "../theme";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Willmore Lumber - The Goods From The Woods",
  description:
    "Willmore Lumber: 50+ years of providing quality wood products like rough-cut lumber, tongue & groove boards, flooring, siding, beams, custom cuts, and more.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 2.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Willmore Lumber" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Nav />
            <Main>{children}</Main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
