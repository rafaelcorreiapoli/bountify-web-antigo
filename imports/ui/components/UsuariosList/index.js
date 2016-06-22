import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import '/node_modules/ag-grid/dist/styles/ag-grid.css'
import '/node_modules/ag-grid/dist/styles/theme-fresh.css'

export default class RestaurantesList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { usuarios } = this.props;

    const columnDefs = [
        {headerName: "Id", field: "_id"},
        {headerName: "Email", field: "email"}
    ];


    return (
      <div className="ag-fresh" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={usuarios}
          enableSorting="true"
          enableFilter="true"
          />
      </div>
    );
  }
}
