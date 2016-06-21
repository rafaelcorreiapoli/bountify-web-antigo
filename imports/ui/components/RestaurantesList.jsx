import React from 'react';
import RestaurantesListItem from './RestaurantesListItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

export default class RestaurantesList extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
  	const { restaurantes } = this.props;

  	let restaurantesList = restaurantes.map((restaurante) => (
      <RestaurantesListItem key={restaurante._id} data={restaurante}/>
  	));

    return (
      <Table>
        <TableHeader
         displaySelectAll={false}
         adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Nome</TableHeaderColumn>
            <TableHeaderColumn>CNPJ</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={true}>
          {restaurantesList}
        </TableBody>
      </Table>
    );
  }
}
