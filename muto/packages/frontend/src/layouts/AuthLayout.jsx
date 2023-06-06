import { Outlet } from "react-router-dom";
// import Logo from "../assets/images/BCK.jpeg";
import { GuestGuard } from "../components/authentication/guest-guard";

export default function AuthLayout() {
  return (
    <GuestGuard>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo container ml-5">
                  {/* {<img src={Logo} alt="img" />} */}
                  </div>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuestGuard>
  );
}
