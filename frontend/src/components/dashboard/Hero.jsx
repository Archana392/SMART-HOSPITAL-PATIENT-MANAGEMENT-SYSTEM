import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { FaUserPlus, FaFileMedical } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        p: 5,
        borderRadius: 5,
        background:
          "linear-gradient(135deg,#1565C0 0%,#42A5F5 100%)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={7}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
          >
            Digital Health Record
            <br />
            Management System
          </Typography>

          <Typography
            variant="h6"
            sx={{
              opacity: 0.9,
              mb: 4,
              maxWidth: 550,
            }}
          >
            Securely manage migrant workers' medical history,
            doctor consultations, hospitals, vaccinations,
            and digital health records from one platform.
          </Typography>

          <Box display="flex" gap={2}>
            <Button
              variant="contained"
              size="large"
              startIcon={<FaUserPlus />}
              sx={{
                bgcolor: "#fff",
                color: "#1565C0",
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#F4F8FC",
                },
              }}
            >
              Register Worker
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<FaFileMedical />}
              sx={{
                borderColor: "#fff",
                color: "#fff",
                "&:hover": {
                  borderColor: "#fff",
                  background: "rgba(255,255,255,.12)",
                },
              }}
            >
              View Records
            </Button>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80"
            alt="Healthcare"
            sx={{
              width: "100%",
              borderRadius: 4,
              boxShadow: "0 20px 40px rgba(0,0,0,.25)",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}