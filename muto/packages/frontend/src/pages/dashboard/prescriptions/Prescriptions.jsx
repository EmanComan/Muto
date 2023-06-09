import React from "react";
import { MyPrescriptions } from "../../../components/prescriptions/MyPrescriptions";
import { AddPrescriptions } from "../../../components/prescriptions/AddPrescriptions";



export default function Prescriptions(){
  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className="d-sm-flex justify-content-between align-items-center transaparent-tab-border ">
                <ul className="nav nav-tabs tab-transparent" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#overview"
                      role="tab"
                    >
                      Prescriptions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#academics"
                      role="tab"
                    >
                      Add Prescription
                    </a>
                  </li>                  
                </ul>
              </div>
              <div className="tab-content tab-transparent-content">
              <MyPrescriptions/>
              <AddPrescriptions/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
