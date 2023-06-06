import React from "react";
import { ProfileMenu } from "./ProfileMenu";
import { NotificationMenu } from "./NotificationMenu";
import { SearchInput } from "./SearchInput";
import { ReportsMenu } from "./ReportsMenu";
import { ProjectsMenu } from "./ProjectsMenu";

export const Navbar = () => {
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a className="navbar-brand brand-logo" href="../../index.html">
          <img src="../../assets/images/logo.svg" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="../../index.html">
          <img src="../../assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center text-dark bt-toggle"
          type="button"
          data-toggle="minimize"
        >
          <span className="mdi mdi-menu"></span>
        </button>
      

        <SearchInput />

        <ul className="navbar-nav navbar-nav-right text-dark">
          <ReportsMenu />

          <ProjectsMenu />

          <ProfileMenu />

          <NotificationMenu />
        </ul>
        
      </div>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>
          </button>
    </nav>

  );
};
