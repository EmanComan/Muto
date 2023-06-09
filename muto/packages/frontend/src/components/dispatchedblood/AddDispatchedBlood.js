export const AddDispatchedBlood = () => {
    return (
      <div className="tab-pane fade" id="academics" role="tabpanel">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card d-flex align-items-center">
            <div class="col-md-10 grid-margin stretch-card">
              <div class="card">
                <div class="card-body bg-light">
                  <h4 class="card-title">Add Dispatched Blood</h4>
                  <hr className="" />
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="name" className="text-dark font-weight-bold">
                        Patient
                      </label>
                      <input type="text" class="form-control" id="name" />
                    </div>
                    
                    <div class="form-group">
                      <label for="bags" className="text-dark font-weight-bold">
                        No Of Bags
                      </label>
                      <input type="number" class="form-control" id="bags" />
                    </div>
                    <div class="form-group">
                      <label for="charges" className="text-dark font-weight-bold">
                        Charges
                      </label>
                      <input type="number" class="form-control" id="charges" />
                    </div>
                    <div class="form-group">
                      <label for="phone" className="text-dark font-weight-bold">
                        Phone
                      </label>
                      <input type="text" class="form-control" id="phone" />
                    </div>
                    
                    <div className="form-group">
                    <label className="text-dark font-weight-bold">Blood Group</label>
                    <select className="form-control">
                        <option value={"one"}>O+</option>
                        <option value={"two"}>O-</option>
                        <option value={"two"}>B+</option>
                        <option value={"two"}>B-</option>
                        <option value={"two"}>A-</option>
                        <option value={"two"}>A+</option>
                        <option value={"two"}>AB+</option>
                        <option value={"two"}>AB-</option>

                    </select>
                    </div>
                    
                    <div class="form-group">
                      <label for="lastD" className="text-dark font-weight-bold">
                        Date
                      </label>
                      <input type="date" class="form-control" id="lastD" />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Add Dispatched Blood
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
  