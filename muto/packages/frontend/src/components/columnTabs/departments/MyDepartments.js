import { DepartmentTable } from "../Department-Datatable";

export const MyDepartments = () => {
    return (
      <div className="tab-pane fade show active" id="overview" role="tabpanel">
        <div className="pd-20">
          <div className="card">
            <div className="container grid-margin">
              <DepartmentTable/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  