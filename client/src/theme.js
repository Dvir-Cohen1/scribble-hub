import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  type: "light",
  palette: {
    type: "light",
    primary: {
      main: "#3068f4",
      dark: "#3264db",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    button: {
      fontSize: "0.8rem",
    },
  },
});

export default theme;
