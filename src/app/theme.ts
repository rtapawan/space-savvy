"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    button: { textTransform: "none" },
  },
  palette: {
    primary: {
      main: "#1fbba6",
      contrastText: "#fff",
    },
    secondary: {
      main: "#bb1f34",
      contrastText: "#fff",
    },
  },
});

export default theme;
