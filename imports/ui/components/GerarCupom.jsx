import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import { insert } from '/imports/api/cupons/methods';

export default class GerarCupom extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { restauranteId } = this.props;
    insert.call({restauranteId}, (err, res) => {
      console.log(err, 'err');
      console.log(res, 'res');
    });
  }

  render() {
    return (
      <div>
        <RaisedButton label="Gerar" onClick={this.handleClick} />
      </div>
    );
  }
}

  