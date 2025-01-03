import { Box } from "@mui/material";

export default function DefaultPageWidth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          margin: "50px auto 50px auto",
        }}
      >
        {children}
      </Box>
    </main>
  );
}
