export const AddPrescriptions = () =>{
    return(
        <div className="tab-pane fade" id="academics" role="tabpanel">
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card d-flex align-items-center">
          <div class="col-md-10 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body bg-light">
                    <h4 class="card-title">Add New Prescription</h4>
                    <hr className=""/>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="patient" className="text-dark font-weight-bold">Patient</label>
                        <input type="text" class="form-control" id="patient"/>
                      </div>
                      <div class="form-group">
                        <label for="history" className="text-dark font-weight-bold">Case History</label>
                        <input type="text" class="form-control" id="history"/>
                      </div>
                      <div class="form-group">
                        <label for="description" className="text-dark font-weight-bold">Description</label>
                        <input type="text" class="form-control" id="description"/>
                      </div>
                      <div class="form-group">
                        <label for="med" className="text-dark font-weight-bold">Medication</label>
                        <input type="text" class="form-control" id="med"/>
                      </div>
                      <div class="form-group">
                        <label for="amount" className="text-dark font-weight-bold">Amount</label>
                        <input type="text" class="form-control" id="amount"/>
                      </div>
                      
                      <div class="form-group">
                        <label for="date" className="text-dark font-weight-bold">Date</label>
                        <input type="date" class="form-control" id="date"/>
                      </div>
                      
                      <button type="submit" class="btn btn-primary">Add Prescription</button>
                    </form>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    )
}