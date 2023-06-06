import { AccountantsTable } from "./AccountantsTable"

export const MyAccountants = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
                <AccountantsTable/>
            </div>
          </div>
        </div>
      </div>
    )
}