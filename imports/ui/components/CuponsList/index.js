import React from 'react';
import {AgGridReact} from 'ag-grid-react';

export default class CuponsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cupons } = this.props;
    const columnDefs = [
        {headerName: "Restaurante", field: "restauranteId"},
        {headerName: "Gerado Por", field: "userId"}
    ];
    return (
      <div className="ag-fresh" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={cupons}
          enableSorting="true"
          enableFilter="true"
          />
      </div>
    );
  }
}
