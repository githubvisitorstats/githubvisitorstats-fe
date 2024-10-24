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
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontWeightRegular: 400, // $normal
    fontWeightMedium: 500, // $medium
    fontWeightSemiBold: 600, // $semi-bold
    fontWeightBold: 700, // $bold

    h1: {
      fontSize: "53px", // $title-extra-large
      fontWeight: 600, // $semi-bold (örnek)
      "@media (max-width:600px)": {
        fontSize: "43px", // $title-extra-large-mb
      },
    },
    h2: {
      fontSize: "43px", // $title-large
      fontWeight: 500, // $medium (örnek)
      "@media (max-width:960px)": {
        fontSize: "41px", // $title-large-m
      },
      "@media (max-width:600px)": {
        fontSize: "33px", // $title-large-mb
      },
    },
    h3: {
      fontSize: "33px", // $title-medium
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "23px", // $title-medium-mb
      },
    },
    h4: {
      fontSize: "21px", // $title-small
      fontWeight: 400, // $normal (örnek)
      "@media (max-width:600px)": {
        fontSize: "17px", // $title-small-mb
      },
    },
    h5: {
      fontSize: "17px", // $title-smaller
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "13px", // $title-smaller-mb
      },
    },
    body1: {
      fontSize: "21px", // $text-large
      "@media (max-width:600px)": {
        fontSize: "17px", // $text-large-mb
      },
    },
    body2: {
      fontSize: "17px", // $text-medium
      "@media (max-width:600px)": {
        fontSize: "17px", // $text-medium-mb
      },
    },
    subtitle1: {
      fontSize: "15px", // $text-small
      "@media (max-width:600px)": {
        fontSize: "15px", // $text-small-mb
      },
    },
    subtitle2: {
      fontSize: "13px", // $text-smaller
      "@media (max-width:600px)": {
        fontSize: "13px", // $text-smaller-mb
      },
    },
    caption: {
      fontSize: "12px", // $text-extra-small
    },
    overline: {
      fontSize: "9px", // $text-extra-small-card
    },
    button: {
      fontSize: "13px", // $label
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "11px", // $label-mb
      },
    },
    labelLarge: {
      fontSize: "17px", // $label-large
      fontWeight: 500,
    },
  },
});

export default theme;
