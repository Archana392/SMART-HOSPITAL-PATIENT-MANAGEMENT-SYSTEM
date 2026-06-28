import { useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

const drawerWidth = 280;

export default function MainLayout({ children }) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("lg"));

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", background: "#F4F8FC" }}>
      <CssBaseline />

      <Navbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Sidebar
        drawerWidth={drawerWidth}
        mobile={mobile}
        open={open}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          p: 4,
          bgcolor: "#F4F8FC",
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
}