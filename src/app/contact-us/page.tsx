import QuoteButtons from "@/components/quote-buttons";

import { Box, Button, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, email, or visit Willmore Lumber at 1205 S Yellowstone Hwy, St. Anthony, ID. Hours, directions, and quote requests.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUs() {
  return (
    <Stack spacing={3} maxWidth="700px">
      <Typography component="h1" variant="h3">
        Contact Us
      </Typography>
      <Typography variant="body1">
        Your satisfaction is our top priority. Feel free to reach out with any
        questions, comments, or suggestions—we’re here to help!
      </Typography>
      <QuoteButtons />
      <Box
        component="iframe"
        title="Map to Willmore Lumber"
        src="https://www.google.com/maps?q=1205+S+Yellowstone+Hwy,+St.+Anthony,+ID+83445&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sx={{ border: 0, width: "100%", height: 350 }}
      />
      <Button
        component="a"
        href="https://maps.app.goo.gl/wfTevdPSTDQYfQLU7"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ width: "fit-content" }}
      >
        Get directions
      </Button>
    </Stack>
  );
}
