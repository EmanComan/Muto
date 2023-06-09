export const AddSign = () => {
  return (
    <div className="tab-pane fade" id="academics" role="tabpanel">
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card d-flex align-items-center">
          <div class="col-md-10 grid-margin stretch-card">
            <div class="card">
              <div class="card-body bg-light">
                <h4 class="card-title">Add Vital Sign</h4>
                <hr className="" />
                <form class="forms-sample">
                  <div class="form-group">
                    <label for="patient" className="text-dark font-weight-bold">
                      Patient
                    </label>
                    <input type="text" class="form-control" id="patient" />
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

                  <button type="submit" class="btn btn-primary">
                    Add Sign
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
