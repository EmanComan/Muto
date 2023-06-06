// import { useState, useCallback } from "react";
import "./datable.css";
import DataTable from "react-data-table-component";
// import { ActionButtons } from "./DataTableActionButtons";
// import { DataTableSearchInput } from "./DataTableSearchInput";

function Datatable() {
  
  // const [search, setSearch] = useState("");
  // const [filteredData, setFilteredData] = useState(data);

  // const handleSearch = useCallback(
  //   (event) => {
  //       setSearch(event.target.value);

  //       const newData = data.filter((row) => {
  //         return row.name
  //           .toLowerCase()
  //           .includes(event.target.value.toLowerCase());
  //       });
  //       setFilteredData(newData);
  //   },
  //   [data]
  // );

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
    },
    {
      name: 'Age',
      selector: row => row.age,
    }
  ];

  const data = [
    {
      id: 1,
      name: 'Coman',
      email: 'coman@gmail.com',
      age: 67
    },
    {
      id: 1,
      name: 'Coman',
      email: 'coman@gmail.com',
      age: 67
    },
    {
      id: 1,
      name: 'Coman',
      email: 'coman@gmail.com',
      age: 67
    },
    {
      id: 1,
      name: 'Coman',
      email: 'coman@gmail.com',
      age: 67
    }
  ];

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <input type="text"/>
        </div>
      <DataTable
      className="datatable p-1"
      columns={columns}
      data={data}
      selectableRows
      fixedHeader
      pagination
      highlightOnHover
      selectableRowsHighlight
    />

      </div>
    
    </div>
  );
};

export default Datatable;