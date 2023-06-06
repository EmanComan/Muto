import React from "react";
import { useAuth } from "../../hooks/use-auth";
import {
  ADMIN,
  DOCTOR,
  NURSE,
  ACCOUNTANT,
  RECEPTIONIST,
  LABOURATORIST,
  PHARMACIST,
} from "../../utils/roles";

export const Sidebar = () => {
  const { user } = useAuth();
  const role = user.Role;
  
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <hr />
        {role === ADMIN && (
          <>
            <li className="vite vite-link">
              <a className="nav-link" href="/">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <span className="vite-title">Dashboard</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/departments">
                <span className="icon-bg">
                  <i className="mdi mdi-account-multiple menu-icon"></i>
                </span>
                <span className="vite-title">Departments</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/doctors">
                <span className="icon-bg">
                  <i className="mdi mdi-human-male menu-icon"></i>
                </span>
                <span className="vite-title">Doctors</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/nurses">
                <span className="icon-bg">
                  <i className="mdi mdi-human-female menu-icon"></i>
                </span>

                <span className="vite-title">Nurses</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/patients">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital menu-icon"></i>
                </span>

                <span className="vite-title">Patients</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/pharmacists">
                <span className="icon-bg">
                  <i className="mdi mdi-pharmacy menu-icon"></i>
                </span>

                <span className="vite-title">Pharmacists</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/labouratorists">
                <span className="icon-bg">
                  <i className="mdi mdi-heart-pulse menu-icon"></i>
                </span>

                <span className="vite-title">Laboratorists</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/accountants">
                <span className="icon-bg">
                  <i className="mdi mdi-cash-multiple menu-icon"></i>
                </span>

                <span className="vite-title">Accountant</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/receptionists">
                <span className="icon-bg">
                  <i className="mdi mdi-account-network menu-icon"></i>
                </span>

                <span className="vite-title">Receptionists</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/operations">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Operations</span>
              </a>
            </li>
          </>
        )}
        {role === DOCTOR && (
          <>
            <li className="vite vite-link">
              <a className="nav-link" href="/">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <span className="vite-title">Dashboard</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/prescriptions">
                <span className="icon-bg">
                  <i className="mdi mdi-human-male menu-icon"></i>
                </span>
                <span className="vite-title">Prescriptions</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/queue">
                <span className="icon-bg">
                  <i className="mdi mdi-human-female menu-icon"></i>
                </span>

                <span className="vite-title">Queue</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/vital-sign">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital menu-icon"></i>
                </span>

                <span className="vite-title">Vital Signs</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/patients">
                <span className="icon-bg">
                  <i className="mdi mdi-pharmacy menu-icon"></i>
                </span>

                <span className="vite-title">Patients</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/appointments">
                <span className="icon-bg">
                  <i className="mdi mdi-heart-pulse menu-icon"></i>
                </span>

                <span className="vite-title">Appointments</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/bed-allotment">
                <span className="icon-bg">
                  <i className="mdi mdi-cash-multiple menu-icon"></i>
                </span>

                <span className="vite-title">Bed Allotment</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/donor">
                <span className="icon-bg">
                  <i className="mdi mdi-account-network menu-icon"></i>
                </span>

                <span className="vite-title">Blood Donor</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/dispatchedblood">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Dispatch Blood</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/bloodbank">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Blood Bank</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/operation">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Operation Report</span>
              </a>
            </li>
          </>
        )}

        {role === NURSE && (
          <>
            <li className="vite vite-link">
              <a className="nav-link" href="/">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <span className="vite-title">Dashboard</span>
              </a>
            </li>
            <br />
         
           
            <li className="vite">
              <a className="nav-link" href="/vital-sign">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital menu-icon"></i>
                </span>

                <span className="vite-title">Vital Signs</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/patients">
                <span className="icon-bg">
                  <i className="mdi mdi-pharmacy menu-icon"></i>
                </span>

                <span className="vite-title">Patients</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/bed-allotment">
                <span className="icon-bg">
                  <i className="mdi mdi-cash-multiple menu-icon"></i>
                </span>

                <span className="vite-title">Bed Allotment</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/beds">
                <span className="icon-bg">
                  <i className="mdi mdi-cash-multiple menu-icon"></i>
                </span>

                <span className="vite-title">Add Bed</span>
              </a>
            </li>{" "}
            <br/>
            <li className="vite">
              <a className="nav-link" href="/donor">
                <span className="icon-bg">
                  <i className="mdi mdi-account-network menu-icon"></i>
                </span>

                <span className="vite-title">Blood Donor</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/dispatchedblood">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Dispatch Blood</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/bloodbank">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Blood Bank</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/operation">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Operation Report</span>
              </a>
            </li>
          </>
        )}
        {role === PHARMACIST && (
          <>
          <li className="vite vite-link">
              <a className="nav-link" href="/">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <span className="vite-title">Dashboard</span>
              </a>
            </li>
            <br />
         
            <li className="vite">
              <a className="nav-link" href="/medications">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital menu-icon"></i>
                </span>

                <span className="vite-title">Provide Medication</span>
              </a>
            </li>
            <br/>
            <li className="vite">
              <a className="nav-link" href="/patients">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital menu-icon"></i>
                </span>

                <span className="vite-title">Patients</span>
              </a>
            </li>
          </>
        )}

        {role === LABOURATORIST && (
          <>
          <li className="vite vite-link">
              <a className="nav-link" href="/">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <span className="vite-title">Dashboard</span>
              </a>
            </li>
            <br />
          <li className="vite">
              <a className="nav-link" href="/donor">
                <span className="icon-bg">
                  <i className="mdi mdi-account-network menu-icon"></i>
                </span>

                <span className="vite-title">Blood Donor</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/dispatchedblood">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Dispatch Blood</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/bloodbank">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Blood Bank</span>
              </a>
            </li>
          </>
        )}
        {role === ACCOUNTANT && (
          <>
          <li className="vite vite-link">
              <a className="nav-link" href="/">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <span className="vite-title">Dashboard</span>
              </a>
            </li>
            <br />
          <li className="vite">
              <a className="nav-link" href="/payments">
                <span className="icon-bg">
                  <i className="mdi mdi-account-network menu-icon"></i>
                </span>

                <span className="vite-title">Take Payments</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/invoices">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">New Invoice</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/viewpayments">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">View Payments</span>
              </a>
            </li>
          </>
        )}

        {role === RECEPTIONIST && (
          <>
          <li className="vite vite-link">
              <a className="nav-link" href="/">
                <span className="icon-bg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <span className="vite-title">Dashboard</span>
              </a>
            </li>
            <br />
          <li className="vite">
              <a className="nav-link" href="/patients">
                <span className="icon-bg">
                  <i className="mdi mdi-account-network menu-icon"></i>
                </span>

                <span className="vite-title">Patients</span>
              </a>
            </li>{" "}
            <br />
            <li className="vite">
              <a className="nav-link" href="/queue">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Queue</span>
              </a>
            </li>
            <br />
            <li className="vite">
              <a className="nav-link" href="/appointments">
                <span className="icon-bg">
                  <i className="mdi mdi-stethoscope menu-icon"></i>
                </span>

                <span className="vite-title">Appointments</span>
              </a>
            </li>
          </>
        )}
        <br />
        <br />
        <li className="nav-item report-link">
          <a className="nav-link" href="/reports">
            <span className="menu-title">Reports</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
