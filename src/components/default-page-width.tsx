import { Box } from "@mui/material";

export default function DefaultPageWidth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "80%" },
        margin: "0px auto",
      }}
    >
      {children}
    </Box>
  );
}
