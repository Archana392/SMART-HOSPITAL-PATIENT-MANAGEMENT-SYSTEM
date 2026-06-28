import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#EAF4FF",
        py: 5,
      }}
    >
      <Paper
        sx={{
          width: 500,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" fontWeight={700} mb={3}>
          Registration
        </Typography>

        <TextField
          fullWidth
          label="Full Name"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Email"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Mobile Number"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

        <TextField
          select
          fullWidth
          label="Register As"
          margin="normal"
          defaultValue="Worker"
        >
          <MenuItem value="Worker">
            Worker
          </MenuItem>

          <MenuItem value="Doctor">
            Doctor
          </MenuItem>
        </TextField>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate("/")}
        >
          Register
        </Button>
      </Paper>
    </Box>
  );
}