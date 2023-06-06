import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import {AuthGuard} from "../components/authentication/auth-guard"

export default function DashboardLayout() {
  return (
    <AuthGuard>
    <div className="container-scroller">
      <Navbar/>
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
    </AuthGuard>
  );
}
