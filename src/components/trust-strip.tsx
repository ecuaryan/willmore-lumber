import type { ReactNode } from "react";

import ForestIcon from "@mui/icons-material/Forest";
import GroupsIcon from "@mui/icons-material/Groups";
import HistoryIcon from "@mui/icons-material/History";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import SawIcon from "./saw-icon";

const items: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: <HistoryIcon fontSize="large" />,
    title: "50+ Years",
    text: "Proudly serving our community for more than five decades.",
  },
  {
    icon: <GroupsIcon fontSize="large" />,
    title: "Family Owned",
    text: "Run by Jim Willmore and his sons Rod, Alan, and Troy.",
  },
  {
    icon: <ForestIcon fontSize="large" />,
    title: "Locally Harvested",
    text: "Timber sourced within a 150-mile radius of our mill.",
  },
  {
    icon: <SawIcon fontSize="large" />,
    title: "Cut To Order",
    text: "No job too big or too small. Custom sizes and lengths.",
  },
];

export default function TrustStrip() {
  return (
    <Grid container spacing={4} mt={"60px"}>
      {items.map((i) => (
        <Grid key={i.title} size={{ xs: 12, sm: 6, md: 3 }}>
          <Box display="flex" gap={2} alignItems="flex-start">
            <Box color="#B0BEC5" mt={0.5}>
              {i.icon}
            </Box>
            <Box>
              <Typography component="h2" variant="h6">
                {i.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {i.text}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
