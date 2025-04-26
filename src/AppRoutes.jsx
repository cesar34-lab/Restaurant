// src/routes.jsx
import { Routes, Route, Form } from "react-router-dom";
import App from "./App";
import Login from "./views/login";
import Register from "./views/Register";
import CustomerDashboard from "./views/CustomerDashboard";
import RealizarReserva from "./views/RealizarReserva";
import Historial from "./views/historial";
import AdminDashboard from "./views/adminDashboard";
import Reservations from "./views/Reservations";
import ManageSchedules from "./views/ManageSchedules";
import ManageTables from "./views/managetable";
import Logout from "./views/Logout";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={< Register/>}/>
      <Route path="/CustomerDashboard" element={ <CustomerDashboard />}/>
      <Route path="/RealizarReserva" element= { <RealizarReserva/>}/>
      <Route path="/historial" element={ <Historial />}/> 
      <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
      <Route path="/Reservations" element={<Reservations/>}/>
      <Route path="/ManageTables" element={<ManageTables/>}/>
      <Route path="/ManageSchedules" element={<ManageSchedules/>}/>
      <Route path="/Logout" element={<Logout/>}/>
    </Routes>
  );
};

export default AppRoutes;
