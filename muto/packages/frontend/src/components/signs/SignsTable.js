import DataTable from "react-data-table-component";
import Modal from "../Modal";
import { SearchInput } from "../Search";
import { Actions } from "../Actions";

export const SignsTable = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "E-mail",
      selector: (row) => row.email,
    },
    {
        name: "Department",
        selector: (row) => row.department,
      },
      {
        name: "Address",
        selector: (row) => row.address,
      },
      {
        name: "Phone",
        selector: (row) => row.phone,
      },
      {
        name: "Password",
        selector: (row) => row.password,
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
      name: "Coman",
      email: "coman@gmail.com",
      department:"Doctors",
      address: "mukono",
      phone: "0774786423",
      password: "12345"
    },
    {
        name: "salmon",
        email: "sal@gmail.com",
        department:"Nurse",
        address: "kiwatule",
        phone: "0774786823",
        password: "123409"
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
