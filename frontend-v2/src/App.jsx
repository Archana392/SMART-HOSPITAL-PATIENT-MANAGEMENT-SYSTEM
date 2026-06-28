import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Workers from "./pages/Workers/Workers";
import Doctors from "./pages/Doctors/Doctors";
import MedicalRecords from "./pages/MedicalRecords/MedicalRecords";
import Hospitals from "./pages/Hospitals/Hospitals";
import Vaccination from "./pages/Vaccination/Vaccination";
import Reports from "./pages/Reports/Reports";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/workers" element={<Workers />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/records" element={<MedicalRecords />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/vaccination" element={<Vaccination />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}