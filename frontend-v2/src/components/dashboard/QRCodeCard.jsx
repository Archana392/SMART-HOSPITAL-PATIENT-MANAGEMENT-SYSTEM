import {
  Paper,
  Typography,
  Box,
  Avatar,
  Stack,
  Chip,
  Divider,
  Button,
} from "@mui/material";

import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import BloodtypeRoundedIcon from "@mui/icons-material/BloodtypeRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export default function QRCodeCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        height: "100%",
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        background: "linear-gradient(135deg,#ffffff,#F6FAFF)",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        mb={3}
      >
        🆔 Digital Health ID
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
      >
        {/* Worker Details */}

        <Box textAlign="center">
          <Avatar
            src="/worker.png"
            sx={{
              width: 90,
              height: 90,
              bgcolor: "#1976D2",
              mx: "auto",
            }}
          >
            R
          </Avatar>

          <Typography mt={2} fontWeight={700}>
            Ramesh Kumar
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Worker ID : MW00125
          </Typography>

          <Chip
            label="Verified"
            color="success"
            size="small"
            sx={{ mt: 1 }}
          />
        </Box>

        {/* QR */}

        <Box flex={1} textAlign="center">
          <Paper
            elevation={0}
            sx={{
              width: 180,
              height: 180,
              mx: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#F3F8FD",
              borderRadius: 4,
            }}
          >
            <QrCode2RoundedIcon
              sx={{
                fontSize: 120,
                color: "#1976D2",
              }}
            />
          </Paper>

          <Typography
            mt={2}
            fontWeight={600}
          >
            Scan to view complete medical history
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Stack spacing={2}>
        <Typography>
          <BadgeRoundedIcon
            sx={{
              mr: 1,
              color: "#1976D2",
              verticalAlign: "middle",
            }}
          />
          Health ID :
          <strong> DHRMS-2026-00125</strong>
        </Typography>

        <Typography>
          <BloodtypeRoundedIcon
            sx={{
              mr: 1,
              color: "#E53935",
              verticalAlign: "middle",
            }}
          />
          Blood Group :
          <strong> B+</strong>
        </Typography>

        <Typography>
          <PhoneRoundedIcon
            sx={{
              mr: 1,
              color: "#43A047",
              verticalAlign: "middle",
            }}
          />
          Emergency :
          <strong> +91 9876543210</strong>
        </Typography>

        <Typography>
          <FavoriteRoundedIcon
            sx={{
              mr: 1,
              color: "#8E24AA",
              verticalAlign: "middle",
            }}
          />
          Health Status :
          <strong> Healthy</strong>
        </Typography>
      </Stack>

      <Button
        fullWidth
        variant="contained"
        startIcon={<DownloadRoundedIcon />}
        sx={{
          mt: 4,
          py: 1.5,
          borderRadius: 3,
          textTransform: "none",
          fontWeight: 700,
        }}
      >
        Download Health Card
      </Button>
    </Paper>
  );
}