import React from "react";
import { AddBed } from "../../../components/Beds/AddBeds";
import { MyBeds } from "../../../components/Beds/MyBeds";


export default function BedAllotment() {
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
                      Bed Allotments
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#academics"
                      role="tab"
                    >
                      Add Bed Allotment
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content tab-transparent-content">
                <AddBed/>
                <MyBeds/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
