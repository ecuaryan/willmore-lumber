import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function Firewood() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Firewood</Typography>
          <Typography variant="body1">
            Stock up on premium firewood, cut and seasoned for efficient
            burning. Perfect for fireplaces, wood stoves, and outdoor fire pits.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>
                anywhere from a few pieces to many cords available
              </ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/firewood.jpg"
          alt="firewood"
          title="firewood pile"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/firewood-2.jpg"
          alt="firewood"
          title="firewood logs"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
    </Grid>
  );
}
