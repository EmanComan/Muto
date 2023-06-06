import { useRoutes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
// import { NurseDashboard } from "./pages/dashboard/NurseDasboard";
import Patientdashboard from "./pages/dashboard/patient/Patientdashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import { Unauthorized } from "./pages/auth/Unauthorized";
import { useAuth } from "./hooks/use-auth";
import { ADMIN, DOCTOR, PATIENT } from "./utils/roles";

import Dashboard from "./pages/dashboard/Dashboard";
import Departments from "./pages/dashboard/departments/Departments";
import Doctors from "./pages/dashboard/doctors/Doctors";
import Nurses from "./pages/dashboard/nurses/Nurses";
import Patients from "./pages/dashboard/patient/Patients";
import Pharmacists from "./pages/dashboard/pharmacists/Pharmacists";
import Labouratorists from "./pages/dashboard/labouratorists/Labouratorists";
import Accountants from "./pages/dashboard/accountants/Accountants";
import Receptionists from "./pages/dashboard/receptionists/Receptionists";
import Operations from "./pages/dashboard/operations/Operations";
import DoctorDashboard from "./pages/dashboard/doctors/Doctordashboard";

const Router = () => {
  const { user } = useAuth();

  const patientRoutes = [
    {
      path: "/",
      element: <Patientdashboard />,
    },
  ];

  const doctorRoutes = [
    {
      path: "/",
      element: <DoctorDashboard/>,
    },
  ];

  const adminRoutes = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/departments",
      element: <Departments />,
    },
    {
      path: "/doctors",
      element: <Doctors />,
    },
    {
      path: "/nurses",
      element: <Nurses />,
    },
    {
      path: "/patients",
      element: <Patients/>,
    },
    {
      path: "/pharmacists",
      element: <Pharmacists/>,
    },
    {
      path: "/labouratorists",
      element: <Labouratorists/>,
    },
    {
      path: "/accountants",
      element: <Accountants/>,
    },
    {
      path: "/receptionists",
      element: <Receptionists/>,
    },
    {
      path: "/operations",
      element: <Operations/>,
    },
    
  ];

  const nurseRoutes = [
    // {
    //   path: "/",
    //   element: <NurseDashboard />,
    // },
  ];
  return useRoutes([
    {
      element: <DashboardLayout />,
      children:
        user?.Role === PATIENT
          ? patientRoutes
          : user?.Role === DOCTOR
          ? doctorRoutes
          : user?.Role === ADMIN
          ? adminRoutes
          : nurseRoutes,
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/auth/login",
          element: <Login />,
        },
        {
          path: "/auth/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
  ]);
};

export default Router;
