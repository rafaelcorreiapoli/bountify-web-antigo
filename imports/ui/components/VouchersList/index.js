import React from 'react';
import {AgGridReact} from 'ag-grid-react';

export default class VouchersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { vouchers } = this.props;
    const columnDefs = [
        {headerName: "Nome", field: "nome"},
        {headerName: "Categoria", field: "categoria"}
    ];
    return (
      <div className="ag-fresh" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={vouchers}
          enableSorting="true"
          enableFilter="true"
          />
      </div>
    );
  }
}
