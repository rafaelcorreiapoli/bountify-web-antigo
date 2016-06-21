import React from 'react';
import Paper from 'material-ui/Paper';

let styles = {
  paperStyle: {
    padding: 20,
    marginBottom: 20
  }
};

export default class PromocaoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { _id, nome, descricao, imagemUrl, questionarioId } = this.props;

    return (
      <div>
      <Paper style={styles.paperStyle}>
      	<img src={imagemUrl} />
      	<h1>Nome: {nome}</h1>
      	<h3>Descrição: {descricao}</h3>
        <h3>Questionário: {questionarioId}</h3>
      </Paper>
			</div>
    );
  }
}

PromocaoShow.propTypes = {
	_id: React.PropTypes.string,
  nome: React.PropTypes.string,
  descricao: React.PropTypes.string,
  imagemUrl: React.PropTypes.string,
  questionarioId: React.PropTypes.string
};
