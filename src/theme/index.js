import { createTheme } from "@mui/material/styles";

const palette = {
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
};

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: "55px",
          backgroundColor: palette.purple.dark,
          borderRadius: "6px",
          "&.ButtonAction": {
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
          },
          ":hover": {
            backgroundColor: palette.purple.dark,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "contained" },
              style: {
                backgroundColor: palette.purple.light,
                fontSize: "15px",
                textTransform: "none",
                fontWeight: 400,
                color: palette.white.main,
                padding: "15px 40px",
                width: "fit-content",
                borderRadius: "6px",
                maxHeight: "55px",
                transitionProperty: "filter",
                transitionDuration: "0.3s",
                ":hover": {
                  filter: "brightness(1.1)",
                },
              },
            },
          ],
          "& .MuiTouchRipple-root": {
            display: "none",
          },
          "&.ButtonAction": {
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
          },
          "&.Mui-disabled": {
            backgroundColor: palette.grey.light,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&:after": {
            display: "none",
          },
          "&:before": {
            display: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: {
                variant: "standard",
              },
              style: {
                "& input": {
                  backgroundColor: palette.white.main,
                  borderRadius: "6px",
                  border: "0px",
                  fontSize: "15px",
                  padding: "15px 30px",
                  color: palette.grey.main,
                  boxSizing: "border-box",
                  height: "55px",
                },
                "& input::placeholder": {
                  color: palette.grey.light,
                  opacity: 1,
                },
              },
            },
            {
              props: {
                variant: "filled",
              },
              style: {
                "& input": {
                  backgroundColor: palette.purple.dark,
                  borderRadius: "6px",
                  border: "0px",
                  fontSize: "15px",
                  padding: "15px 30px",
                  color: palette.white.main,
                  boxSizing: "border-box",
                  height: "55px",
                },
                "& input::placeholder": {
                  color: palette.purple.light,
                },
              },
            },
          ],
          "&.ButtonAction input": {
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          },
          "& fieldset": {
            display: "none",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          position: "relative",
        },
        maxWidthLg: {
          maxWidth: "1400px",
          "@media (min-width: 1200px)": {
            maxWidth: "1400px",
          },
        },
      },
    },
  },
  palette: palette,
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
      "& a": {
        color: palette.blue.light,
        textDecoration: "none",
      },
      "@media (max-width:600px)": {
        fontSize: "17px",
      },
    },
    body2: {
      fontSize: "15px",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "13px",
      },
    },
    overline: {
      fontSize: "11px",
      textTransform: "none",
      lineHeight: "20px",
    },
    button: {
      fontSize: "13px",
      fontWeight: 300,
      lineHeight: "normal",
      textTransform: "none",
      "& a": {
        textDecoration: "none",
        color: palette.grey.light,
        transition: "0.3s color ease",
      },
      "& a:hover": {
        color: palette.white.main,
      },
    },
  },
});

export default theme;
