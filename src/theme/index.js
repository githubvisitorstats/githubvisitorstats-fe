import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1400px",
          "@media (min-width: 1200px)": {
            maxWidth: "1400px",
          },
        },
      },
    },
  },
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
      dark: "#0d1116",
      main: "#3f444c",
      light: "#c0c0cf",
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
      fontWeight: 600,
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
      fontWeight: 300,
      lineHeight: "31px",
      "@media (max-width:600px)": {
        fontSize: "17px",
        lineHeight: "27px",
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
    body2: {
      fontSize: "15px",
      fontWeight: 500,
      "& > a": {
        textDecoration: "none",
      },
      "@media (max-width:600px)": {
        fontSize: "13px",
      },
    },
  },
});

export default theme;
