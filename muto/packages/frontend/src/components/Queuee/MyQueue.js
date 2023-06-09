import { QueueTable } from "./QueueTable"

export const MyQueue = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
            <QueueTable/>
            </div>
          </div>
        </div>
      </div>
    )
}