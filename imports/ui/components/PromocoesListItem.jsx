import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import PageView from 'material-ui/svg-icons/action/pageview';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';


const iconStyles = {
  marginRight: 24,
};

export default class PromocoesListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    let { _id } = this.props.data;

    browserHistory.push(`/promocao/${_id}`);
  }
  render() {
    let { data, ...other } = this.props;
    let { nome, descricao, validoAte} = data;
    return (
      <TableRow {...other}>
        <TableRowColumn>{nome}</TableRowColumn>
        <TableRowColumn>{descricao}</TableRowColumn>
        <TableRowColumn>{validoAte.toString()}</TableRowColumn>
        <TableRowColumn>
          <IconButton onTouchTap={this.handleClick.bind(this)}>
          <PageView style={iconStyles} color={red500} />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}
