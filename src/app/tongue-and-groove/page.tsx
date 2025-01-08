/* eslint-disable @next/next/no-img-element */
import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function TongueAndGroove() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Tongue and Groove</Typography>
          <Typography variant="body1">
            Discover the natural beauty of knotty pine and Douglas fir
            tongue-and-groove boards, perfect for a wide range of applications.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>knotty pine</ListItem>
              <ListItem>Douglas fir</ListItem>
              <ListItem>smooth or resawn</ListItem>
              <ListItem>soffit</ListItem>
              <ListItem>cielings</ListItem>
              <ListItem>walls</ListItem>
              <ListItem>wainscot</ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/tongue-and-groove.webp"
          alt="tongue and groove"
          title="tongue and groove knotty pine smooth"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/tongue-and-groove-2.jpg"
          alt="tongue and groove"
          title="tongue and groove Douglas fir smooth"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
}
