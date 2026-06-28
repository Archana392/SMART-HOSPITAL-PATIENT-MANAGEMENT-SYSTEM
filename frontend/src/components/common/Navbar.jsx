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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

export default function Navbar({
  drawerWidth,
  handleDrawerToggle,
}) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: {
          lg: `calc(100% - ${drawerWidth}px)`,
        },
        ml: {
          lg: `${drawerWidth}px`,
        },
        bgcolor: "#fff",
        color: "#1f2937",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            sx={{ display: { lg: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Box>
            <Typography
              variant="h5"
              fontWeight={700}
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

        <TextField
          size="small"
          placeholder="Search workers, doctors..."
          sx={{
            width: 320,
            display: {
              xs: "none",
              md: "flex",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Box display="flex" alignItems="center" gap={2}>
          <Box
            display={{
              xs: "none",
              md: "flex",
            }}
            alignItems="center"
            gap={1}
          >
            <CalendarMonthRoundedIcon
              color="primary"
            />

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {today}
            </Typography>
          </Box>

          <IconButton>
            <DarkModeOutlinedIcon />
          </IconButton>

          <IconButton>
            <Badge
              badgeContent={4}
              color="error"
            >
              <NotificationsNoneRoundedIcon />
            </Badge>
          </IconButton>

          <Avatar
            sx={{
              bgcolor: "#1565C0",
              width: 42,
              height: 42,
              fontWeight: 700,
            }}
          >
            A
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}