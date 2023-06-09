export const AddBed = () => {
    return (
      <div className="tab-pane fade" id="academics" role="tabpanel">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card d-flex align-items-center">
            <div class="col-md-10 grid-margin stretch-card">
              <div class="card">
                <div class="card-body bg-light">
                  <h4 class="card-title">Add Bed</h4>
                  <hr className="" />
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="patient" className="text-dark font-weight-bold">
                        Patient
                      </label>
                      <input type="text" class="form-control" id="patient" />
                    </div>
                    <div className="form-group">
                    <label className="text-dark font-weight-bold">Patient Status</label>
                    <select className="form-control">
                        <option value={"one"}>Admitted</option>
                        <option value={"two"}>Cured</option>
                        <option value={"three"}>Under Treatment</option>
                        <option value={"four"}>Operated</option>
                        <option value={"four"}>Recovery</option>
                        <option value={"four"}>Discharged</option>
                        <option value={"four"}>Deceased</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <label className="text-dark font-weight-bold">Bed Type</label>
                    <select className="form-control">
                        <option value={"one"}>Delivery Bed</option>
                        <option value={"two"}>Ward</option>
                        <option value={"three"}>Emergency Ward</option>
                    </select>
                    </div>
                    <div class="form-group">
                      <label for="number" className="text-dark font-weight-bold">
                        Bed Number
                      </label>
                      <input type="text" class="form-control" id="number" />
                    </div>
                    <div class="form-group">
                      <label for="date" className="text-dark font-weight-bold">
                        Date of Allotment
                      </label>
                      <input type="date" class="form-control" id="date" />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Add Bed Allotment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  