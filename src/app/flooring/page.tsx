import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Flooring",
  description:
    "Beautiful wood flooring milled by Willmore Lumber in St. Anthony, Idaho.",
  alternates: { canonical: "/flooring" },
};

export default function Flooring() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography component="h1" variant="h3">
            Flooring
          </Typography>
          <Typography variant="body1">
            Elevate your space with our smooth or resawn durable
            flooring—designed for both beauty and lasting performance.
          </Typography>
          <List>
            <ListItem>tongue and groove flooring, 4, 6, 8 inch</ListItem>
            <ListItem>smooth or resawn</ListItem>
          </List>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/flooring.jpg"
          alt="Douglas fir resawn flooring"
          title="Douglas fir resawn flooring"
          loading="lazy"
          width={1000}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/flooring-2.jpg"
          alt="Douglas fir resawn flooring"
          title="Douglas fir resawn flooring"
          loading="lazy"
          width={1000}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/flooring-1.webp"
          alt="Douglas fir resawn flooring stairs"
          title="Douglas fir resawn flooring"
          loading="lazy"
          width={750}
          height={1000}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/flooring-3.jpg"
          alt="Douglas fir smooth flooring"
          title="Douglas fir smooth flooring"
          loading="lazy"
          width={480}
          height={640}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/flooring-10.webp"
          alt="Douglas fir resawn flooring stairs"
          title="Douglas fir resawn flooring"
          loading="lazy"
          width={750}
          height={1000}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/flooring-11.webp"
          alt="Douglas fir smooth flooring"
          title="Douglas fir smooth flooring"
          loading="lazy"
          width={600}
          height={800}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
}
