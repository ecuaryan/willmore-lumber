import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function RailroadTies() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Railroad Ties</Typography>
          <Typography variant="body1">
            Our premium-grade railroad ties are perfect for landscaping,
            construction, and other heavy-duty applications. Built to last and
            versatile for a range of uses.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>#1 grade and #2 grade railroad ties available</ListItem>
            </List>
          </Typography>
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
    </Grid>
  );
}

// TODO: add another picture of the railroad ties
