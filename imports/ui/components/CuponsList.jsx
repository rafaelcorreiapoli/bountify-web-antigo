import React from 'react';
import CuponsListItem from './CuponsListItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

export default class CuponsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const { cupons } = this.props;

  	let cuponsList = cupons.map((promocao) => (
      <CuponsListItem key={promocao._id} data={promocao}/>
  	));

    return (
      <Table>
        <TableHeader
         displaySelectAll={false}
         adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Gerado Por</TableHeaderColumn>
            <TableHeaderColumn>Promoções</TableHeaderColumn>
            <TableHeaderColumn>Token</TableHeaderColumn>
            <TableHeaderColumn>Data</TableHeaderColumn>
            <TableHeaderColumn>Valido Ate</TableHeaderColumn>
            <TableHeaderColumn>Owner</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={true}>
          {cuponsList}
        </TableBody>
      </Table>
    );
  }
}
