import QuoteButtons from "@/components/quote-buttons";

import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Call Willmore Lumber at (208) 624-7329 for a personalized quote on your project.",
  alternates: { canonical: "/pricing" },
};

export default function Pricing() {
  return (
    <Stack spacing={3} maxWidth="700px">
      <Typography component="h1" variant="h3">
        Pricing
      </Typography>
      <Typography variant="body1">
        At Willmore Lumber, we believe in offering the best value for your
        unique needs. Give us a call to discuss your project, and we&apos;ll
        provide you with a personalized quote. Our team is ready to assist you!
      </Typography>
      <QuoteButtons />
    </Stack>
  );
}
