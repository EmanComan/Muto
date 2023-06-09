import { BedsTable } from "./BedsTable"

export const MyBeds = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
            <BedsTable/>
            </div>
          </div>
        </div>
      </div>
    )
}