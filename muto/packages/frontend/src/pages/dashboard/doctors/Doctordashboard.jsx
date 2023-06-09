import React from "react";
import ReactCalendar from "../../../components/Calendar";

export default function DoctorDashboard() {
  return (
    <>
    <h3 className="text-primary">DOCTOR</h3>
    <br />
      <div className="row">
        <div className="col">
          <a className="card-link" href="/prescriptions">
            <div
              className="card cardly text-dark  mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-md">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
              <p className="card-text">PRESCRIPTIONS</p>
              </div>
              
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/queue">
            <div
              className="card cardly text-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-md">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">QUEUE</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/vital-sign">
            <div
              className="card cardly text-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-md">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">VITAL-SIGNS</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/patients">
            <div
              className="card cardly text-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-md">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">PATIENTS</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a className="card-link" href="/appointments">
            <div
              className="card cardly text-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-md">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">APPOINTMENTS</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/bed-allotment">
            <div
              className="card cardly text-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-md">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">BED-ALLOTMENT</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/donor">
            <div
              className="card cardly text-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-md">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">BLOOD DONORS</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/dispatchedblood">
            <div
              className="card cardly text-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-md">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">DISPATCH BLOOD</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a className="card-link" href="/bloodbank">
            <div
              className="card cardly text-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
              <span className="icon-md">
                  <i className="mdi mdi-hospital-building menu-icon"></i>
                </span>
                <p className="card-text">BLOOD BANK</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row">
      
        
        
      </div>
      
    <hr className="myline"/>
      <div>
        <ReactCalendar />
      </div>
    </>
  );
}
