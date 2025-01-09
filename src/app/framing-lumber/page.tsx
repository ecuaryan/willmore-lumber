import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

export default function FamingLumber() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Framing Lumber</Typography>
          <Typography variant="body1">
            Reliable and durable framing lumber for all your construction needs,
            crafted to provide strength and stability for every project.
          </Typography>
          <Typography variant="body1">
            <List>
              <ListItem>planed 2x4&apos;s, 2x6&apos;s, etc.</ListItem>
              <ListItem>1x4 furring strips</ListItem>
              <ListItem>
                trim lumber (1x4&apos;s, 1x6&apos;s, 1x8&apos;s, etc.)
              </ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/framing-lumber-1.jpg"
          alt="framing lumber"
          title="framing lumber"
          loading="lazy"
          width={1333}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/framing-lumber-2.webp"
          alt="framing lumber"
          title="framing lumber"
          loading="lazy"
          width={1333}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
}
