import { SignsTable } from "./SignsTable"

export const MySigns = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
            <SignsTable/>
            </div>
          </div>
        </div>
      </div>
    )
}