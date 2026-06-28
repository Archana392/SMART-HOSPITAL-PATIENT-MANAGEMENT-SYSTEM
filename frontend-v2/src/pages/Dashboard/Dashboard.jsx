import { Box } from "@mui/material";

import MainLayout from "../../layouts/MainLayout";

import Hero from "../../components/dashboard/Hero";
import Charts from "../../components/dashboard/Charts";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import EmergencyAlerts from "../../components/dashboard/EmergencyAlerts";
import UpcomingVaccination from "../../components/dashboard/UpcomingVaccination";
import AIAssistant from "../../components/dashboard/AIAssistant";
import QRCodeCard from "../../components/dashboard/QRCodeCard";
import HealthSummary from "../../components/dashboard/HealthSummary";

export default function Dashboard() {
  return (
    <MainLayout>

      <Hero />

      <Box mt={4}>
        <Charts />
      </Box>

      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        <AIAssistant />
        <EmergencyAlerts />
      </Box>

      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        <QRCodeCard />
        <QuickActions />
      </Box>

      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        <RecentActivity />
        <UpcomingVaccination />
      </Box>

      <Box mt={4}>
        <HealthSummary />
      </Box>

    </MainLayout>
  );
}