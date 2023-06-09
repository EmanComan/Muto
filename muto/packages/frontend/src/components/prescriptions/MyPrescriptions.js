import { PrescriptionTable } from "./PrescriptionTable"

export const MyPrescriptions = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
            <PrescriptionTable/>
            </div>
          </div>
        </div>
      </div>
    )
}