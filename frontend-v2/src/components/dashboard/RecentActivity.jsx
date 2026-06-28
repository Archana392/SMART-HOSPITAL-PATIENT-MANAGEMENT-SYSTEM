import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
  Divider,
} from "@mui/material";

import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import VaccinesRoundedIcon from "@mui/icons-material/VaccinesRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";

const activities = [
  {
    icon: <PersonAddRoundedIcon />,
    title: "New Worker Registered",
    subtitle: "Ramesh Kumar • 10 minutes ago",
    color: "#1976D2",
    status: "New",
  },
  {
    icon: <VaccinesRoundedIcon />,
    title: "Vaccination Completed",
    subtitle: "Priya Devi • 35 minutes ago",
    color: "#43A047",
    status: "Done",
  },
  {
    icon: <MedicalServicesRoundedIcon />,
    title: "Doctor Assigned",
    subtitle: "Rahul Singh • 1 hour ago",
    color: "#FB8C00",
    status: "Assigned",
  },
  {
    icon: <LocalHospitalRoundedIcon />,
    title: "Hospital Visit Recorded",
    subtitle: "Suresh Patel • Today",
    color: "#8E24AA",
    status: "Updated",
  },
];

export default function RecentActivity() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        🕒 Recent Activity
      </Typography>

      <List disablePadding>
        {activities.map((item, index) => (
          <div key={index}>
            <ListItem
              sx={{
                px: 0,
                py: 2,
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: item.color,
                  }}
                >
                  {item.icon}
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography fontWeight={700}>
                    {item.title}
                  </Typography>
                }
                secondary={item.subtitle}
              />

              <Chip
                label={item.status}
                size="small"
                sx={{
                  bgcolor: item.color,
                  color: "#fff",
                  fontWeight: 600,
                }}
              />
            </ListItem>

            {index !== activities.length - 1 && (
              <Divider />
            )}
          </div>
        ))}
      </List>
    </Paper>
  );
}