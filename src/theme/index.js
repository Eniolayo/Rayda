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
  },
  typography: {
    fontFamily: IBMPlexSans.style.fontFamily,
  },
});

export default theme;
