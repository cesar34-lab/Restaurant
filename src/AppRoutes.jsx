// src/routes.jsx
import { Routes, Route, Form } from "react-router-dom";
import App from "./App";
import Login from "./views/login";
import Register from "./views/Register";
import CustomerDashboard from "./views/CustomerDashboard";
import RealizarReserva from "./views/RealizarReserva";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={< Register/>}/>
      <Route path="/CustomerDashboard" element={ <CustomerDashboard />}/>
      <Route path="/RealizarReserva" element= { <RealizarReserva/>}/>
    </Routes>
  );
};

export default AppRoutes;
