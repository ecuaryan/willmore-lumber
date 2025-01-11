import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Box,
  List,
  ListItem,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";

export default function WoodStain() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Wood Stain</Typography>
          <Typography variant="body1">
            Bring out the natural beauty of your wood with our exceptional
            stains, offering long-lasting protection and rich, vibrant finishes.
          </Typography>
          <Typography variant="body1">
            We are proud to be an authorized dealer for DEFY Wood Stains, a
            trusted name in premium wood finishes. DEFY products are designed to
            protect and enhance the natural beauty of your wood.
          </Typography>
          <MuiLink
            component={Link}
            href="https://saversystems.com/collections/wood-stain-products"
            target="_blank"
            sx={{ width: "fit-content" }}
          >
            <Stack alignItems="center" direction={"row"} spacing={1}>
              <Box>Learn more about DEFY Wood Stains</Box>
              <OpenInNewIcon />
            </Stack>
          </MuiLink>
          <Typography variant="body1">
            <List>
              <ListItem>many different colors available</ListItem>
            </List>
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/wood-stain.webp"
          alt="wood stain"
          title="wood stain products"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/decking.webp"
          alt="wood stain on deck"
          title="wood stain on deck"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1326}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/siding-1.webp"
          alt="wood stain on gazeebo"
          title="wood stain on gazeebo"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1000}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/posts-and-beams-3.webp"
          alt="wood stain on deck"
          title="wood stain on deck"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1000}
          height={750}
        />
      </Grid>
    </Grid>
  );
}
