import { createTheme } from "@mui/material/styles";
import { purple, grey } from '@mui/material/colors';

// import green from '@mui/material/colors/green';

let theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      contrastText: grey[900]
    },
    secondary: {
      main: "#edf2ff",
      contrastText: grey[900],
    },
  },
});

export default theme;