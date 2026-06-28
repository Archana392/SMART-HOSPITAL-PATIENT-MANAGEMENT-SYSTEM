import React from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BarChartIcon from "@mui/icons-material/BarChart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

import { NavLink } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Workers", icon: <PeopleIcon />, path: "/workers" },
  { text: "Doctors", icon: <MedicalServicesIcon />, path: "/doctors" },
  { text: "Medical Records", icon: <FolderSharedIcon />, path: "/records" },
  { text: "Hospitals", icon: <LocalHospitalIcon />, path: "/hospitals" },
  { text: "Vaccination", icon: <VaccinesIcon />, path: "/vaccination" },
  { text: "Reports", icon: <AssessmentIcon />, path: "/reports" },
  { text: "Analytics", icon: <BarChartIcon />, path: "/analytics" },
  { text: "Notifications", icon: <NotificationsIcon />, path: "/notifications" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
];

export default function Sidebar({
  drawerWidth,
  mobile,
  open,
  handleDrawerToggle,
}) {
  const drawer = (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 3,
        }}
      >
        <HealthAndSafetyIcon sx={{ fontSize: 42, color: "#fff" }} />

        <Box>
          <Typography fontWeight={700} fontSize={24}>
            DHRMS
          </Typography>

          <Typography fontSize={12}>
            Digital Health Record
          </Typography>

          <Typography fontSize={12}>
            Management System
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,.15)" }} />

      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.text}
            to={item.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {({ isActive }) => (
              <ListItemButton
                sx={{
                  mx: 2,
                  mb: 1,
                  borderRadius: 3,
                  bgcolor: isActive
                    ? "rgba(255,255,255,.18)"
                    : "transparent",

                  "&:hover": {
                    bgcolor: "rgba(255,255,255,.12)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#fff", minWidth: 42 }}>
                  {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text} />
              </ListItemButton>
            )}
          </NavLink>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ borderColor: "rgba(255,255,255,.15)" }} />

      <List>
        <ListItemButton
          sx={{
            m: 2,
            borderRadius: 3,
            "&:hover": {
              bgcolor: "rgba(255,255,255,.12)",
            },
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </>
  );

  return (
    <Box component="nav" sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}>
      {mobile ? (
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          open
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
}