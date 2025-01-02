import BusinessIcon from "@mui/icons-material/Business";
import MailIcon from "@mui/icons-material/Mail";
import { Box, Stack } from "@mui/material";
import Link from "next/link";

export default function Addresses() {
  return (
    <Stack spacing={2}>
      <Box fontWeight={700}>Address:</Box>
      <Stack spacing={4}>
        <Link
          href="https://maps.app.goo.gl/wfTevdPSTDQYfQLU7"
          target="_blank"
          style={{ width: "fit-content" }}
        >
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <BusinessIcon fontSize="large" />
            <Box>
              <Box>1205 S Yellowstone Hwy</Box>
              <Box>St. Anthony, ID 83445</Box>
            </Box>
          </Stack>
        </Link>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <MailIcon fontSize="large" />
          <Box>
            <Box>P.O. Box 489</Box>
            <Box>St. Anthony, ID 83445</Box>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}
