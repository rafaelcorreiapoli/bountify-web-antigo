import React from 'react';
import {AgGridReact} from 'ag-grid-react';

export default class PromocoesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { promocoes } = this.props;
    const columnDefs = [
        {headerName: "Nome", field: "nome"},
        {headerName: "Descrição", field: "descricao"}
    ];
    return (
      <div className="ag-bootstrap" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={promocoes}
          enableSorting="true"
          enableFilter="true"
          />
      </div>
    );
  }
}
