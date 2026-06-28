import MainLayout from "../../layouts/MainLayout";

import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";

import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import GroupsIcon from "@mui/icons-material/Groups";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const reports = [
  {
    title: "Workers Report",
    total: 1250,
    icon: <GroupsIcon sx={{ fontSize: 45 }} />,
    color: "#1976D2",
  },
  {
    title: "Doctors Report",
    total: 68,
    icon: <MedicalServicesIcon sx={{ fontSize: 45 }} />,
    color: "#2E7D32",
  },
  {
    title: "Hospitals",
    total: 15,
    icon: <LocalHospitalIcon sx={{ fontSize: 45 }} />,
    color: "#8E24AA",
  },
  {
    title: "Vaccinations",
    total: 850,
    icon: <VaccinesIcon sx={{ fontSize: 45 }} />,
    color: "#EF6C00",
  },
];

export default function Reports() {
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
            Reports
          </Typography>

          <Typography color="text.secondary">
            Generate healthcare reports and download summaries.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<PictureAsPdfIcon />}
        >
          Generate Report
        </Button>
      </Box>

      <Grid container spacing={3}>
        {reports.map((report) => (
          <Grid item xs={12} md={6} lg={3} key={report.title}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 4,
                textAlign: "center",
                transition: ".3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box
                sx={{
                  color: report.color,
                  mb: 2,
                }}
              >
                {report.icon}
              </Box>

              <Typography
                variant="h5"
                fontWeight="bold"
              >
                {report.total}
              </Typography>

              <Typography
                color="text.secondary"
                mb={3}
              >
                {report.title}
              </Typography>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<DownloadIcon />}
              >
                Download
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        sx={{
          mt: 5,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
        >
          Report Summary
        </Typography>

        <Typography color="text.secondary">
          • Total Registered Workers: <b>1250</b>
          <br />
          • Total Doctors: <b>68</b>
          <br />
          • Total Hospitals: <b>15</b>
          <br />
          • Medical Records: <b>9824</b>
          <br />
          • Vaccinations Completed: <b>850</b>
          <br />
          • Active Cases: <b>34</b>
        </Typography>
      </Paper>
    </MainLayout>
  );
}