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
                        <label for="name" className="text-dark font-weight-bold">Name</label>
                        <input type="text" class="form-control" id="name"/>
                      </div>
                      <div class="form-group">
                        <label for="email" className="text-dark font-weight-bold">Email</label>
                        <input type="email" class="form-control" id="email"/>
                      </div>
                      <div class="form-group">
                        <label for="department" className="text-dark font-weight-bold">Department</label>
                        <input type="text" class="form-control" id="department"/>
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
                        <label for="password" className="text-dark font-weight-bold">Password</label>
                        <input type="password" class="form-control" id="password"/>
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