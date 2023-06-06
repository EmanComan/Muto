import { DoctorTable } from "./DoctorsTable"
export const MyDoctors = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
              <DoctorTable/>
            </div>
          </div>
        </div>
      </div>
    )
}