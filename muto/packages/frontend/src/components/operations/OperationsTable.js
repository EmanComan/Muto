import DataTable from "react-data-table-component";
import { SearchInput } from "../Search";
import { Actions } from "../Actions";

export const OperationsTable = () => {
  const columns = [
    {
      name: "Operation Name",
      selector: (row) => row.name,
    },
    {
      name: "Patient",
      selector: (row) => row.patient,
    },
    {
        name: "Surgeon",
        selector: (row) => row.surgeon,
      },
      {
        name: "Date",
        selector: (row) => row.date,
      },
      {
        name: "Outcome Status",
        selector: (row) => row.status,
      },
  ];

  const data = [
    {
      name: "Gender Affirmation",
      patient: "solomon",
      surgeon:"coman",
      date: "03/23/2023",
      status: "successful",
      
    },
    {
        name: "Teeth treatment",
        patient: "wasswa",
        surgeon:"coman",
        date: "03/08/2023",
        status: "successful",
        
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
