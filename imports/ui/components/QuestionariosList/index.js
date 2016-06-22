import React from 'react';
import {AgGridReact} from 'ag-grid-react';

export default class QuestionarioList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { questionarios } = this.props;
    const columnDefs = [
        {headerName: "Nome", field: "nome"},
        {headerName: "Restaurante", field: "restauranteId"}
    ];
    return (
      <div className="ag-fresh" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={questionarios}
          enableSorting="true"
          enableFilter="true"
          />
      </div>
    );
  }
}
