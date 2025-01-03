import { Box } from "@mui/material";
import Image from "next/legacy/image";

export default function FooterLogo() {
  return (
    <>
      <Image
        src="/logo.webp"
        alt="Willmore Lumber logo"
        layout="responsive"
        width={349.98}
        height={286.45}
        unoptimized
      />
      <Box textAlign={"center"}>
        © 2024 - Willmore Lumber Co. All rights reserved.
      </Box>
    </>
  );
}
