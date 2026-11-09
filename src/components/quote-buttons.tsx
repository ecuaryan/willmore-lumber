import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, Stack } from "@mui/material";

const subject = "Quote request";
const body = `Hi Willmore Lumber,

I'd like a quote on:

Product(s):
Sizes / lengths:
Quantity:
Pickup or delivery (and delivery address):
Needed by:

Name:
Phone:`;

export const quoteHref = `mailto:willmorelumber@blackfoot.net?subject=${encodeURIComponent(
  subject,
)}&body=${encodeURIComponent(body)}`;

export default function QuoteButtons() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <Button
        component="a"
        href="tel:+12086247329"
        variant="contained"
        startIcon={<PhoneIcon />}
      >
        Call (208) 624-7329
      </Button>
      <Button
        component="a"
        href={quoteHref}
        variant="outlined"
        sx={{
          color: "#B0BEC5",
          borderColor: "rgba(176, 190, 197, 0.5)",
          "&:hover": { borderColor: "#B0BEC5" },
        }}
        startIcon={<EmailIcon />}
      >
        Email a quote request
      </Button>
    </Stack>
  );
}
