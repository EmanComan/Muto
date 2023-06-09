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
import { MyQueue } from "./components/Queuee/MyQueue";
import Prescriptions from "./pages/dashboard/prescriptions/Prescriptions";
import { MySigns } from "./components/signs/MySigns";
import Appointments from "./pages/dashboard/appointments/Appointments";
import BedAllotment from "./pages/dashboard/beds/BedAllotment";
import Donors from "./pages/dashboard/blood-donation/Donors";
import DispatchedBlood from "./pages/dashboard/dispatchedblood/DispatchedBlood";
import { BloodBank } from "./components/bloodBank";

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
    {
      path: "/patients",
      element: <Patients/>,
    },
    {
      path: "/queue",
      element: <MyQueue/>,
    },
    {
      path: "/prescriptions",
      element: <Prescriptions/>,
    },
    {
      path: "/vital-sign",
      element: <MySigns/>,
    },
    {
      path: "/appointments",
      element: <Appointments/>,
    },
    {
      path: "/bed-allotment",
      element: <BedAllotment/>,
    },
    {
      path: "/donor",
      element: <Donors/>,
    },
    {
      path: "/dispatchedblood",
      element: <DispatchedBlood/>,
    },
    {
      path: "/bloodbank",
      element: <BloodBank/>,
    },
    {
      path: "/operation",
      element: <Operations/>,
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
