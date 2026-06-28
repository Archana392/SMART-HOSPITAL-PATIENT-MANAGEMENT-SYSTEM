import MainLayout from "../../layouts/MainLayout";

import {
  Box,
  Typography,
  Paper,
  Grid,
  Chip,
  Button,
} from "@mui/material";

import VaccinesIcon from "@mui/icons-material/Vaccines";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";

const vaccinations = [
  {
    id: "VAC001",
    worker: "Ramesh Kumar",
    vaccine: "COVID-19 Booster",
    date: "15 Jun 2026",
    status: "Completed",
  },
  {
    id: "VAC002",
    worker: "Priya Devi",
    vaccine: "Hepatitis B",
    date: "18 Jun 2026",
    status: "Pending",
  },
  {
    id: "VAC003",
    worker: "Rahul Singh",
    vaccine: "Tetanus",
    date: "20 Jun 2026",
    status: "Completed",
  },
  {
    id: "VAC004",
    worker: "Suresh Patel",
    vaccine: "Influenza",
    date: "22 Jun 2026",
    status: "Upcoming",
  },
];

export default function Vaccination() {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Vaccination Management
          </Typography>

          <Typography color="text.secondary">
            Track vaccination history and upcoming doses.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add Vaccination
        </Button>
      </Box>

      <Grid container spacing={3}>
        {vaccinations.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 4,
                transition: ".3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
              >
                <PersonIcon
                  sx={{
                    mr: 1,
                    verticalAlign: "middle",
                  }}
                />
                {item.worker}
              </Typography>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={2}
              >
                <VaccinesIcon color="primary" />
                {item.vaccine}
              </Typography>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={2}
              >
                <CalendarMonthIcon color="success" />
                {item.date}
              </Typography>

              <Chip
                label={item.status}
                color={
                  item.status === "Completed"
                    ? "success"
                    : item.status === "Pending"
                    ? "warning"
                    : "info"
                }
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
}