import React from "react";
export const ProfileMenu = () => {
 
  return (
    <li class="nav-item nav-profile dropdown">
    <a class="nav-link dropdown-toggle" id="profileDropdown" href="#/" data-toggle="dropdown" aria-expanded="false">
      <div class="nav-profile-img">
        <img src="../../assets/images/faces/face28.png" alt="imag"/>
      </div>
      <div class="nav-profile-text">
        <p class="mb-1 text-black">Eman Coman</p>
      </div>
    </a>
    <div class="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="profileDropdown" data-x-placement="bottom-end">
      <div class="p-3 text-center bg-coman">
        <img class="img-avatar img-avatar48 img-avatar-thumb" src="../../assets/images/faces/face28.png" alt=""/>
      </div>
      <div class="p-2">
        <h5 class="dropdown-header text-uppercase pl-2 text-dark">User Options</h5>
        <a class="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#/">
          <span>Inbox</span>
          <span class="p-0">
            <span class="badge badge-primary">3</span>
            <i class="mdi mdi-email-open-outline ml-1"></i>
          </span>
        </a>
        <a class="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#/">
          <span>Profile</span>
          <span class="p-0">
            <span class="badge badge-success">1</span>
            <i class="mdi mdi-account-outline ml-1"></i>
          </span>
        </a>
        <a class="dropdown-item py-1 d-flex align-items-center justify-content-between" href="/">
          <span>Settings</span>
          <i class="mdi mdi-settings"></i>
        </a>
        <div role="separator" class="dropdown-divider"></div>
        <h5 class="dropdown-header text-uppercase  pl-2 text-dark mt-2">Actions</h5>
        <a class="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#/">
          <span>Lock Account</span>
          <i class="mdi mdi-lock ml-1"></i>
        </a>
        <a class="dropdown-item py-1 d-flex align-items-center justify-content-between" href="#/">
          <span>Log Out</span>
          <i class="mdi mdi-logout ml-1"></i>
        </a>
      </div>
    </div>
  </li>
  );
};
