"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    mode: "dark",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(22, 22, 22, 0.8)",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        component: "div",
      },
    },
  },
});

export default theme;
