import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Workers from "./pages/Workers/Workers";
import Doctors from "./pages/Doctors/Doctors";
import MedicalRecords from "./pages/MedicalRecords/MedicalRecords";
import Hospitals from "./pages/Hospitals/Hospitals";
import Reports from "./pages/Reports/Reports";
import Vaccination from "./pages/Vaccination/Vaccination";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/workers" element={<Workers />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/records" element={<MedicalRecords />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/vaccination" element={<Vaccination />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}