import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Link as MuiLink, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">Gallery</Typography>
          <Typography variant="body1">
            Explore Our Gallery: See incredible projects and get inspired by
            what others have created with Willmore Lumber.
          </Typography>
          <MuiLink
            component={Link}
            href="https://photos.app.goo.gl/iAhGYnYf4kyRi2wXA"
            target="_blank"
            sx={{ width: "fit-content" }}
          >
            <Stack alignItems="center" direction={"row"} spacing={1}>
              <Box>View Our Full Gallery on Google Photos</Box>
              <OpenInNewIcon />
            </Stack>
          </MuiLink>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/gallery-7.webp"
          alt="gallery picture"
          title=""
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1166}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/gallery-2.webp"
          alt="gallery picture"
          title=""
          loading="lazy"
          style={{ width: "100%", height: "100%" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/gallery-1.webp"
          alt="gallery picture"
          title=""
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={1000}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/gallery-3.jpg"
          alt="gallery picture"
          title=""
          loading="lazy"
          style={{ width: "100%", height: "100%" }}
          width={1333}
          height={750}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/gallery-4.webp"
          alt="gallery picture"
          title=""
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={480}
          height={640}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/gallery-5.webp"
          alt="gallery picture"
          title=""
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={750}
          height={1000}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/gallery-6.webp"
          alt="gallery picture"
          title=""
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={750}
          height={1000}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/gallery-8.webp"
          alt="gallery picture"
          title=""
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={480}
          height={640}
        />
      </Grid>
      <Grid size={{ xs: 12 }} display={"flex"}>
        <MuiLink
          component={Link}
          href="https://photos.app.goo.gl/iAhGYnYf4kyRi2wXA"
          target="_blank"
          sx={{ width: "fit-content" }}
        >
          <Stack alignItems="center" direction={"row"} spacing={1}>
            <Box>View More On Our Full Gallery on Google Photos</Box>
            <OpenInNewIcon />
          </Stack>
        </MuiLink>
      </Grid>
    </Grid>
  );
}
