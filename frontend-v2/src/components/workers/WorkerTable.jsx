import { useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  TextField,
  InputAdornment,
  Avatar,
  Box,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const workers = [
  {
    id: "MW001",
    name: "Ramesh Kumar",
    age: 29,
    gender: "Male",
    blood: "B+",
    hospital: "Apollo Hospital",
    location: "Chennai",
    status: "Healthy",
  },
  {
    id: "MW002",
    name: "Suresh Patel",
    age: 34,
    gender: "Male",
    blood: "O+",
    hospital: "AIIMS",
    location: "Delhi",
    status: "Under Treatment",
  },
  {
    id: "MW003",
    name: "Priya Devi",
    age: 26,
    gender: "Female",
    blood: "A+",
    hospital: "CMC Vellore",
    location: "Vellore",
    status: "Healthy",
  },
  {
    id: "MW004",
    name: "Rahul Singh",
    age: 31,
    gender: "Male",
    blood: "AB+",
    hospital: "Government Hospital",
    location: "Coimbatore",
    status: "Recovered",
  },
];

export default function WorkerTable() {
  const [search, setSearch] = useState("");

  const filteredWorkers = workers.filter(
    (worker) =>
      worker.name.toLowerCase().includes(search.toLowerCase()) ||
      worker.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 5,
        boxShadow: "0 12px 30px rgba(0,0,0,.06)",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        flexWrap="wrap"
        gap={2}
      >
        <Typography variant="h5" fontWeight={700}>
          Registered Workers
        </Typography>

        <TextField
          size="small"
          placeholder="Search by Name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ minWidth: 280 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "#F5F9FF" }}>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Worker</b></TableCell>
            <TableCell><b>Age</b></TableCell>
            <TableCell><b>Blood</b></TableCell>
            <TableCell><b>Location</b></TableCell>
            <TableCell><b>Hospital</b></TableCell>
            <TableCell><b>Status</b></TableCell>
            <TableCell align="center"><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredWorkers.map((worker) => (
            <TableRow
              key={worker.id}
              hover
              sx={{
                "&:hover": {
                  bgcolor: "#F8FBFF",
                },
              }}
            >
              <TableCell>{worker.id}</TableCell>

              <TableCell>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar sx={{ bgcolor: "#1565C0" }}>
                    {worker.name.charAt(0)}
                  </Avatar>

                  <Box>
                    <Typography fontWeight={600}>
                      {worker.name}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {worker.gender}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              <TableCell>{worker.age}</TableCell>

              <TableCell>
                <Chip
                  label={worker.blood}
                  color="primary"
                  size="small"
                />
              </TableCell>

              <TableCell>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                >
                  <LocationOnRoundedIcon
                    sx={{
                      color: "#1976D2",
                      fontSize: 18,
                    }}
                  />
                  {worker.location}
                </Box>
              </TableCell>

              <TableCell>{worker.hospital}</TableCell>

              <TableCell>
                <Chip
                  label={worker.status}
                  size="small"
                  color={
                    worker.status === "Healthy"
                      ? "success"
                      : worker.status === "Recovered"
                      ? "primary"
                      : "warning"
                  }
                />
              </TableCell>

              <TableCell align="center">
                <Tooltip title="View Profile">
                  <IconButton color="primary">
                    <VisibilityRoundedIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="QR Card">
                  <IconButton color="success">
                    <QrCode2RoundedIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Edit">
                  <IconButton color="warning">
                    <EditRoundedIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton color="error">
                    <DeleteRoundedIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}