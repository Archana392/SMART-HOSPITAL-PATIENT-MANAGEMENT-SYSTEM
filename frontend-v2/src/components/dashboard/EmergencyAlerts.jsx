import {
  Paper,
  Typography,
  Box,
  Avatar,
  Chip,
  Stack,
  LinearProgress,
} from "@mui/material";

import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import VaccinesRoundedIcon from "@mui/icons-material/VaccinesRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";

const alerts = [
  {
    title: "Critical Emergency",
    description: "3 workers require immediate medical attention.",
    color: "#E53935",
    progress: 100,
    status: "Critical",
    icon: <WarningAmberRoundedIcon />,
  },
  {
    title: "Vaccination Due",
    description: "18 workers have pending vaccinations.",
    color: "#FB8C00",
    progress: 70,
    status: "Pending",
    icon: <VaccinesRoundedIcon />,
  },
  {
    title: "Doctors Available",
    description: "68 doctors are available across partner hospitals.",
    color: "#43A047",
    progress: 90,
    status: "Available",
    icon: <MedicalServicesRoundedIcon />,
  },
  {
    title: "Hospital Capacity",
    description: "15 hospitals connected to the national network.",
    color: "#1976D2",
    progress: 75,
    status: "Stable",
    icon: <LocalHospitalRoundedIcon />,
  },
];

export default function EmergencyAlerts() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        height: "100%",
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        🚨 Emergency Alerts
      </Typography>

      <Stack spacing={3}>
        {alerts.map((item) => (
          <Box
            key={item.title}
            sx={{
              p: 2,
              borderRadius: 4,
              bgcolor: "#F8FAFC",
              border: "1px solid #E5E7EB",
              transition: ".3s",

              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
              },
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Avatar
                sx={{
                  bgcolor: item.color,
                  width: 54,
                  height: 54,
                }}
              >
                {item.icon}
              </Avatar>

              <Box flex={1}>
                <Typography fontWeight={700}>
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {item.description}
                </Typography>
              </Box>

              <Chip
                label={item.status}
                sx={{
                  bgcolor: item.color,
                  color: "#fff",
                  fontWeight: 700,
                }}
              />
            </Stack>

            <LinearProgress
              variant="determinate"
              value={item.progress}
              sx={{
                mt: 2,
                height: 8,
                borderRadius: 5,
              }}
            />
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}