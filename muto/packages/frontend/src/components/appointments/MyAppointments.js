import { AppointmentsTable } from "./AppointmentTable"

export const MyAppointments = () =>{
    return (
        <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
            <AppointmentsTable/>
            </div>
          </div>
        </div>
      </div>
    )
}