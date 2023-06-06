import React from "react";
import { OperationsTable } from "../../../components/operations/OperationsTable";


export default function Operations(){
  return (
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <OperationsTable/>
        </div>
      </div>
    </div>
  );
};
