import { NurseTable } from "./NurseTable"

export const MyNurses = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
              <NurseTable/>
            </div>
          </div>
        </div>
      </div>
    )
}