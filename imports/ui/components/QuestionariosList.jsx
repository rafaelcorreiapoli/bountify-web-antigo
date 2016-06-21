import React from 'react';
import QuestionariosListItem from './QuestionariosListItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

export default class RestaurantesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const { questionarios } = this.props;

  	let questionariosList = questionarios.map((questionario) => (
      <QuestionariosListItem key={questionario._id} data={questionario}/>
  	));

    return (
      <Table>
        <TableHeader
         displaySelectAll={false}
         adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Nome</TableHeaderColumn>
            <TableHeaderColumn>Tempo Médio</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={true}>
          {questionariosList}
        </TableBody>
      </Table>
    );
  }
}
