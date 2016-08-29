import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import {reactCellRendererFactory} from 'ag-grid-react';
import QRCode from 'qrcode.react';
import moment from 'moment'

const TokenCellRenderer = ({
  params: { data }
}) => {
  return <QRCode value={data.token} size={40} />
}

const StatusCellRenderer = ({
  params: { data }
}) => {
  let color
  switch (data.status) {
    case 'gerado': color = 'yellow'; break;
    case 'obtido': color = 'blue'; break;
    case 'utilizado': color = 'green'; break;
    default: color = 'black'; break;
  }
  return (
    <span style={{color}}>{data.status && data.status.toUpperCase() || '-'}</span>
  )
}

const MomentFormat = ({
  data
}) => {
  return (
    <div>
      {
        data ?
        moment(data).format('DD/MM/YYYY HH:mm:ss')
        :
        null
      }
    </div>
  )
}

export default class CuponsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styleFactory = (extra) => ({
      lineHeight: '50px',
      textAlign: 'center',
      ...extra
    })
    const { cupons, onCupomClick } = this.props;
    const columnDefs = [
      {
        headerName: "QRCode",
        field: "token",
        cellRenderer: reactCellRendererFactory(TokenCellRenderer),
        cellStyle: styleFactory
      },
      {
        headerName: "Status",
        field: "status",
        cellRenderer: reactCellRendererFactory(StatusCellRenderer),
        cellStyle: styleFactory
      },
      {
        headerName: "Restaurante",
        field: "restauranteId",
        cellStyle: styleFactory
      },
      {
        headerName: "Gerado Por",
        field: "userId",
        cellStyle: styleFactory
      },
      {
        headerName: "Gerado em",
        field: "geradoEm",
        cellRenderer: reactCellRendererFactory(({params: {data: {geradoEm}}}) => <MomentFormat data={geradoEm} />),
        cellStyle: styleFactory
      },
      {
        headerName: "Válido até",
        field: "validoAte",
        cellRenderer: reactCellRendererFactory(({params: {data: {validoAte}}}) => <MomentFormat data={validoAte} />),
        cellStyle: styleFactory
      },
      {
        headerName: "Obtido em",
        field: "obtidoEm",
        cellRenderer: reactCellRendererFactory(({params: {data: {obtidoEm}}}) => <MomentFormat data={obtidoEm} />),
        cellStyle: styleFactory
      },
      {
        headerName: "Utilizado em",
        field: "utilizadoEm",
        cellRenderer: reactCellRendererFactory(({params: {data: {utilizadoEm}}}) => <MomentFormat data={utilizadoEm} />),
        cellStyle: styleFactory
      }
    ];
    return (
      <div className="ag-fresh" style={{height: '100%'}}>
        <AgGridReact
          enableColResize={true}
          columnDefs={columnDefs}
          rowData={cupons}
          onRowClicked={({data}) => onCupomClick(data)}
          enableSorting="true"
          enableFilter="true"
          rowHeight={50}
          />
      </div>
    );
  }
}
