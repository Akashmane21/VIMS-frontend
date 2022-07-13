import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './App'
import './index.css'

import Login from "./AuthPages/UserLogin";
import UserRegister from "./AuthPages/UserRegister";
import AdminRegister from "./AuthPages/AdminRegister";
import AdminLogin from "./AuthPages/AdminLogin";
import Admin_Dashboard from "./AdminDashboardPages/Admin_Dashboard";
import User_Dashboard from "./UserDashboard/User_Dashboard";
import Manage_Policy from "./AdminDashboardPages/Manage_policy";
import Insurance_claim from "./AdminDashboardPages/Insurance_claim";
import New_policy from "./UserDashboard/New_policy";
import Claim_Status from "./UserDashboard/Clam_status";
import Lodge_claim from "./UserDashboard/Lodge_claim";
import Payment from "./UserDashboard/Payment";
import Renew_policy from "./UserDashboard/Renew_policy";
import Report_policy from "./UserDashboard/Report_policy";
import Add_Policies from "./AdminDashboardPages/Add_Policies";
import Add_Vehicle from "./AdminDashboardPages/Add_Vehicle";
import GlobaldataProider from "./ContextDB/Context"









export default function App() {
  return (
    <GlobaldataProider>

    <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Home />} />

         <Route path="/UserLogin" element={<Login />} />
         <Route path="/UserRegister" element={<UserRegister />} />
         
         <Route path="/User_Dashboard" element={<User_Dashboard />} />
         <Route path="/New_policy" element={<New_policy />} />
         <Route path="/Claim_Status" element={<Claim_Status />} />
         <Route path="/Payment" element={<Payment />} />
         <Route path="/Lodge_claim" element={<Lodge_claim />} />
         <Route path="/Report_policy" element={<Report_policy />} />
         <Route path="/Renew_policy" element={<Renew_policy />} />


         <Route path="/AdminRegister" element={<AdminRegister />} />
         <Route path="/AdminLogin" element={<AdminLogin />} />
         <Route path="/Admin_Dashboard" element={<Admin_Dashboard />} />
         <Route path="/Manage_Policy" element={<Manage_Policy />} />
         <Route path="/Insurance_claim" element={<Insurance_claim />} />
         <Route path="/Add_Policies" element={<Add_Policies />} />
         <Route path="/Add_Vehicle" element={<Add_Vehicle />} />




      </Routes>
    </BrowserRouter>
    </GlobaldataProider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security