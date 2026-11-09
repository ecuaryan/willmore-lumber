import ClosingCta from "@/components/closing-cta";
import DefaultPageWidth from "@/components/default-page-width";
import Reviews from "@/components/reviews";
import Showcase from "@/components/showcase";
import TrustStrip from "@/components/trust-strip";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: { xs: "auto", md: "65vh" },
          minHeight: { xs: 0, md: 440 },
          maxHeight: 720,
          width: "100%",
        }}
      >
        <Image
          priority
          src="/logs.webp"
          alt="Stacked logs and a log loader at the Willmore Lumber mill"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{
            background: {
              xs: "linear-gradient(0deg, #121212 0%, rgba(18,18,18,0) 30%), linear-gradient(rgba(10,10,10,0.62), rgba(10,10,10,0.62))",
              md: "linear-gradient(90deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 45%, rgba(10,10,10,0) 80%), linear-gradient(0deg, #121212 0%, rgba(18,18,18,0) 30%)",
            },
          }}
        />
        <Box
          top={0}
          left={0}
          width="100%"
          display="flex"
          alignItems="center"
          sx={{
            position: { xs: "relative", md: "absolute" },
            height: { xs: "auto", md: "100%" },
            py: { xs: 8, md: 0 },
          }}
        >
          <DefaultPageWidth>
            <Stack
              spacing={3}
              maxWidth={900}
              sx={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              <Typography
                variant="overline"
                sx={{
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                  color: "#CFD8DC",
                  fontSize: "0.8rem",
                }}
              >
                Family owned · St. Anthony, Idaho · 50+ years
              </Typography>
              <Box>
                <Typography
                  component="h1"
                  fontWeight={700}
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.25rem", lg: "4rem" },
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  It all starts with the best logs...
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight={400}
                  mt={2}
                  sx={{ maxWidth: 560 }}
                >
                  We take pride in quality service and products
                </Typography>
              </Box>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ textShadow: "none" }}
              >
                <Button
                  component="a"
                  href="tel:+12086247329"
                  variant="contained"
                  size="large"
                  startIcon={<PhoneIcon />}
                >
                  Call (208) 624-7329
                </Button>
                <Button
                  component="a"
                  href="#products"
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowDownwardIcon />}
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.6)",
                    "&:hover": { borderColor: "#fff" },
                  }}
                >
                  Browse products
                </Button>
              </Stack>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                Mon–Fri 8am–12pm, 1pm–5pm
              </Typography>
            </Stack>
          </DefaultPageWidth>
        </Box>
      </Box>
      <DefaultPageWidth>
        <TrustStrip />
        <Showcase />
        <Reviews />
        <ClosingCta />
      </DefaultPageWidth>
    </>
  );
}
