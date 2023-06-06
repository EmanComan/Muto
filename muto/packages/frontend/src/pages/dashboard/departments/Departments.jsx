// import { AcademicsTab } from "../Academics";
// import { StudentOverview } from "../Overview";
import React from "react";
import { MyDepartments } from "../../../components/columnTabs/departments/MyDepartments";
import { AddDepartments } from "../../../components/columnTabs/departments/AddDepartments";

export default function Departments(){
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
                      Departments
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#academics"
                      role="tab"
                    >
                      Add Department
                    </a>
                  </li>                  
                </ul>
              </div>
              <div className="tab-content tab-transparent-content">
                <MyDepartments/>
                <AddDepartments/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
