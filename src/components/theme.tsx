import type {} from "@mui/lab/themeAugmentation";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  // https://mui.com/material-ui/customization/palette/
  palette: {
    primary: {
      main: "rgb(44,47,38)",
      contrastText: "rgb(238,222,188)",
    },
    secondary: {
      main: "rgb(153, 44, 22)",
      light: "rgba(222, 64, 32, 1)",
      contrastText: "rgb(238,222,188)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Custom border radius for all buttons
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            color: "rgb(238,222,188)",
            "&:hover": {
              backgroundColor: "rgba(255, 253, 253, 0)",
              border: "none",
              outline: "none",
            },
            "&:active": {
              backgroundColor: "none",
              border: "none",
              outline: `none`,
            },
          },
        },
      ],
    },
  },
});
