import {
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
  Chip,
  Divider,
  Stack,
  TextField,
} from "@mui/material";

import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const suggestions = [
  "Show diabetic workers",
  "Pending vaccinations",
  "Emergency cases",
  "Generate health report",
  "High risk workers",
  "Nearest hospital",
];

export default function AIAssistant() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        height: "100%",
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
      }}
    >
      {/* Header */}

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <Avatar
          sx={{
            bgcolor: "#1976D2",
            width: 56,
            height: 56,
          }}
        >
          <SmartToyRoundedIcon />
        </Avatar>

        <Box>
          <Typography
            variant="h6"
            fontWeight={700}
          >
            AI Health Assistant
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Powered by Artificial Intelligence
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 3 }} />

      {/* AI Response */}

      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          borderRadius: 4,
          bgcolor: "#F4F8FC",
          border: "1px solid #E5E7EB",
        }}
      >
        <Typography
          fontWeight={700}
          gutterBottom
        >
          🤖 AI Response
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.8,
          }}
        >
          Hello Administrator 👋
          <br />
          <br />
          I can help you monitor worker health,
          identify high-risk patients,
          analyze vaccination coverage,
          generate reports,
          locate nearby hospitals,
          and summarize digital medical records instantly.
        </Typography>
      </Paper>

      {/* Suggestions */}

      <Typography
        mt={3}
        mb={2}
        fontWeight={700}
      >
        Suggested Questions
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{
          flexWrap: "wrap",
        }}
      >
        {suggestions.map((item) => (
          <Chip
            key={item}
            clickable
            icon={<AutoAwesomeRoundedIcon />}
            label={item}
            sx={{
              borderRadius: 3,
              mb: 1,
            }}
          />
        ))}
      </Stack>

      {/* Input */}

      <Box mt={3}>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="Ask AI about worker health, hospitals, vaccinations..."
        />
      </Box>

      {/* Button */}

      <Button
        fullWidth
        variant="contained"
        startIcon={<PsychologyRoundedIcon />}
        endIcon={<SendRoundedIcon />}
        sx={{
          mt: 3,
          py: 1.5,
          borderRadius: 3,
          textTransform: "none",
          fontWeight: 700,
        }}
      >
        Ask AI Assistant
      </Button>
    </Paper>
  );
}