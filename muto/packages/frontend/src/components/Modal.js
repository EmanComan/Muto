import React from "react";
//modal
export default function Modal() {
    return (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger" id="exampleModalLongTitle">
                Delete Item
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <div className="container">
                    <h3>Are you sure you want to continue?
                    </h3>
                    <h3 className="text-danger">This Operation is irreversible!!!</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }