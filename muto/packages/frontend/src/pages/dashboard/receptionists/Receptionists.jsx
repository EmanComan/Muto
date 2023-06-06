import React from "react";
import { MyReceptionists } from "../../../components/receptionists/MyReceptionists";
import { AddReceptionists } from "../../../components/receptionists/AddReceptionists";


export default function Receptionists(){
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
                      Receptionists
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#academics"
                      role="tab"
                    >
                      Add Receptionist
                    </a>
                  </li>                  
                </ul>
              </div>
              <div className="tab-content tab-transparent-content">
            <MyReceptionists/>
            <AddReceptionists/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
