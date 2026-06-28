import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
} from "@mui/material";

import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import FolderSharedRoundedIcon from "@mui/icons-material/FolderSharedRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";

export default function Hero() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 5,
        borderRadius: 5,
        overflow: "hidden",
        background: "linear-gradient(135deg,#0D47A1,#1565C0,#42A5F5)",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.5fr 1fr",
          },
          gap: 4,
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}

        <Box>
          <Typography
            variant="h2"
            fontWeight={800}
            lineHeight={1.1}
          >
            Digital Health
            <br />
            Record
            <br />
            Management
            <br />
            System
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: 20,
              fontWeight: 600,
              color: "#BBDEFB",
            }}
          >
            For Migrant Workers Across India
          </Typography>

          <Typography
            sx={{
              mt: 3,
              maxWidth: 700,
              lineHeight: 1.8,
              fontSize: 20,
              opacity: 0.95,
            }}
          >
            Securely manage digital health records,
            vaccination history, emergency healthcare,
            AI-powered analytics, QR Health IDs and
            nationwide hospital connectivity under one
            unified platform.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            mt={5}
            useFlexGap
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              startIcon={<PersonAddAlt1RoundedIcon />}
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                bgcolor: "#fff",
                color: "#1565C0",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#F3F8FD",
                },
              }}
            >
              Register Worker
            </Button>

            <Button
              variant="contained"
              startIcon={<QrCode2RoundedIcon />}
              sx={{
                bgcolor: "#00C853",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#00B248",
                },
              }}
            >
              Scan QR Health ID
            </Button>

            <Button
              variant="outlined"
              startIcon={<FolderSharedRoundedIcon />}
              sx={{
                color: "#fff",
                borderColor: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,255,255,.12)",
                },
              }}
            >
              Medical Records
            </Button>
          </Stack>
        </Box>

        {/* RIGHT SIDE */}

        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 5,
            bgcolor: "rgba(255,255,255,.15)",
            backdropFilter: "blur(10px)",
            color: "#fff",
          }}
        >
          <HealthAndSafetyRoundedIcon
            sx={{
              fontSize: 80,
              mb: 2,
            }}
          />

          <Typography
            variant="h4"
            fontWeight={700}
            mb={3}
          >
            National Healthcare Status
          </Typography>

          <Typography sx={{ mb: 2 }}>
            👷 Registered Workers : <strong>1,250</strong>
          </Typography>

          <Typography sx={{ mb: 2 }}>
            👨‍⚕️ Doctors Available : <strong>68</strong>
          </Typography>

          <Typography sx={{ mb: 2 }}>
            🏥 Partner Hospitals : <strong>15</strong>
          </Typography>

          <Typography sx={{ mb: 2 }}>
            📄 Medical Records : <strong>9,824</strong>
          </Typography>

          <Typography>
            🟢 System Status : <strong>ONLINE</strong>
          </Typography>
        </Paper>
      </Box>
    </Paper>
  );
}