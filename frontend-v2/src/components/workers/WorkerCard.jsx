import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Stack,
  Divider,
  Box,
  Button,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import PhoneIcon from "@mui/icons-material/Phone";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WorkerCard({
  worker = {
    id: "MW001",
    name: "Ramesh Kumar",
    age: 29,
    gender: "Male",
    blood: "B+",
    phone: "+91 9876543210",
    hospital: "Apollo Hospital",
    status: "Healthy",
  },
}) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        transition: ".3s",
        "&:hover": {
          transform: "translateY(-6px)",
        },
      }}
    >
      <CardContent>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Avatar
            sx={{
              width: 65,
              height: 65,
              bgcolor: "#1565C0",
              fontSize: 28,
            }}
          >
            {worker.name.charAt(0)}
          </Avatar>

          <Box flex={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {worker.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Worker ID : {worker.id}
            </Typography>
          </Box>

          <Chip
            label={worker.status}
            color={
              worker.status === "Healthy"
                ? "success"
                : worker.status === "Recovered"
                ? "primary"
                : "warning"
            }
          />
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>

          <Stack direction="row" spacing={1}>
            <PersonIcon color="primary" />
            <Typography>
              {worker.age} Years • {worker.gender}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <BloodtypeIcon color="error" />
            <Typography>
              Blood Group : {worker.blood}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <PhoneIcon color="success" />
            <Typography>{worker.phone}</Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <LocalHospitalIcon color="secondary" />
            <Typography>{worker.hospital}</Typography>
          </Stack>

        </Stack>

        <Button
          fullWidth
          variant="contained"
          startIcon={<VisibilityIcon />}
          sx={{
            mt: 3,
            borderRadius: 3,
          }}
        >
          View Complete Profile
        </Button>

      </CardContent>
    </Card>
  );
}