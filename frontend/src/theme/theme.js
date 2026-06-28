import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#1565C0",
    },

    secondary: {
      main: "#26C6DA",
    },

    background: {
      default: "#F4F8FC",
      paper: "#FFFFFF",
    },

    success: {
      main: "#43A047",
    },

    warning: {
      main: "#FB8C00",
    },

    error: {
      main: "#E53935",
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h3: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 20px",
        },
      },
    },
  },
});

export default theme;