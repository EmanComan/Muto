import { LabouratoristsTable } from "./LabouratoristTable"

export const MyLabouratorists = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
                <LabouratoristsTable/>
            </div>
          </div>
        </div>
      </div>
    )
}