import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
} from "@mui/material";

import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import MainLayout from "../../layouts/MainLayout";

const workers = [
  {
    id: "MW001",
    name: "Ramesh Kumar",
    age: 32,
    state: "Tamil Nadu",
    blood: "B+",
    status: "Healthy",
  },
  {
    id: "MW002",
    name: "Priya Devi",
    age: 28,
    state: "Kerala",
    blood: "O+",
    status: "Vaccinated",
  },
  {
    id: "MW003",
    name: "Rahul Singh",
    age: 35,
    state: "Uttar Pradesh",
    blood: "A+",
    status: "Healthy",
  },
  {
    id: "MW004",
    name: "Suresh Patel",
    age: 40,
    state: "Gujarat",
    blood: "AB+",
    status: "Critical",
  },
  {
    id: "MW005",
    name: "Anjali Sharma",
    age: 24,
    state: "Delhi",
    blood: "O-",
    status: "Healthy",
  },
  {
    id: "MW006",
    name: "Karthik",
    age: 30,
    state: "Tamil Nadu",
    blood: "A-",
    status: "Vaccinated",
  },
  {
    id: "MW007",
    name: "Meena",
    age: 26,
    state: "Karnataka",
    blood: "B-",
    status: "Healthy",
  },
  {
    id: "MW008",
    name: "Arun Kumar",
    age: 37,
    state: "Andhra Pradesh",
    blood: "O+",
    status: "Critical",
  },
];

export default function Workers() {
  return (
    <MainLayout>
      <Typography
        variant="h3"
        fontWeight={700}
        mb={3}
      >
        👷 Workers Management
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 5,
          boxShadow: "0 12px 30px rgba(0,0,0,.08)",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Registered Migrant Workers
            </Typography>

            <Typography color="text.secondary">
              Manage worker registration, health records and digital health IDs.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<PersonAddAltRoundedIcon />}
            sx={{
              borderRadius: 3,
              px: 3,
            }}
          >
            Register Worker
          </Button>
        </Box>

        <TableContainer>
          <Table>

            <TableHead>
              <TableRow
                sx={{
                  bgcolor: "#F5F7FA",
                }}
              >
                <TableCell>
                  <strong>Photo</strong>
                </TableCell>

                <TableCell>
                  <strong>Worker ID</strong>
                </TableCell>

                <TableCell>
                  <strong>Name</strong>
                </TableCell>

                <TableCell>
                  <strong>Age</strong>
                </TableCell>

                <TableCell>
                  <strong>State</strong>
                </TableCell>

                <TableCell>
                  <strong>Blood Group</strong>
                </TableCell>

                <TableCell>
                  <strong>Status</strong>
                </TableCell>

                <TableCell>
                  <strong>Action</strong>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {workers.map((worker) => (
                <TableRow
                  key={worker.id}
                  hover
                >
                  <TableCell>
                    <Avatar
                      sx={{
                        bgcolor: "#1976D2",
                      }}
                    >
                      {worker.name.charAt(0)}
                    </Avatar>
                  </TableCell>

                  <TableCell>{worker.id}</TableCell>

                  <TableCell>{worker.name}</TableCell>

                  <TableCell>{worker.age}</TableCell>

                  <TableCell>{worker.state}</TableCell>

                  <TableCell>{worker.blood}</TableCell>

                  <TableCell>
                    <Chip
                      label={worker.status}
                      color={
                        worker.status === "Healthy"
                          ? "success"
                          : worker.status === "Vaccinated"
                          ? "primary"
                          : "error"
                      }
                    />
                  </TableCell>

                  <TableCell>
                    <Button
                      size="small"
                      variant="outlined"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </Paper>
    </MainLayout>
  );
}