import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FaxIcon from "@mui/icons-material/Fax";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Stack } from "@mui/material";
import Link from "next/link";

export default function ContactUs() {
  return (
    <Stack spacing={2}>
      <Box fontWeight={700}>Contact:</Box>
      <Link href="tel:+12086247329" style={{ width: "fit-content" }}>
        <Stack direction={"row"} spacing={1}>
          <PhoneIcon />
          <Box>(208) 624 - 7329</Box>
        </Stack>
      </Link>
      <Link
        href="mailto:willmorelumber@blackfoot.net"
        style={{ width: "fit-content" }}
      >
        <Stack direction={"row"} spacing={1}>
          <AlternateEmailIcon />
          <Box>willmorelumber@blackfoot.net</Box>
        </Stack>
      </Link>
      <Stack direction={"row"} spacing={1}>
        <FaxIcon />
        <Box>Fax - (208) 624 - 3448</Box>
      </Stack>
    </Stack>
  );
}
