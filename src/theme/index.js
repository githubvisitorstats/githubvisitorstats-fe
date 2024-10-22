// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: "43px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "21px",
      fontWeight: 400,
    },
    h3: {
      fontSize: "21px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "21px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "17px",
      fontWeight: 400,
    },
    strong: {
      fontSize: "13px",
      fontWeight: 700,
    },
    span: {
      fontSize: "11px",
      fontWeight: 500,
    },
  },
});

export default theme;
