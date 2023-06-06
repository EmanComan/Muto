import { PharmacistsTable } from "./PharmacistTable"

export const MyPharmacists = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
            <PharmacistsTable/>
            </div>
          </div>
        </div>
      </div>
    )
}