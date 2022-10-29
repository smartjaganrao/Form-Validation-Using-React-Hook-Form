import '../App.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';

import { columns, data } from '../Data.js';

function FormB() {

  const tableData = {
    columns,
    data,
  };

    return (
      <div className="">
        <h3> Data Table</h3>

    <DataTableExtensions
      {...tableData}
    >
      <DataTable
        noHeader
        defaultSortField="id"
        defaultSortAsc={false}
        pagination
        highlightOnHover
      />
    </DataTableExtensions>
      </div>
    );
  }
  
  export default FormB;
  