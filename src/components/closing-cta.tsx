import { Box, Stack, Typography } from "@mui/material";

import QuoteButtons from "./quote-buttons";

export default function ClosingCta() {
  return (
    <Box
      sx={{
        mt: "60px",
        p: { xs: 3, md: 5 },
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "rgba(255,255,255,0.04)",
      }}
    >
      <Stack spacing={2} maxWidth={700}>
        <Typography component="h2" variant="h4">
          Have a project in mind?
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Tell us what you&apos;re building and we&apos;ll help you figure out
          the right lumber, sizes, and quantity. Stop by the mill or give us a
          call for a personalized quote.
        </Typography>
        <QuoteButtons />
      </Stack>
    </Box>
  );
}
