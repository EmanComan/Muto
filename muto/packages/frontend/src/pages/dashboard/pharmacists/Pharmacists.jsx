import React from "react";
import { MyPharmacists } from "../../../components/pharmacist/MyPharmacists";
import { AddPharmacists } from "../../../components/pharmacist/AddPharmacist";

export default function Pharmacists(){
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
                      Pharmacists
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#academics"
                      role="tab"
                    >
                      Add Pharmacist
                    </a>
                  </li>                  
                </ul>
              </div>
              <div className="tab-content tab-transparent-content">
            <MyPharmacists/>
            <AddPharmacists/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
