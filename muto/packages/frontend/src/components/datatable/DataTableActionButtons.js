import Icon from "@mdi/react";
import { mdiExportVariant, mdiMicrosoftExcel, mdiFilePdfBox } from "@mdi/js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from 'xlsx'

export const ActionButtons = (props) => {
  const { data, columns, pdfName, title } = props;

  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // delete the Actions column,
    const printableColumns = [...columns];
    printableColumns.pop();

    // Extract the data as an array of arrays
    const dataToPrint = data.map((item) => Object.values(item));

    doc.text(title, 15, 15);
    doc.autoTable({
      head: [printableColumns.map((col) => col.name)],
      body: dataToPrint,
      startY: 30,
    });
    doc.save(`${pdfName}.pdf`);
  };

  const generateExcelSheet = () => {
    const printableColumns = [...columns];
    printableColumns.pop();
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(workBook,workSheet,`${pdfName}`);
    XLSX.writeFile(workBook, `${pdfName}.xlsx`)
    

  }
  return (
    <div className="d-flex mb-2">
      <button className="btn btn-sm btn-info mx-1" onClick={generatePDF}>
        <Icon path={mdiFilePdfBox} size={1} />
        PDF
      </button>
      <button className="btn btn-sm btn-info mx-1">
        <Icon path={mdiExportVariant} size={1} />
        Export
      </button>
      <button className="btn btn-sm btn-info mx-1" onClick={generateExcelSheet}>
        <Icon path={mdiMicrosoftExcel} size={1} />
        Excel
      </button>
    </div>
  );
};
