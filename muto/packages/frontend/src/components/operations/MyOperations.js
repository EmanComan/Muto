import { OperationsTable } from "./OperationsTable"

export const MyOperations = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
              <OperationsTable/>
            </div>
          </div>
        </div>
      </div>
    )
}