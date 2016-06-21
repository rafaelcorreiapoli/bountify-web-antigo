import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import QRCode from 'qrcode.react';

import IconButton from 'material-ui/IconButton';
import PageView from 'material-ui/svg-icons/action/pageview';
import {red500} from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';
  
const iconStyles = {
  marginRight: 24,
};

export default class CuponsListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(cupomId) {
    const { data } = this.props;
    const { _id } = data;
    browserHistory.push(`/cupom/${_id}`);
  }
  render() {
    let { data, ...other } = this.props;
    let { _id, userId, promocoesId, token, geradoEm, validoAte, ownerId } = data;
    return (
      <TableRow {...other} onClick={() => this.handleRowClick(_id)}>
        <TableRowColumn>{userId}</TableRowColumn>
        <TableRowColumn>{promocoesId.toString()}</TableRowColumn>
        <TableRowColumn>
          <QRCode value={token} />
        </TableRowColumn>
        <TableRowColumn>{geradoEm.toString()}</TableRowColumn>
        <TableRowColumn>{validoAte.toString()}</TableRowColumn>
        <TableRowColumn>{ownerId}</TableRowColumn>
        <TableRowColumn>
          <IconButton onTouchTap={this.handleClick}>
            <PageView style={iconStyles} color={red500} />
          </IconButton>
        </TableRowColumn>
      </TableRow>
    );
  }
}
