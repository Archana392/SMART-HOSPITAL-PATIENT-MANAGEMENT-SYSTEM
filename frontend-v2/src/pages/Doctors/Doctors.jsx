import MainLayout from "../../layouts/MainLayout";

import {
  Box,
  Typography,
  Button,
  Paper,
  Avatar,
  Chip,
  Grid,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PhoneIcon from "@mui/icons-material/Phone";

const doctors = [
  {
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiologist",
    hospital: "Apollo Hospital",
    phone: "+91 9876543210",
    status: "Available",
  },
  {
    name: "Dr. Priya Sharma",
    specialization: "General Physician",
    hospital: "AIIMS",
    phone: "+91 9876501234",
    status: "Busy",
  },
  {
    name: "Dr. Arjun Patel",
    specialization: "Orthopedic",
    hospital: "CMC Vellore",
    phone: "+91 9123456789",
    status: "Available",
  },
  {
    name: "Dr. Kavitha",
    specialization: "Neurologist",
    hospital: "Government Hospital",
    phone: "+91 9988776655",
    status: "Available",
  },
];

export default function Doctors() {
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
            Doctors
          </Typography>

          <Typography color="text.secondary">
            Manage doctors and hospital assignments.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: 3,
          }}
        >
          Add Doctor
        </Button>
      </Box>

      <Grid container spacing={3}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
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
              <Box
                display="flex"
                alignItems="center"
                gap={2}
                mb={2}
              >
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "#1565C0",
                  }}
                >
                  <MedicalServicesIcon />
                </Avatar>

                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    {doctor.name}
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    {doctor.specialization}
                  </Typography>
                </Box>
              </Box>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
              >
                <LocalHospitalIcon color="primary" />
                {doctor.hospital}
              </Typography>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={2}
              >
                <PhoneIcon color="success" />
                {doctor.phone}
              </Typography>

              <Chip
                label={doctor.status}
                color={
                  doctor.status === "Available"
                    ? "success"
                    : "warning"
                }
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
}