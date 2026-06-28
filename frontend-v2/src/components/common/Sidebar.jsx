import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Switch,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import VaccinesRoundedIcon from "@mui/icons-material/VaccinesRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

import { NavLink } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <DashboardRoundedIcon />, path: "/dashboard" },
  { text: "Workers", icon: <GroupsRoundedIcon />, path: "/workers" },
  { text: "Doctors", icon: <MedicalServicesRoundedIcon />, path: "/doctors" },
  { text: "Medical Records", icon: <FolderSharedRoundedIcon />, path: "/records" },
  { text: "Hospitals", icon: <LocalHospitalRoundedIcon />, path: "/hospitals" },
  { text: "Vaccination", icon: <VaccinesRoundedIcon />, path: "/vaccination" },
  { text: "Analytics", icon: <AnalyticsRoundedIcon />, path: "/analytics" },
  { text: "Reports", icon: <DescriptionRoundedIcon />, path: "/reports" },
  { text: "Profile", icon: <PersonRoundedIcon />, path: "/profile" },
  { text: "Settings", icon: <SettingsRoundedIcon />, path: "/settings" },
];

export default function Sidebar({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}) {
  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(180deg,#0B2F6B 0%,#1565C0 100%)",
        color: "#fff",
      }}
    >
      {/* Logo */}

      <Box
        sx={{
          py: 4,
          textAlign: "center",
        }}
      >
        <Avatar
          sx={{
            width: 72,
            height: 72,
            mx: "auto",
            bgcolor: "rgba(255,255,255,.15)",
            mb: 2,
          }}
        >
          <HealthAndSafetyRoundedIcon sx={{ fontSize: 40 }} />
        </Avatar>

        <Typography variant="h4" fontWeight={700}>
          DHRMS
        </Typography>

        <Typography
          variant="body2"
          sx={{
            opacity: 0.8,
            mt: 0.5,
          }}
        >
          Digital Health System
        </Typography>
      </Box>

      <Divider sx={{ bgcolor: "rgba(255,255,255,.15)" }} />

      {/* Menu */}

      <List
        sx={{
          mt: 2,
          px: 1,
          flexGrow: 1,
          overflowY: "auto",

          "&::-webkit-scrollbar": {
            width: "6px",
          },

          "&::-webkit-scrollbar-thumb": {
            background: "#4FA3FF",
            borderRadius: "20px",
          },
        }}
      >
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              color: "#fff",
              borderRadius: 3,
              mb: 1,
              py: 1.4,

              "&.active": {
                bgcolor: "#42A5F5",
                boxShadow: "0 10px 20px rgba(0,0,0,.25)",
              },

              "&:hover": {
                bgcolor: "#1976D2",
                transform: "translateX(5px)",
                transition: ".3s",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "#fff",
                minWidth: 42,
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={
                <Typography fontWeight={600}>
                  {item.text}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ bgcolor: "rgba(255,255,255,.15)" }} />
            {/* Language */}

      <Box
        sx={{
          p: 2,
          borderTop: "1px solid rgba(255,255,255,.15)",
        }}
      >
        <Typography
          fontWeight={600}
          mb={1}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <LanguageRoundedIcon />
          Language
        </Typography>

        <FormControl fullWidth size="small">
          <Select
            defaultValue="English"
            sx={{
              bgcolor: "rgba(255,255,255,.15)",
              color: "#fff",
              borderRadius: 3,

              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },

              ".MuiSvgIcon-root": {
                color: "#fff",
              },
            }}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="தமிழ்">தமிழ்</MenuItem>
            <MenuItem value="हिन्दी">हिन्दी</MenuItem>
            <MenuItem value="తెలుగు">తెలుగు</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Dark Mode */}

      <Box
        sx={{
          px: 2,
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight={600}
          display="flex"
          alignItems="center"
          gap={1}
        >
          <DarkModeRoundedIcon />
          Dark Mode
        </Typography>

        <Switch color="default" />
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: {
            xs: "block",
            lg: "none",
          },

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}

      <Drawer
        variant="permanent"
        open
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            border: "none",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}