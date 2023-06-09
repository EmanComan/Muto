export const AddOperations = () =>{
    return(
        <div className="tab-pane fade" id="academics" role="tabpanel">
      <div className="col-md-12 grid-margin stretch-card">
        <div className="card d-flex align-items-center">
          <div class="col-md-10 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body bg-light">
                    <h4 class="card-title">Add New Operation</h4>
                    <hr className=""/>
                    <form class="forms-sample">
                      <div class="form-group">
                        <label for="name" className="text-dark font-weight-bold">Patient</label>
                        <input type="text" class="form-control" id="name"/>
                      </div>
                      <div class="form-group">
                        <label for="name" className="text-dark font-weight-bold">Operation Type</label>
                        <input type="text" class="form-control" id="name"/>
                      </div>
                      <div class="form-group">
                        <label for="date" className="text-dark font-weight-bold">Date</label>
                        <input type="date" class="form-control" id="date"/>
                      </div>
                      
                      
                      <button type="submit" class="btn btn-primary">Add Operation</button>
                    </form>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    )
}