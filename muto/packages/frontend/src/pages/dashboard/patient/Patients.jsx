import React from "react";
import { AddPatients } from "../../../components/patients/AddPatients";
import { MyPatients } from "../../../components/patients/MyPatients";


export default function Patients(){
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
                      Patients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#academics"
                      role="tab"
                    >
                      Add Patient
                    </a>
                  </li>                  
                </ul>
              </div>
              <div className="tab-content tab-transparent-content">
              <MyPatients/>
              <AddPatients/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
