import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function Delivery() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Delivery</Typography>
          <Typography variant="body1">
            Get your wood products delivered straight to your home with our
            dependable delivery service. Convenient and hassle-free, saving you
            time and effort.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>local delivery is available for a fee</ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/delivery.webp"
          alt="delivery truck"
          title="delivery truck"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/delivery-1.webp"
          alt="customer order ready for delivery"
          title="customer order ready for delivery"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
    </Grid>
  );
}
