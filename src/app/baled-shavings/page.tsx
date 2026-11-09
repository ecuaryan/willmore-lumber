import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Baled Shavings",
  description:
    "Baled wood shavings for animal bedding and more, from Willmore Lumber in St. Anthony, Idaho.",
  alternates: { canonical: "/baled-shavings" },
};

export default function BaledShavings() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography component="h1" variant="h3">
            Baled Shavings
          </Typography>
          <Typography variant="body1">
            Keep your animals happy with our high-quality baled shavings, ideal
            for providing clean, soft, and absorbent bedding. Perfect for
            stables, coops, and more.
          </Typography>
          <List>
            <ListItem>livestock bedding</ListItem>
            <ListItem>pet bedding</ListItem>
          </List>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/baled-shavings.jpg"
          alt="baled shavings"
          title="baled shavings for livestock or pet bedding"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/baled-shavings-1.jpg"
          alt="baled shavings"
          title="baled shavings for livestock or pet bedding"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
    </Grid>
  );
}
