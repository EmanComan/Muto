import React from "react";

export default function DoctorDashboard() {
  return (
    <>
    <h3 className="text-primary">DOCTOR</h3>
    <div class="tab-content tab-transparent-content">
      <div
        class="tab-pane fade show active"
        id="business-1"
        role="tabpanel"
        aria-labelledby="business-tab"
      >
        <div class="row">
          <div class="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="mb-2 text-dark font-weight-normal">Orders</h5>
                <h2 class="mb-4 text-dark font-weight-bold">932.00</h2>
                <div class="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent">
                  <i class="mdi mdi-lightbulb icon-md absolute-center text-dark"></i>
                </div>
                <p class="mt-4 mb-0">Completed</p>
                <h3 class="mb-0 font-weight-bold mt-2 text-dark">5443</h3>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="mb-2 text-dark font-weight-normal">
                  Unique Visitors
                </h5>
                <h2 class="mb-4 text-dark font-weight-bold">756,00</h2>
                <div class="dashboard-progress dashboard-progress-2 d-flex align-items-center justify-content-center item-parent">
                  <i class="mdi mdi-account-circle icon-md absolute-center text-dark"></i>
                </div>
                <p class="mt-4 mb-0">Increased since yesterday</p>
                <h3 class="mb-0 font-weight-bold mt-2 text-dark">50%</h3>
              </div>
            </div>
          </div>
          <div class="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="mb-2 text-dark font-weight-normal">Impressions</h5>
                <h2 class="mb-4 text-dark font-weight-bold">100,38</h2>
                <div class="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent">
                  <i class="mdi mdi-eye icon-md absolute-center text-dark"></i>
                </div>
                <p class="mt-4 mb-0">Increased since yesterday</p>
                <h3 class="mb-0 font-weight-bold mt-2 text-dark">35%</h3>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body text-center">
                <h5 class="mb-2 text-dark font-weight-normal">Followers</h5>
                <h2 class="mb-4 text-dark font-weight-bold">4250k</h2>
                <div class="dashboard-progress dashboard-progress-4 d-flex align-items-center justify-content-center item-parent">
                  <i class="mdi mdi-cube icon-md absolute-center text-dark"></i>
                </div>
                <p class="mt-4 mb-0">Decreased since yesterday</p>
                <h3 class="mb-0 font-weight-bold mt-2 text-dark">25%</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 grid-margin stretch-card">
            <div class="card card-danger-gradient">
              <div class="card-body mb-4">
                <h4 class="card-title text-white">Account Retention</h4>
                <canvas id="account-retension"></canvas>
              </div>
              <div class="card-body bg-white pt-4">
                <div class="row pt-4">
                  <div class="col-sm-6">
                    <div class="text-center border-right border-md-0">
                      <h4>Conversion</h4>
                      <h1 class="text-dark font-weight-bold mb-md-3">$306</h1>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="text-center">
                      <h4>Cancellation</h4>
                      <h1 class="text-dark font-weight-bold">$1,520</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8  grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <div class="d-xl-flex justify-content-between mb-2">
                  <h4 class="card-title">Page views analytics</h4>
                  <div
                    class="graph-custom-legend primary-dot"
                    id="pageViewAnalyticLengend"
                  ></div>
                </div>
                <canvas id="page-view-analytic"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
