import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function Siding() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Siding</Typography>
          <Typography variant="body1">
            Elevate your home&apos;s curb appeal with our high-quality wood
            siding, crafted for both durability and aesthetic appeal. Perfect
            for a lasting first impression.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>
                channel rustic shiplap siding - various patterns available
              </ListItem>
              <ListItem>log cabin siding</ListItem>
              <ListItem>hand hewn siding</ListItem>
              <ListItem>board and batten siding</ListItem>
              <ListItem>tongue and groove siding</ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/siding-6.webp"
          alt="siding"
          title="siding"
          loading="lazy"
          width={1333}
          height={750}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/siding.webp"
          alt="siding"
          title="tongue-and-groove siding"
          loading="lazy"
          width={1226}
          height={750}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/siding-5.webp"
          alt="siding"
          title="siding"
          loading="lazy"
          width={1000}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/siding-1.webp"
          alt="siding"
          title="siding"
          loading="lazy"
          width={1000}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/siding-4.webp"
          alt="siding"
          title="siding"
          loading="lazy"
          width={480}
          height={640}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/siding-2.webp"
          alt="siding"
          title="siding"
          loading="lazy"
          width={750}
          height={1624}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
}
