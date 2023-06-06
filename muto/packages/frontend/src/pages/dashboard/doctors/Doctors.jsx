import React from "react";
import { AddDoctors } from "../../../components/doctors/AddDoctors";
import { MyDoctors } from "../../../components/doctors/MyDoctors";


export default function Doctors(){
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
                      Doctors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#academics"
                      role="tab"
                    >
                      Add Doctor
                    </a>
                  </li>                  
                </ul>
              </div>
              <div className="tab-content tab-transparent-content">
               <AddDoctors/>
               <MyDoctors/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
