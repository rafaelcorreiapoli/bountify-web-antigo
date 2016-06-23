import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import {reactCellRendererFactory} from 'ag-grid-react';
import '/node_modules/ag-grid/dist/styles/ag-grid.css'
import '/node_modules/ag-grid/dist/styles/theme-bootstrap.css'
import { Image } from 'react-bootstrap'
export default class RestaurantesList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { restaurantes, onRestauranteClick } = this.props;
    const styleFactory = (extra) => ({
      lineHeight: '50px',
      textAlign: 'center',
      ...extra
    })

    var columnDefs = [
      {
        headerName: "Logotipo",
        field: "logoUrl",
        cellRenderer: reactCellRendererFactory(({params: {data: {logoUrl}}}) => <Image src={logoUrl} style={{width: '40px', height: '40px'}}/>),
        cellStyle: styleFactory
      },
      {
        headerName: "Nome",
        field: "nome",
        cellStyle: styleFactory
      },
      {
        headerName: "Categoria",
        field: "categoria",
        cellStyle: styleFactory
      }
    ];

    return (
      <div className="ag-fresh" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={restaurantes}
          enableSorting="true"
          enableFilter="true"
          rowHeight={50}
          onRowClicked={({data}) => onRestauranteClick(data)}
          />
      </div>
    );
  }
}
