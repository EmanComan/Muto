export const AddDonor = () => {
    return (
      <div className="tab-pane fade" id="academics" role="tabpanel">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card d-flex align-items-center">
            <div class="col-md-10 grid-margin stretch-card">
              <div class="card">
                <div class="card-body bg-light">
                  <h4 class="card-title">Add Blood Donor</h4>
                  <hr className="" />
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="donor" className="text-dark font-weight-bold">
                        Name
                      </label>
                      <input type="text" class="form-control" id="donor" />
                    </div>
                    <div class="form-group">
                      <label for="email" className="text-dark font-weight-bold">
                        Email
                      </label>
                      <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group">
                      <label for="address" className="text-dark font-weight-bold">
                        Address
                      </label>
                      <input type="text" class="form-control" id="address" />
                    </div>
                    <div class="form-group">
                      <label for="phone" className="text-dark font-weight-bold">
                        Phone
                      </label>
                      <input type="text" class="form-control" id="phone" />
                    </div>
                    <div className="form-group">
                    <label className="text-dark font-weight-bold">Gender</label>
                    <select className="form-control">
                        <option value={"one"}>Male</option>
                        <option value={"two"}>Female</option>
                    </select>
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
                      <label for="bags" className="text-dark font-weight-bold">
                        No Of Bags
                      </label>
                      <input type="number" class="form-control" id="bags" />
                    </div>
                    <div class="form-group">
                      <label for="lastD" className="text-dark font-weight-bold">
                        Last Donation
                      </label>
                      <input type="date" class="form-control" id="lastD" />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Add Blood Donor
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
  