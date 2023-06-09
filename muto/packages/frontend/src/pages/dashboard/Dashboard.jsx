import React from "react";
import ReactCalendar from "../../components/Calendar";

export default function Dashboard() {
  return (
    <>
      <h3 className="text-primary">ADMIN</h3>
      <br />
      <div className="row">
        <div className="col">
          <a className="card-link border-circle" href="/doctors">
            <div
              className="card cardly text-dark bg-success mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-lg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
              <p className="card-text">DOCTORS</p>
              </div>
              
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/nurses">
            <div
              className="card cardly text-dark bg-info mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-lg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">NURSES</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/patients">
            <div
              className="card cardly text-dark bg-primary mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-lg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">PATIENTS</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/departments">
            <div
              className="card cardly text-dark bg-warning mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-lg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">DEPARTMENTS</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a className="card-link" href="/pharmacists">
            <div
              className="card cardly text-dark bg-warning mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-lg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">PHARMACISTS</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/labouratorists">
            <div
              className="card cardly text-dark bg-primary mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-lg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">LABOURATORISTS</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/accountants">
            <div
              className="card cardly text-dark bg-info mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-lg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">ACCOUNTANTS</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/receptionists">
            <div
              className="card cardly text-dark bg-success mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-lg">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">RECEPTIONISTS</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      
    <hr className="myline"/>
      <div>
        <ReactCalendar />
      </div>
    </>
  );
}
