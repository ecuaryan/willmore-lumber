import PunchClockIcon from "@mui/icons-material/PunchClock";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function BusinessHours() {
  return (
    <Stack spacing={2}>
      <Box fontWeight={700}>Hours:</Box>
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <PunchClockIcon fontSize="large" />
        <Typography variant="body1">
          <Grid container>
            <Grid size={12}>Monday - Friday:</Grid>
            <Grid size={12}>8am - 12pm, 1pm - 5pm</Grid>
            <Grid size={12} mt={2}>
              Saturday:{" "}
            </Grid>
            <Grid size={12}>by appointment</Grid>
          </Grid>
        </Typography>
      </Stack>
    </Stack>
  );
}
