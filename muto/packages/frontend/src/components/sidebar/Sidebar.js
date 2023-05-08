import React from "react";
import { Footer } from "../footer/Footer";
import { Datatable } from "../DataTable/DataTable";
export const Sidebar = () => {

  return (
    <div className="container-fluid page-body-wrapper slider closed">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
           <hr/>
            <li className="vite vite-link">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-hospital-building menu-icon"></i></span>
                <span className="vite-title">Dashboard</span>
              </a>
            </li>
            <br/>
            <li className="vite">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-account-multiple menu-icon"></i></span>
                <span className="vite-title">Departments</span>
                
              </a>
              
            </li>
            <br/>
            <li className="vite">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-human-male menu-icon"></i></span>
                <span className="vite-title">Doctors</span>
              </a>
            </li> <br/>
            <li className="vite">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-human-female menu-icon"></i></span>

                <span className="vite-title">Nurses</span>
              </a>
            </li> <br/>
            <li className="vite">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-hospital menu-icon"></i></span>

                <span className="vite-title">Patients</span>
              </a>
            </li> <br/>
            <li className="vite">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-pharmacy menu-icon"></i></span>

                <span className="vite-title">Pharmacists</span>
              </a>
            </li> <br/>
            <li className="vite">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-heart-pulse menu-icon"></i></span>
                
              <span className="vite-title">Laboratorists</span>
                
              </a>
          
            </li> <br/>
            <li className="vite">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-cash-multiple menu-icon"></i></span>

                <span className="vite-title">Accountant</span>
                
              </a>
          
            </li> <br/>
            <li className="vite">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-account-network menu-icon"></i></span>

                <span className="vite-title">Receptionists</span>
                
              </a>
          
            </li> <br/>
            <li className="vite">
              <a className="nav-link" href="/">
              <span class="icon-bg"><i class="mdi mdi-stethoscope menu-icon"></i></span>

                <span className="vite-title">Operations</span>
                
              </a>
          
            </li>
            <br/>
            <br/>
            <li className="nav-item report-link">
              <a className="nav-link" href="/">

                <span className="menu-title">Reports</span>
              </a>
            </li>
            <br/>
           
          </ul>
        </nav>
        <div className="main-panel">
          <Datatable/>
          <div className="content-wrapper">
          </div>
          <Footer/>
        </div>
      </div>
  );
};
