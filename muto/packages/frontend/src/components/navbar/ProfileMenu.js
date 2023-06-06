import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export const ProfileMenu = () => {
  const { user, logout } = useAuth()
  console.log('user', user);
const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/auth/login')
      window.location.reload(false);
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <li className="nav-item nav-profile dropdown">
    <a className="nav-link dropdown-toggle" id="profileDropdown" href="#/" data-toggle="dropdown" aria-expanded="false">
      <div className="nav-profile-img">
        <img src="../../assets/images/faces/face28.png" alt="imag"/>
      </div>
      <div className="nav-profile-text">
        <p className="mb-1 text-black">Eman Coman</p>
      </div>
    </a>
    <div className="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="profileDropdown" data-x-placement="bottom-end">
      <div className="p-3 text-center bg-coman">
        <img className="img-avatar img-avatar48 img-avatar-thumb" src="../../assets/images/faces/face28.png" alt=""/>
      </div>
      <div className="p-2">
        <h5 className="dropdown-header text-uppercase pl-2 text-dark">User Options</h5>
        <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#/">
          <span>Inbox</span>
          <span className="p-0">
            <span className="badge badge-primary">3</span>
            <i className="mdi mdi-email-open-outline ml-1"></i>
          </span>
        </a>
        <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#/">
          <span>Profile</span>
          <span className="p-0">
            <span className="badge badge-success">1</span>
            <i className="mdi mdi-account-outline ml-1"></i>
          </span>
        </a>
        <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="/">
          <span>Settings</span>
          <i className="mdi mdi-settings"></i>
        </a>
        <div role="separator" className="dropdown-divider"></div>
        <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">Actions</h5>
        <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#/">
          <span>Lock Account</span>
          <i className="mdi mdi-lock ml-1"></i>
        </a>
        <button className="dropdown-item py-1 d-flex align-items-center justify-content-between"
            onClick={handleLogout}>
        <a className="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#/">
          <span>Log Out</span>
          <i className="mdi mdi-logout ml-1"></i>
        </a>
        </button>
      </div>
    </div>
  </li>
  );
};
