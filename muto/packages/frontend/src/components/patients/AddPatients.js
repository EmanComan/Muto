export const AddPatients = () =>{
    return(
        <div className="tab-pane fade" id="academics" role="tabpanel">
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card d-flex align-items-center">
          <div class="col-md-10 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body bg-light">
                    <h4 class="card-title">Add New Patient</h4>
                    <hr className=""/>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="patient" className="text-dark font-weight-bold">Patient</label>
                        <input type="text" class="form-control" id="patient"/>
                      </div>
                      <div class="form-group">
                        <label for="email" className="text-dark font-weight-bold">Email</label>
                        <input type="email" class="form-control" id="email"/>
                      </div>
                      <div class="form-group">
                        <label for="address" className="text-dark font-weight-bold">Address</label>
                        <input type="text" class="form-control" id="address"/>
                      </div>
                      <div class="form-group">
                        <label for="phone" className="text-dark font-weight-bold">Phone Number</label>
                        <input type="text" class="form-control" id="phone"/>
                      </div>
                      <div class="form-group">
                        <label for="sex" className="text-dark font-weight-bold">Sex</label>
                        <input type="text" class="form-control" id="sex"/>
                      </div>
                      
                      <div class="form-group">
                        <label for="dob" className="text-dark font-weight-bold">Date Of Birth</label>
                        <input type="date" class="form-control" id="dob"/>
                      </div>
                      <div class="form-group">
                        <label for="age" className="text-dark font-weight-bold">Age</label>
                        <input type="number" class="form-control" id="age"/>
                      </div>
                      <div class="form-group">
                        <label for="blood" className="text-dark font-weight-bold">Blood Group</label>
                        <input type="text" class="form-control" id="blood"/>
                      </div>
                      <div class="form-group">
                        <label for="time" className="text-dark font-weight-bold">Time Of Registration</label>
                        
                        <input type="date" class="form-control" id="time"/>
                        
                      </div>
                      <button type="submit" class="btn btn-primary">Add Patient</button>
                    </form>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    )
}