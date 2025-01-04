import DefaultPageWidth from "@/components/default-page-width";
import Showcase from "@/components/showcase";

import { Box, Stack, Typography } from "@mui/material";
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
        <Showcase />
      </DefaultPageWidth>
    </>
  );
}
