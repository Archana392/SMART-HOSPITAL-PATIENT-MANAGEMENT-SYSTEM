import MainLayout from "../../layouts/MainLayout";

import {
  Box,
  Typography,
  Button,
  Paper,
  Chip,
  Grid,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";
import DownloadIcon from "@mui/icons-material/Download";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const records = [
  {
    id: "MR001",
    worker: "Ramesh Kumar",
    diagnosis: "Viral Fever",
    hospital: "Apollo Hospital",
    date: "12 Jun 2026",
    status: "Recovered",
  },
  {
    id: "MR002",
    worker: "Priya Devi",
    diagnosis: "Fracture",
    hospital: "AIIMS",
    date: "15 Jun 2026",
    status: "Under Treatment",
  },
  {
    id: "MR003",
    worker: "Rahul Singh",
    diagnosis: "Diabetes Checkup",
    hospital: "CMC Vellore",
    date: "18 Jun 2026",
    status: "Healthy",
  },
];

export default function MedicalRecords() {
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
            Medical Records
          </Typography>

          <Typography color="text.secondary">
            View and manage workers' medical history.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ borderRadius: 3 }}
        >
          New Record
        </Button>
      </Box>

      <Grid container spacing={3}>
        {records.map((record) => (
          <Grid item xs={12} md={6} lg={4} key={record.id}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 4,
                transition: ".3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
              >
                {record.worker}
              </Typography>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
              >
                <DescriptionIcon color="primary" />
                {record.diagnosis}
              </Typography>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
              >
                <LocalHospitalIcon color="secondary" />
                {record.hospital}
              </Typography>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={2}
              >
                <CalendarMonthIcon color="success" />
                {record.date}
              </Typography>

              <Chip
                label={record.status}
                color={
                  record.status === "Healthy"
                    ? "success"
                    : record.status === "Recovered"
                    ? "primary"
                    : "warning"
                }
              />

              <Button
                fullWidth
                sx={{ mt: 3 }}
                variant="outlined"
                startIcon={<DownloadIcon />}
              >
                Download Report
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
}