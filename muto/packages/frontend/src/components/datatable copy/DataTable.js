import { useState, useCallback } from "react";
import "./datable.css";
import DataTable from "react-data-table-component";
import { ActionButtons } from "./DataTableActionButtons";
import { DataTableSearchInput } from "./DataTableSearchInput";

export const Datatable = (props) => {
  const { data, columns, title, pdfName, placeholder } = props;
  
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = useCallback(
    (event) => {
        setSearch(event.target.value);

        const newData = data.filter((row) => {
          return row.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });
        setFilteredData(newData);
    },
    [data]
  );
  return (
    <DataTable
      className="datatable p-1"
      columns={columns}
      data={filteredData}
      selectableRows
      fixedHeader
      pagination
      highlightOnHover
      selectableRowsHighlight
      actions={
        <ActionButtons
          data={filteredData}
          columns={columns}
          title={title}
          pdfName={pdfName}
        />
      }
      subHeader
      subHeaderComponent={
        <DataTableSearchInput
          search={search}
          handleSearch={handleSearch}
          placeholder={placeholder}
        />
      }
      subHeaderAlign="left"
    />
  );
};
