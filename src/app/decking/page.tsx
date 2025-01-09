import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function Decking() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Decking</Typography>
          <Typography variant="body1">
            Enhance your outdoor living with our premium wood decking, designed
            for durability and style. Perfect for creating beautiful,
            long-lasting spaces.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>with or without tongue and groove</ListItem>
              <ListItem>4, 6, 8 inch</ListItem>
              <ListItem>smooth or resawn</ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/decking.webp"
          alt="decking"
          title="tongue-and-groove resawn decking"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1326}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/decking-1.webp"
          alt="decking"
          title="decking"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/decking-2.webp"
          alt="decking"
          title="decking"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/decking-4.jpg"
          alt="decking"
          title="tongue-and-groove resawn decking"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
    </Grid>
  );
}
