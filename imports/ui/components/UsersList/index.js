import React from 'react';
import { AgGridReact, reactCellRendererFactory } from 'ag-grid-react';
import '/node_modules/ag-grid/dist/styles/ag-grid.css'
import '/node_modules/ag-grid/dist/styles/theme-fresh.css'
import BooleanIcon from '/imports/ui/components/BooleanIcon'

const ActiveCellRenderer = ({
  params: { data }
}) => {
  return <BooleanIcon checked={!!data.active} />
}

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { usuarios } = this.props;

    const columnDefs = [
        {
          headerName: 'Id',
          field: '_id'
        },
        {
          headerName: 'Email',
          field: 'email'
        },
        {
          headerName: 'Ativo',
          field: 'active',
          cellRenderer: reactCellRendererFactory(ActiveCellRenderer),
        },
        {
          headerName: 'Cupons Gerados',
          field: 'cuponsGerados',
        },
        {
          headerName: 'Vouchers Lidos',
          field: 'vouchersLidos',
        }
    ];
    return (
      <div className="ag-fresh" style={{height: '100%'}}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={usuarios}
          enableSorting="true"
          enableFilter="true" />
      </div>
    );
  }
}
