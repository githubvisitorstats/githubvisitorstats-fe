// theme.js
import { createTheme } from "@mui/material/styles";

const colors = {
  purple: "#1d1b84",
  darkPurple: "#000546",
  lightPurple: "#4945ff",
  white: "#fff",
  black: "#000",
  darkWhite: "#c0c0cf",
};

const theme = createTheme({
  palette: {
    purple: {
      dark: "#000546",
      main: "#1d1b84",
      light: "#4945ff",
    },
    blue: {
      dark: "#344b80",
      light: "#4a95ff",
    },
    grey: {
      dark: {
        main: "#0d1116",
      },
      main: {
        main: "#3f444c",
      },
      light: {
        main: "#c0c0cf",
      },
    },
    black: {
      main: "#000",
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,

    h1: {
      fontSize: "43px",
      fontWeight: 700,
      "@media (max-width:960px)": {
        fontSize: "41px",
      },
      "@media (max-width:600px)": {
        fontSize: "33px",
      },
    },
    h2: {
      fontSize: "13px",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "13px",
      },
    },
    h3: {
      fontSize: "43px",
      fontWeight: 700,
      "@media (max-width:960px)": {
        fontSize: "41px",
      },
      "@media (max-width:600px)": {
        fontSize: "33px",
      },
    },
    h4: {
      fontSize: "21px",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "17px",
      },
    },
    h5: {
      fontSize: "21px",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "17px",
      },
    },
    body1: {
      fontSize: "17px",
      "@media (max-width:600px)": {
        fontSize: "17px",
      },
    },
  },
});

export default theme;
