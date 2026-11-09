import Footer from "@/components/footer";
import Main from "@/components/main";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
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

const siteDescription =
  "Willmore Lumber: 50+ years of providing quality wood products like rough-cut lumber, tongue & groove boards, flooring, siding, beams, custom cuts, and more.";

export const metadata: Metadata = {
  metadataBase: new URL("https://willmorelumber.com"),
  title: {
    default: "Willmore Lumber - The Goods From The Woods",
    template: "%s | Willmore Lumber",
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  icons: { icon: { url: "/icon.svg", type: "image/svg+xml" } },
  appleWebApp: { title: "Willmore Lumber" },
  openGraph: {
    type: "website",
    siteName: "Willmore Lumber",
    title: "Willmore Lumber - The Goods From The Woods",
    description: siteDescription,
    url: "/",
    images: [{ url: "/logs.webp", alt: "Logs at Willmore Lumber" }],
  },
  twitter: { card: "summary_large_image" },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LumberStore",
  name: "Willmore Lumber",
  url: "https://willmorelumber.com",
  image: "https://willmorelumber.com/logs.webp",
  telephone: "+1-208-624-7329",
  email: "willmorelumber@blackfoot.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1205 S Yellowstone Hwy",
    addressLocality: "St. Anthony",
    addressRegion: "ID",
    postalCode: "83445",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "13:00",
      closes: "17:00",
    },
  ],
  hasMap: "https://maps.app.goo.gl/wfTevdPSTDQYfQLU7",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 4,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
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
