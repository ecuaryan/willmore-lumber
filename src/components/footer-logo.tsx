import { Box } from "@mui/material";
import Image from "next/image";

export default function FooterLogo() {
  return (
    <>
      <Image
        src="/logo.webp"
        alt="Willmore Lumber logo"
        width={349.98}
        height={286.45}
        unoptimized
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <Box textAlign={"center"}>
        © 2024 - Willmore Lumber Co. All rights reserved.
      </Box>
    </>
  );
}
