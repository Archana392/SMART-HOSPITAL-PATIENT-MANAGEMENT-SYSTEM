import {
  Paper,
  Typography,
  Box,
  Avatar,
  Stack,
  LinearProgress,
  Grid,
} from "@mui/material";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";
import VaccinesRoundedIcon from "@mui/icons-material/VaccinesRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";

export default function HealthSummary() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        background: "linear-gradient(135deg,#ffffff,#F5FAFF)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        ❤️ Overall Health Summary
      </Typography>

      <Grid container spacing={3}>
        {/* Healthy Workers */}

        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{
                bgcolor: "#43A047",
              }}
            >
              <FavoriteRoundedIcon />
            </Avatar>

            <Box flex={1}>
              <Typography fontWeight={700}>
                Healthy Workers
              </Typography>

              <Typography color="text.secondary">
                1184 / 1250 Workers
              </Typography>

              <LinearProgress
                variant="determinate"
                value={95}
                color="success"
                sx={{
                  mt: 1,
                  height: 10,
                  borderRadius: 10,
                }}
              />
            </Box>
          </Stack>
        </Grid>

        {/* Critical */}

        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{
                bgcolor: "#E53935",
              }}
            >
              <MonitorHeartRoundedIcon />
            </Avatar>

            <Box flex={1}>
              <Typography fontWeight={700}>
                Critical Patients
              </Typography>

              <Typography color="text.secondary">
                14 Workers
              </Typography>

              <LinearProgress
                variant="determinate"
                value={12}
                color="error"
                sx={{
                  mt: 1,
                  height: 10,
                  borderRadius: 10,
                }}
              />
            </Box>
          </Stack>
        </Grid>

        {/* Vaccination */}

        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{
                bgcolor: "#1976D2",
              }}
            >
              <VaccinesRoundedIcon />
            </Avatar>

            <Box flex={1}>
              <Typography fontWeight={700}>
                Vaccination Coverage
              </Typography>

              <Typography color="text.secondary">
                850 Workers Completed
              </Typography>

              <LinearProgress
                variant="determinate"
                value={82}
                sx={{
                  mt: 1,
                  height: 10,
                  borderRadius: 10,
                }}
              />
            </Box>
          </Stack>
        </Grid>

        {/* Hospital */}

        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{
                bgcolor: "#8E24AA",
              }}
            >
              <LocalHospitalRoundedIcon />
            </Avatar>

            <Box flex={1}>
              <Typography fontWeight={700}>
                Hospital Capacity
              </Typography>

              <Typography color="text.secondary">
                74% Occupied
              </Typography>

              <LinearProgress
                variant="determinate"
                value={74}
                color="secondary"
                sx={{
                  mt: 1,
                  height: 10,
                  borderRadius: 10,
                }}
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* AI Insight */}

      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 4,
          bgcolor: "#E3F2FD",
        }}
      >
        <Typography
          fontWeight={700}
          mb={1}
        >
          🤖 AI Health Insight
        </Typography>

        <Typography
          color="text.secondary"
          lineHeight={1.8}
        >
          Overall migrant worker health remains stable.
          Vaccination coverage has reached <strong>82%</strong>.
          Only <strong>14 workers</strong> require immediate medical
          attention. Hospital capacity across partner hospitals is
          sufficient for emergency admissions.
        </Typography>
      </Paper>
    </Paper>
  );
}