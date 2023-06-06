import React from "react";
import ReactCalendar from "../../components/Calendar";

export default function Dashboard() {
  return (
    <>
      <h3 className="text-primary">ADMIN</h3>
<br/>
      <div className="row">
        <div className="col">
        <a href="/doctors">
          <div class="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>
            
            <div class="card-body">
              
              <p class="card-text">
                DOCTORS
              </p>
            </div>
          </div>
        </a>
        </div>
        <div className="col">
        <a href="#/">
          <div class="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>
            
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </a>
        </div>
        <div className="col">
        <a href="#/">
          <div class="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>
            
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </a>
        </div>
        <div className="col">
        <a href="#/">
          <div class="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>
            
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </a>
        </div>
      </div>

      <div>
        <ReactCalendar />
      </div>
    </>
  );
}
