import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import PageView from 'material-ui/svg-icons/action/pageview';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';


const iconStyles = {
  marginRight: 24,
};

export default class RestaurantesListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    let id = this.props.data._id;

    browserHistory.push(`/restaurante/${id}`);
  }
  render() {
    let { data, ...other } = this.props;
    let { nome, cnpj} = data;
    return (
      <TableRow {...other}>
        <TableRowColumn>{nome}</TableRowColumn>
        <TableRowColumn>{cnpj}</TableRowColumn>
        <TableRowColumn>
          <IconButton onTouchTap={this.handleClick.bind(this)}>
          <PageView style={iconStyles} color={red500} />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}
