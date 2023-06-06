import { ReceptionistsTable } from "./ReceptionistsTable"

export const MyReceptionists = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
                <ReceptionistsTable/>
            </div>
          </div>
        </div>
      </div>
    )
}