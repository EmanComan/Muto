import { PatientTable } from "./PatientTable"

export const MyPatients = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
            <PatientTable/>
            </div>
          </div>
        </div>
      </div>
    )
}