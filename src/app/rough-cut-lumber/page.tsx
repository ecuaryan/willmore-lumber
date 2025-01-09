import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function RoughCutLumber() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Rough-Cut Lumber</Typography>
          <Typography variant="body1">
            We carry a wide variety of lengths and sizes in premium rough-cut
            lumber, ready to meet your project needs.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>farm and ranch</ListItem>
              <ListItem>corral fencing</ListItem>
              <ListItem>rustic wood projects</ListItem>
              <ListItem>garden/flower boxes</ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/rough-cut-1.webp"
          alt="Rough-cut lumber"
          title="Rough-cut lumber"
          loading="lazy"
          width={1333}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/rough-cut-2.webp"
          alt="Rough-cut lumber"
          title="Rough-cut lumber"
          loading="lazy"
          width={1333}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/rough-cut-3.webp"
          alt="Rough-cut lumber"
          title="Rough-cut lumber"
          loading="lazy"
          width={1333}
          height={750}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/fencing.jpg"
          alt="fencing"
          title="fencing"
          loading="lazy"
          width={1000}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
}
