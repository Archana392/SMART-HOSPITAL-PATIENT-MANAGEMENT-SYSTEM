import {
  Paper,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";

import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

const actions = [
  {
    title: "Register Worker",
    subtitle: "Create a new migrant worker profile",
    color: "#1976D2",
    icon: <PersonAddAltRoundedIcon sx={{ fontSize: 45 }} />,
  },
  {
    title: "Add Doctor",
    subtitle: "Register a healthcare professional",
    color: "#43A047",
    icon: <MedicalServicesRoundedIcon sx={{ fontSize: 45 }} />,
  },
  {
    title: "Medical Record",
    subtitle: "Upload diagnosis and reports",
    color: "#EF6C00",
    icon: <FolderSharedRoundedIcon sx={{ fontSize: 45 }} />,
  },
  {
    title: "Generate Report",
    subtitle: "Download PDF & Analytics",
    color: "#8E24AA",
    icon: <PictureAsPdfRoundedIcon sx={{ fontSize: 45 }} />,
  },
];

export default function QuickActions() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        boxShadow: "0 12px 30px rgba(0,0,0,.06)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ mb: 3 }}
      >
        ⚡ Quick Actions
      </Typography>

      <Grid container spacing={3}>
        {actions.map((action) => (
          <Grid
            size={{ xs: 12, sm: 6 }}
            key={action.title}
          >
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                bgcolor: "#F8FAFC",
                border: "1px solid #EEF2F7",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  bgcolor: `${action.color}20`,
                  color: action.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                {action.icon}
              </Box>

              <Typography
                variant="h6"
                fontWeight={700}
                gutterBottom
              >
                {action.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                {action.subtitle}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: action.color,
                  borderRadius: 3,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    bgcolor: action.color,
                    opacity: 0.9,
                  },
                }}
              >
                Open
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}