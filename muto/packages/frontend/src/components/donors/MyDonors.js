import { DonorsTable } from "./DonorsTable"

export const MyDonors = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
                <DonorsTable/>
            </div>
          </div>
        </div>
      </div>
    )
}