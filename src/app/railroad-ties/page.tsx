import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Railroad Ties",
  description:
    "Railroad ties for landscaping and projects from Willmore Lumber in St. Anthony, Idaho.",
  alternates: { canonical: "/railroad-ties" },
};

export default function RailroadTies() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography component="h1" variant="h3">
            Railroad Ties
          </Typography>
          <Typography variant="body1">
            Our #1/#2 grade used railroad ties are perfect for landscaping,
            construction, and other heavy-duty applications. Built to last and
            versatile for a range of uses.
          </Typography>
          <List>
            <ListItem>#1 grade and #2 grade railroad ties available</ListItem>
          </List>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/railroad-ties.jpg"
          alt="railroad ties"
          title="railroad ties for landscaping and construction"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/railroad-ties-1.jpg"
          alt="railroad ties"
          title="railroad ties for landscaping and construction"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
    </Grid>
  );
}
