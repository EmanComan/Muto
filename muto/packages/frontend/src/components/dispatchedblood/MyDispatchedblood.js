import { DispatchedBloodTable } from "./DispatchedbloodTable"

export const MyDispatchedBlood = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
                <DispatchedBloodTable/>
            </div>
          </div>
        </div>
      </div>
    )
}