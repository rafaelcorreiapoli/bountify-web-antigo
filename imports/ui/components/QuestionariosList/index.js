import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import {reactCellRendererFactory} from 'ag-grid-react';
import BooleanIcon from '/imports/ui/components/BooleanIcon'

const AtivoCellRenderer = ({
  params: { data }
}) => {
  return <BooleanIcon checked={!!data.ativo} />
}

export default class QuestionarioList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCellClicked = this.handleCellClicked.bind(this)
  }

  handleCellClicked(e) {
    const { onSetAtivo } = this.props
    const { colDef, data } = e;
    switch (colDef.field) {
      case 'ativo':
        onSetAtivo(data)
        break;
      default:
        break;
    }
  }

  render() {
    const { questionarios, hiddenColumns } = this.props;
    const columnDefs = [
        {headerName: "Nome", field: "nome"},
        {headerName: "Restaurante", field: "restauranteId"},
        {
          headerName: "Ativo",
          field: "ativo",
          cellRenderer: reactCellRendererFactory(AtivoCellRenderer)
        }
    ];

    const visibleColumns = columnDefs.map(column => {
      const hide = hiddenColumns.indexOf(column.field) !== -1
      return {
        ...column,
        hide
      }
    })
    return (
      <div className="ag-fresh" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={visibleColumns}
          rowData={questionarios}
          enableSorting="true"
          enableFilter="true"
          onCellClicked={this.handleCellClicked}
          />
      </div>
    );
  }
}
