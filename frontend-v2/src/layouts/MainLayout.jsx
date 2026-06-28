import { useState } from "react";
import { Box, Toolbar } from "@mui/material";

import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

const drawerWidth = 300;

export default function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F5F9FF",
        overflow: "hidden",
      }}
    >
      {/* ================= NAVBAR ================= */}

      <Navbar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* ================= SIDEBAR ================= */}

      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* ================= MAIN CONTENT ================= */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: {
            xs: "100%",
            lg: `calc(100% - ${drawerWidth}px)`,
          },

          ml: {
            xs: 0,
            lg: `${drawerWidth}px`,
          },

          minHeight: "100vh",

          overflowY: "auto",
          overflowX: "hidden",

          bgcolor: "#F5F9FF",

          transition: "all .35s ease",

          background:
            "linear-gradient(180deg,#F8FBFF 0%,#F4F8FC 100%)",
        }}
      >
        {/* Navbar spacing */}

        <Toolbar />

        {/* Page Content */}

        <Box
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
            },

            py: {
              xs: 3,
              md: 4,
            },

            maxWidth: "1800px",

            mx: "auto",

            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}