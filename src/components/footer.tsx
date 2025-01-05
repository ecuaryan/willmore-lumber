import { Box, Divider, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Addresses from "./addresses";
import BusinessHours from "./business-hours";
import ContactUs from "./contact-us";
import DefaultPageWidth from "./default-page-width";
import FooterLogo from "./footer-logo";

export default function Footer() {
  return (
    <DefaultPageWidth>
      <footer style={{ marginTop: 50, marginBottom: 300 }}>
        <Box color={"text.secondary"}>
          <Divider />
          <Grid container spacing={10} paddingTop={"50px"}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={10}>
                <ContactUs />
                <Addresses />
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BusinessHours />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <FooterLogo />
            </Grid>
          </Grid>
        </Box>
      </footer>
    </DefaultPageWidth>
  );
}
