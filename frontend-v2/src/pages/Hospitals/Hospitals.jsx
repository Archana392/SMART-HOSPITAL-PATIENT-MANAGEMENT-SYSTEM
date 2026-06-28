import MainLayout from "../../layouts/MainLayout";

import {
  Box,
  Typography,
  Button,
  Paper,
  Grid,
  Chip,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";

const hospitals = [
  {
    name: "Apollo Hospital",
    city: "Chennai",
    beds: 320,
    phone: "+91 9876543210",
    status: "Available",
  },
  {
    name: "AIIMS",
    city: "New Delhi",
    beds: 520,
    phone: "+91 9988776655",
    status: "Busy",
  },
  {
    name: "CMC Vellore",
    city: "Vellore",
    beds: 420,
    phone: "+91 9123456789",
    status: "Available",
  },
  {
    name: "Government Hospital",
    city: "Coimbatore",
    beds: 210,
    phone: "+91 9012345678",
    status: "Available",
  },
];

export default function Hospitals() {
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
            Hospitals
          </Typography>

          <Typography color="text.secondary">
            Partner hospitals connected to the Digital Health System.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add Hospital
        </Button>
      </Box>

      <Grid container spacing={3}>
        {hospitals.map((hospital, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
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
                {hospital.name}
              </Typography>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
              >
                <LocationOnIcon color="error" />
                {hospital.city}
              </Typography>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={1}
              >
                <PhoneIcon color="success" />
                {hospital.phone}
              </Typography>

              <Typography
                display="flex"
                alignItems="center"
                gap={1}
                mb={2}
              >
                <BedIcon color="primary" />
                {hospital.beds} Beds Available
              </Typography>

              <Chip
                label={hospital.status}
                color={
                  hospital.status === "Available"
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