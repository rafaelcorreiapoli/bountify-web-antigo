import React from 'react';
import PromocoesListItem from './PromocoesListItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

export default class PromocoesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const { promocoes } = this.props;

  	let promocoesList = promocoes.map((promocao) => (
      <PromocoesListItem key={promocao._id} data={promocao}/>
  	));

    return (
      <Table>
        <TableHeader
         displaySelectAll={false}
         adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Nome</TableHeaderColumn>
            <TableHeaderColumn>Descrição</TableHeaderColumn>
            <TableHeaderColumn>Valido Até</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={true}>
          {promocoesList}
        </TableBody>
      </Table>
    );
  }
}
