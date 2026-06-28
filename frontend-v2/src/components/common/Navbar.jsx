import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Box,
  TextField,
  InputAdornment,
  Chip,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";

import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export default function Navbar({
  drawerWidth,
  handleDrawerToggle,
}) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    navigate("/");
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          width: {
            xs: "100%",
            lg: `calc(100% - ${drawerWidth}px)`,
          },
          ml: {
            lg: `${drawerWidth}px`,
          },
          backdropFilter: "blur(18px)",
          bgcolor: "rgba(255,255,255,.85)",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Toolbar
          sx={{
            minHeight: 78,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: {
                  xs: "flex",
                  lg: "none",
                },
              }}
            >
              <MenuRoundedIcon />
            </IconButton>

            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
                color="#111827"
              >
                Dashboard
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Welcome back, Administrator 👋
              </Typography>
            </Box>
          </Box>

          {/* SEARCH */}

          <Box
            sx={{
              width: 420,
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Search workers, hospitals, doctors..."
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#F8FAFC",
                  borderRadius: 4,
                },
              }}
            />
          </Box>

          {/* RIGHT */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Chip
              icon={<CalendarMonthRoundedIcon />}
              label={today}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            />

            <Chip
              icon={<AccessTimeRoundedIcon />}
              label={time}
              color="primary"
              variant="outlined"
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
              }}
            />

            <IconButton>
              <FullscreenRoundedIcon />
            </IconButton>

            <IconButton>
              <Badge
                badgeContent={6}
                color="error"
              >
                <NotificationsRoundedIcon />
              </Badge>
            </IconButton>

            <Box
              onClick={handleMenuOpen}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "#F8FAFC",
                px: 2,
                py: 1,
                borderRadius: 4,
                cursor: "pointer",
                transition: ".3s",

                "&:hover": {
                  bgcolor: "#EEF4FA",
                },
              }}
            >
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  bgcolor: "#1565C0",
                }}
              >
                A
              </Avatar>

              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                <Typography
                  fontSize={14}
                  fontWeight={700}
                >
                  Admin User
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  System Administrator
                </Typography>
              </Box>

              <KeyboardArrowDownRoundedIcon />
            </Box>
                        <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  mt: 1,
                  borderRadius: 3,
                  minWidth: 220,
                  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/profile");
                }}
              >
                <ListItemIcon>
                  <PersonRoundedIcon fontSize="small" />
                </ListItemIcon>

                Profile
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/settings");
                }}
              >
                <ListItemIcon>
                  <SettingsRoundedIcon fontSize="small" />
                </ListItemIcon>

                Settings
              </MenuItem>

              <Divider />

              <MenuItem
                onClick={handleLogout}
                sx={{
                  color: "error.main",
                }}
              >
                <ListItemIcon>
                  <LogoutRoundedIcon
                    color="error"
                    fontSize="small"
                  />
                </ListItemIcon>

                Logout
              </MenuItem>
            </Menu>

          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}