/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function AboutUs() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography variant="h3">About Us</Typography>
          <Typography variant="body1">
            At Willmore Lumber, family and tradition are at the heart of
            everything we do. For more than 50 years, we&apos;ve proudly served
            our community, combining craftsmanship with care to provide
            high-quality lumber products that stand the test of time.
          </Typography>
          <Typography variant="body1">
            Run by the Willmore family—father Jim and his three sons, Rod, Alan,
            and Troy—we&apos;ve built a legacy rooted in hard work, dedication,
            and a commitment to excellence. Our timber is harvested locally,
            within a 150-mile radius, ensuring the finest materials for every
            project.
          </Typography>
          <Typography variant="body1">
            Whether you&apos;re looking for rough-cut lumber, custom beams, or
            beautifully crafted flooring, we take pride in every piece we
            produce. No job is too big or too small for our experienced team.
          </Typography>
          <Typography variant="body1">
            Thank you for trusting Willmore Lumber with your wood products
            needs. We&apos;re honored to be a part of your projects and your
            story.
          </Typography>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/planer-building.webp"
          alt="Planer building"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <img
          src="/log-pile.webp"
          alt="Log pile"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <img
          src="/mill-sunset.webp"
          alt="Mill at sunset"
          loading="lazy"
          style={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
}
