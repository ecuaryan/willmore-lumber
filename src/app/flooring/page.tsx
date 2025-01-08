/* eslint-disable @next/next/no-img-element */
import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Flooring() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Flooring</Typography>
          <Typography variant="body1">
            Elevate your space with our smooth or resawn durable
            flooring—designed for both beauty and lasting performance.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>tongue and groove flooring, 4, 6, 8 inch</ListItem>
              <ListItem>smooth or resawn</ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/flooring.jpg"
          alt="Douglas fir resawn flooring"
          title="Douglas fir resawn flooring"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/flooring-2.jpg"
          alt="Douglas fir resawn flooring"
          title="Douglas fir resawn flooring"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/flooring-1.jpg"
          alt="Douglas fir resawn flooring stairs"
          title="Douglas fir resawn flooring"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/flooring-3.jpg"
          alt="Douglas fir smooth flooring"
          title="Douglas fir smooth flooring"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/flooring-10.webp"
          alt="Douglas fir resawn flooring stairs"
          title="Douglas fir resawn flooring"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/flooring-11.webp"
          alt="Douglas fir smooth flooring"
          title="Douglas fir smooth flooring"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
}

// TODO: add titles to all the images
