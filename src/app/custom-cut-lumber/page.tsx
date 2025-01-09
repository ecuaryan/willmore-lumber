import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function CustomCutLumber() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Custom Cut Lumber</Typography>
          <Typography variant="body1">
            We custom-cut lumber to perfectly match your specifications.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>live edge slabs for counter tops and mantels</ListItem>
              <ListItem>angled ridge beams</ListItem>
              <ListItem>wedge shaped lumber</ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/custom-beams.webp"
          alt="custom cut lumber"
          title="wedge shaped beams"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1000}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/custom-cut-beams.webp"
          alt="custom-cut beams"
          title="custom-cut beams"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={640}
          height={480}
        />
      </Grid>
    </Grid>
  );
}

// TODO: add more description here?
// TODO: more images, find that one with the mantel
