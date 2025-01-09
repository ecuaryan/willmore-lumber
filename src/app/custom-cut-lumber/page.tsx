import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function CustomCutLumber() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Custom-Cut Lumber</Typography>
          <Typography variant="body1">
            We custom-cut lumber to match your specifications.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>
                we can reverse-engineer knives to closely match your provided
                pattern
              </ListItem>
              <ListItem>custom planing of all lumber we produce</ListItem>
              <ListItem>live edge slabs for counter tops and mantels</ListItem>
              <ListItem>angled ridge beams</ListItem>
              <ListItem>wedge shaped lumber</ListItem>
              <ListItem>decorative crafts</ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/custom-beams.webp"
          alt="custom-cut lumber"
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
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/custom-cut-1.jpg"
          alt="custom-cut lumber"
          title="custom-cut lumber"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/custom-cut-2.jpg"
          alt="custom-cut lumber"
          title="custom-cut lumber"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/custom-cut-4.jpg"
          alt="custom-cut lumber"
          title="custom-cut lumber"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/custom-cut-3.jpg"
          alt="custom-cut lumber"
          title="custom-cut lumber"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
    </Grid>
  );
}
