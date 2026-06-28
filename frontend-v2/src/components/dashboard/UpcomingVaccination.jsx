import {
  Paper,
  Typography,
  Box,
  Stack,
  Avatar,
  Chip,
  LinearProgress,
} from "@mui/material";

import VaccinesRoundedIcon from "@mui/icons-material/VaccinesRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";

const vaccinations = [
  {
    name: "Ramesh Kumar",
    vaccine: "COVID-19 Booster",
    hospital: "Apollo Hospital",
    due: "Today",
    progress: 100,
    status: "Completed",
    color: "#43A047",
  },
  {
    name: "Priya Devi",
    vaccine: "Hepatitis B",
    hospital: "AIIMS Delhi",
    due: "Tomorrow",
    progress: 70,
    status: "Pending",
    color: "#FB8C00",
  },
  {
    name: "Rahul Singh",
    vaccine: "Influenza",
    hospital: "CMC Vellore",
    due: "25 Jun",
    progress: 40,
    status: "Scheduled",
    color: "#1976D2",
  },
  {
    name: "Suresh Patel",
    vaccine: "Tetanus",
    hospital: "Government Hospital",
    due: "28 Jun",
    progress: 20,
    status: "Upcoming",
    color: "#8E24AA",
  },
];

export default function UpcomingVaccination() {
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
        💉 Upcoming Vaccinations
      </Typography>

      <Stack spacing={3}>
        {vaccinations.map((item) => (
          <Box
            key={item.name}
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
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Avatar
                  sx={{
                    bgcolor: item.color,
                    width: 50,
                    height: 50,
                  }}
                >
                  {item.name.charAt(0)}
                </Avatar>

                <Box>
                  <Typography fontWeight={700}>
                    {item.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    <VaccinesRoundedIcon
                      sx={{
                        fontSize: 16,
                        mr: 0.5,
                        verticalAlign: "middle",
                      }}
                    />
                    {item.vaccine}
                  </Typography>
                </Box>
              </Stack>

              <Chip
                label={item.status}
                sx={{
                  bgcolor: item.color,
                  color: "#fff",
                  fontWeight: 700,
                }}
              />
            </Stack>

            <Typography
              variant="body2"
              mt={2}
            >
              <LocalHospitalRoundedIcon
                sx={{
                  fontSize: 16,
                  mr: 0.5,
                  verticalAlign: "middle",
                  color: "#1976D2",
                }}
              />
              {item.hospital}
            </Typography>

            <Typography
              variant="body2"
              mt={1}
            >
              <CalendarMonthRoundedIcon
                sx={{
                  fontSize: 16,
                  mr: 0.5,
                  verticalAlign: "middle",
                  color: "#1976D2",
                }}
              />
              Due Date : {item.due}
            </Typography>

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