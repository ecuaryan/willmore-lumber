import { List, ListItem, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Posts and Beams",
  description:
    "Posts and timber-frame beams from Willmore Lumber in St. Anthony, Idaho.",
  alternates: { canonical: "/posts-and-beams" },
};

export default function PostsAndBeams() {
  return (
    <Grid container spacing={4}>
      <Grid size={12}>
        <Stack spacing={3} maxWidth="700px">
          <Typography component="h1" variant="h3">
            Posts and Beams
          </Typography>
          <Typography variant="body1">
            Strong, durable, and customizable—our posts and beams are crafted to
            support and enhance your construction projects with the beauty of
            natural wood.
          </Typography>
          <List>
            <ListItem>post and beam contruction</ListItem>
            <ListItem>bridge planks</ListItem>
          </List>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/posts-and-beams-1.webp"
          alt="posts and beams lumber"
          title="posts and beams constuction"
          loading="lazy"
          width={1000}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/posts-and-beams-3.webp"
          alt="posts and beams lumber"
          title="posts and beams deck"
          loading="lazy"
          width={1000}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/posts-and-beams.webp"
          alt="posts and beams lumber"
          title="posts and beams roof structure"
          loading="lazy"
          width={1333}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/bridge-planks.jpg"
          alt="bridge planks"
          title="bridge planks"
          loading="lazy"
          width={1333}
          height={750}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Image
          src="/posts-and-beams-2.webp"
          alt="posts and beams lumber"
          title="posts and beams construction"
          loading="lazy"
          width={750}
          height={1000}
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
}
