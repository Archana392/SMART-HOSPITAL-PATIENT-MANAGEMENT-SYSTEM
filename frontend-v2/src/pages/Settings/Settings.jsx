import MainLayout from "../../layouts/MainLayout";

import {
  Box,
  Typography,
  Paper,
  Grid,
  Switch,
  Divider,
  FormControlLabel,
  Button,
  TextField,
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";

export default function Settings() {
  return (
    <MainLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Settings
      </Typography>

      <Grid container spacing={3}>

        {/* System Settings */}

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              System Preferences
            </Typography>

            <Divider sx={{ my: 2 }} />

            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Enable Notifications"
            />

            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Enable Dark Mode"
            />

            <FormControlLabel
              control={<Switch />}
              label="Automatic Backup"
            />

            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Email Alerts"
            />

          </Paper>
        </Grid>

        {/* Hospital Details */}

        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              Hospital Information
            </Typography>

            <Divider sx={{ my: 2 }} />

            <TextField
              fullWidth
              label="Hospital Name"
              defaultValue="Digital Health Hospital"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Administrator"
              defaultValue="Admin"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Email"
              defaultValue="admin@digitalhealth.com"
              margin="normal"
            />

            <TextField
              fullWidth
              label="Contact Number"
              defaultValue="+91 9876543210"
              margin="normal"
            />

            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              sx={{
                mt: 3,
                borderRadius: 3,
              }}
            >
              Save Changes
            </Button>

          </Paper>
        </Grid>

      </Grid>

      <Box mt={4}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
          >
            About System
          </Typography>

          <Typography color="text.secondary">
            Digital Health Record Management System for Migrant Workers
            helps hospitals securely maintain workers' medical records,
            doctor consultations, vaccinations, prescriptions,
            laboratory reports and emergency medical history.
          </Typography>
        </Paper>
      </Box>

    </MainLayout>
  );
}