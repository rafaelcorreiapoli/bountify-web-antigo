import React from 'react';
import Paper from 'material-ui/Paper';
import QRCode from 'qrcode.react';

let styles = {
  paperStyle: {
    padding: 20,
    marginBottom: 20
  }
};

export default class CupomShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { _id, token, ownerId, geradoEm, validoAte, promocoesId} = this.props;

    return (
      <div>
      <Paper style={styles.paperStyle}>
      	<QRCode value={token} />
      	<h1>token: {token}</h1>
      	<h3>ownerId: {ownerId}</h3>
        <h3>geradoEm: {geradoEm.toString()}</h3>
        <h3>validoAte: {validoAte.toString()}</h3>
        <h3>promocoes: {promocoesId.toString()}</h3>
      </Paper>
			</div>
    );
  }
}

CupomShow.propTypes = {
	_id: React.PropTypes.string,
  token: React.PropTypes.string,
  ownerId: React.PropTypes.string,
  geradoEm: React.PropTypes.object,
  validoAte: React.PropTypes.object,
  promocoesId: React.PropTypes.array
};
