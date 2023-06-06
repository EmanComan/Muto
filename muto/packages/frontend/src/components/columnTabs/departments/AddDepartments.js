
export const AddDepartments = () => {
  return (
    <div className="tab-pane fade" id="academics" role="tabpanel">
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card d-flex align-items-center">
          <div class="col-md-10 grid-margin stretch-card center">
                <div class="card">
                  <div class="card-body bg-light">
                    <h4 class="card-title">Add Department</h4>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="department" className="text-dark">Department</label>
                        <input type="text" class="form-control" id="department"/>
                      </div>
                      <div class="form-group">
                        <label for="description" className="text-dark">Description</label>
                        <input type="text" class="form-control" id="description"/>
                      </div>
                      
                      <button type="submit" class="btn btn-primary">Add Department</button>
                    </form>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};
