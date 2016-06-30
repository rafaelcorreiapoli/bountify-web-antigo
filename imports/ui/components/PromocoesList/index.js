import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import {reactCellRendererFactory} from 'ag-grid-react';
import { Image } from 'react-bootstrap'
import BooleanIcon from '/imports/ui/components/BooleanIcon'

const AtivaCellRenderer = ({
  params: { data }
}) => {
  return <BooleanIcon checked={!!data.ativa} />
}
export default class PromocoesList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCellClicked = this.handleCellClicked.bind(this)
    this.onRowDoubleClicked = this.onRowDoubleClicked.bind(this)
  }
  handleCellClicked(e) {
    const { onToggleAtiva } = this.props
    const { colDef, data } = e;
    switch (colDef.field) {
      case 'ativa':
        onToggleAtiva(data)
        return false;
        break;
      default:
        break;
    }
  }
  onRowDoubleClicked(row) {
    console.log(this.props)
    const { data } = row
    const { onPromocaoClick } = this.props
    onPromocaoClick(data)
  }
  render() {
    const { promocoes } = this.props;
    const styleFactory = (extra) => ({
      lineHeight: '50px',
      textAlign: 'center',
      ...extra
    })

    const columnDefs = [
      {
        headerName: "Imagem",
        field: "imageUrl",
        cellRenderer: reactCellRendererFactory(({params: {data: {imagemUrl}}}) => <Image src={imagemUrl} style={{height: '40px'}}/>),
        cellStyle: styleFactory
      },
      {
        headerName: "Nome",
        field: "nome",
        cellStyle: styleFactory
      },
      {
        headerName: "Descrição", field: "descricao",
        cellStyle: styleFactory
      },
      {
        headerName: "Ativa",
        field: "ativa",
        cellRenderer: reactCellRendererFactory(AtivaCellRenderer),
        cellStyle: styleFactory
      }
    ];
    return (
      <div>
        <i class="fa fa-check" />
          <div className="ag-bootstrap" style={{height: '100%'}}>
            <AgGridReact
              columnDefs={columnDefs}
              rowData={promocoes}
              rowHeight={50}
              onRowDoubleClicked={this.onRowDoubleClicked}
              onCellClicked={this.handleCellClicked}
              enableSorting="true"
              enableFilter="true"
              />
          </div>
      </div>

    );
  }
}
