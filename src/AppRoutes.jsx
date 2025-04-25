// src/routes.jsx
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./views/login";
import Register from "./views/Register";
import CustomerDashboard from "./views/CustomerDashboard";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={< Register/>}/>
      <Route path="/CustomerDashboard" element={ <CustomerDashboard />}/>
    </Routes>
  );
};

export default AppRoutes;
