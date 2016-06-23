import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import '/node_modules/ag-grid/dist/styles/ag-grid.css'
import '/node_modules/ag-grid/dist/styles/theme-bootstrap.css'

export default class RestaurantesList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { restaurantes, onRestauranteClick } = this.props;

    var columnDefs = [
        {headerName: "Nome", field: "nome"},
        {headerName: "Categoria", field: "categoria"}
    ];

    return (
      <div className="ag-fresh" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={restaurantes}
          enableSorting="true"
          enableFilter="true"
          onRowClicked={({data}) => onRestauranteClick(data)}
          />
      </div>
    );
  }
}
