import { IBM_Plex_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    gray: {
      // 100: "#EAECF0",
      200: "#475467",
      300: "#EAECF0",
      400: "#D0D5DD",
      600: "#475467",
      700: "#344054",
      900: "#101828",
    },
    warning: {
      50: "#FFFAEB",
      500: "#F79009",
      700: "#B54708",
    },
  },
  typography: {
    fontFamily: IBMPlexSans.style.fontFamily,
  },
});

export default theme;
/*
box-shadow: 0px 1px 2px 0px #1018280F;

box-shadow: 0px 1px 3px 0px #1018281A;

*/
