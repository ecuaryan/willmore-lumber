import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function BaledShavings() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Baled Shavings</Typography>
          <Typography variant="body1">
            Keep your animals happy with our high-quality baled shavings, ideal
            for providing clean, soft, and absorbent bedding. Perfect for
            stables, coops, and more.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>livestock bedding</ListItem>
              <ListItem>pet bedding</ListItem>
            </List>
          </Typography>
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
