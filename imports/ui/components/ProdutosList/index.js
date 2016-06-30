import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { reactCellRendererFactory } from 'ag-grid-react';
import { Image } from 'react-bootstrap'

export default class PromocoesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { produtos } = this.props;
    const styleFactory = (extra) => ({
      lineHeight: '50px',
      textAlign: 'center',
      ...extra
    })

    const columnDefs = [
      {
        headerName: "Imagem",
        field: "imagemUrl",
        cellRenderer: reactCellRendererFactory(({params: {data: {imagemUrl}}}) =>
          <Image src={imagemUrl} style={{height: '40px'}}/>),
        cellStyle: styleFactory
      },
      {
        headerName: "Nome",
        field: "nome",
        cellStyle: styleFactory
      },
      {
        headerName: "Desconto",
        field: "desconto",
        cellStyle: styleFactory
      },
      {
        headerName: "Observação",
        field: "observacao",
        cellStyle: styleFactory
      }
    ];
    return (
      <div className="ag-bootstrap" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={produtos}
          rowHeight={50}
          enableSorting="true"
          enableFilter="true"
          />
      </div>
    );
  }
}
