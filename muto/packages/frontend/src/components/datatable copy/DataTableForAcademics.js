import "./datable.css";
import DataTable from "react-data-table-component";
import { ActionButtons } from "./DataTableActionButtons";
import { DataTableSearchInput } from "./DataTableSearchInput";
import { mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";

function DataTableForAcademics(){
  const columns = [
    {
      name: "STATISTICS",
      selector: (row) => row.stat,
    },
    {
      name: "SST",
      selector: (row) => row.sst,
    },
    {
      name: "SCIENCE",
      selector: (row) => row.science,
    },
    {
      name: "MATHS",
      selector: (row) => row.maths,
    },
    {
      name: "ENGLISH",
      selector: (row) => row.english,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex">
          <button className="btn text-danger mx-1">
            <Icon path={mdiTrashCanOutline} size={1} />
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      stat: "B.O.T",
      sst: 87,
      science: 67,
      maths: 89,
      english: 67,
    },
    {
      stat: "M.T",
      sst: 87,
      science: 67,
      maths: 89,
      english: 67,
    },
    {
      stat: "E.O.T",
      sst: 87,
      science: 67,
      maths: 89,
      english: 67,
    },
    {
      stat: "TOTAL",
      sst: 87,
      science: 67,
      maths: 89,
      english: 67,
    },
    {
      stat: "AVERAGE",
      sst: 87,
      science: 67,
      maths: 89,
      english: 67,
    },
  ];

  return (
    <DataTable
      className="datatable p-1"
      columns={columns}
      data={data}
      selectableRows
      fixedHeader
      pagination
      highlightOnHover
      selectableRowsHighlight
      actions={<ActionButtons />}
      subHeader
      subHeaderComponent={<DataTableSearchInput />}
      subHeaderAlign="left"
    />
  );
};


export default DataTableForAcademics;