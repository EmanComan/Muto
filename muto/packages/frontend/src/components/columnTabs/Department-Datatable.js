import DataTable from "react-data-table-component";
import Modal from "../Modal";
import { SearchInput } from "../Search";
import { Actions } from "../Actions";

export const DepartmentTable = () => {
  const columns = [
    {
      name: "Departments",
      selector: (row) => row.department,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex">
          <button
            type="button"
            className="btn btn-md btn-rounded btn-danger mx-1"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Delete
            {/* {<Icon path={mdiTrashCanOutline} size={1} />} */}
          </button>
          <Modal />
        </div>
      ),
    },
  ];

  const data = [
    {
      department: "Pharmacists",
      description: "Dispense drugs",
    },
    {
      department: "Doctors",
      description: "Prescribe drugs",
    },
    {
      department: "Labouratorists",
      description: "Carry out different tests",
    },
  ];

  return (
    <DataTable
      className="datatable p-1 "
      columns={columns}
      data={data}
      selectableRows
      fixedHeader
      pagination
      highlightOnHover
      selectableRowsHighlight
      actions={<Actions />}
      subHeader
      subHeaderComponent={<SearchInput data={data} />}
      subHeaderAlign="left"
    />
  );
};
