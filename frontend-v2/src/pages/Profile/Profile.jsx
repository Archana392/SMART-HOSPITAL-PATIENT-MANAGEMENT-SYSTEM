import MainLayout from "../../layouts/MainLayout";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BadgeIcon from "@mui/icons-material/Badge";
import BusinessIcon from "@mui/icons-material/Business";

export default function Profile() {
  return (
    <MainLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Administrator Profile
      </Typography>

      <Grid container spacing={3}>
        {/* Left Card */}

        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 4,
              textAlign: "center",
            }}
          >
            <Avatar
              sx={{
                width: 120,
                height: 120,
                mx: "auto",
                mb: 2,
                bgcolor: "#1565C0",
                fontSize: 42,
              }}
            >
              A
            </Avatar>

            <Typography
              variant="h5"
              fontWeight="bold"
            >
              Administrator
            </Typography>

            <Typography
              color="text.secondary"
              mb={2}
            >
              Digital Health Record Management System
            </Typography>

            <Chip
              label="System Administrator"
              color="primary"
            />

            <Button
              fullWidth
              sx={{ mt: 3 }}
              variant="contained"
              startIcon={<EditIcon />}
            >
              Edit Profile
            </Button>
          </Paper>
        </Grid>

        {/* Right Card */}

        <Grid item xs={12} md={8}>
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
              Personal Information
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack spacing={3}>
              <Box display="flex" gap={2}>
                <BadgeIcon color="primary" />
                <Typography>
                  Name : Administrator
                </Typography>
              </Box>

              <Box display="flex" gap={2}>
                <EmailIcon color="error" />
                <Typography>
                  admin@digitalhealth.com
                </Typography>
              </Box>

              <Box display="flex" gap={2}>
                <PhoneIcon color="success" />
                <Typography>
                  +91 9876543210
                </Typography>
              </Box>

              <Box display="flex" gap={2}>
                <BusinessIcon color="secondary" />
                <Typography>
                  Digital Health Record Management System
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
            >
              About
            </Typography>

            <Typography color="text.secondary">
              This administrator manages workers, doctors,
              hospitals, vaccinations and medical records for
              migrant workers using the Digital Health Record
              Management System.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}