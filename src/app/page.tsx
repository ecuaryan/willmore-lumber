import CustomCut from "@/components/custom-cut";
import DefaultPageWidth from "@/components/default-page-width";
import RoughCut from "@/components/rough-cut";
import TongueAndGroove from "@/components/tongue-and-groove";

import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: `50vh`,
          width: "100%",
        }}
      >
        <Image
          priority
          src="/logs.webp"
          alt="logs"
          fill
          style={{
            objectFit: "cover",
            maxWidth: "100%",
          }}
        />
        <Box
          position="absolute"
          width="inherit"
          height="inherit"
          top={0}
          left={0}
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.525)" }}
        />
        <Box
          position="absolute"
          top="40%"
          left="50%"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Stack spacing={3} ml={3} mr={3}>
            <Box>
              <Typography variant="h2" fontWeight={500}>
                It all starts with the best logs...
              </Typography>
              <Typography variant="h6">
                We take pride in quality service and products
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
      <DefaultPageWidth>
        <Grid container spacing={4}>
          <Grid size={12}>
            <Typography variant="h4">The Goods From The Woods</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <RoughCut />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <TongueAndGroove />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CustomCut />
          </Grid>
        </Grid>
      </DefaultPageWidth>
    </>
  );
}
