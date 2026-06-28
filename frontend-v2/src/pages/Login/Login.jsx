import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#EAF4FF",
      }}
    >
      <Paper
        sx={{
          width: 420,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" fontWeight={700} mb={1}>
          DHRMS
        </Typography>

        <Typography mb={3}>
          Digital Health Record Management System
        </Typography>

        <TextField
          fullWidth
          label="Email"
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
          label="Login As"
          margin="normal"
          defaultValue="Administrator"
        >
          <MenuItem value="Administrator">
            Administrator
          </MenuItem>

          <MenuItem value="Doctor">
            Doctor
          </MenuItem>

          <MenuItem value="Worker">
            Worker
          </MenuItem>
        </TextField>

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate("/dashboard")}
        >
          Login
        </Button>

        <Button
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
      </Paper>
    </Box>
  );
}