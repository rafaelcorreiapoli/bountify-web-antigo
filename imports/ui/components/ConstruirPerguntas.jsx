import React, { Component } from 'react';
import PerguntaItem from './PerguntaItem';
import RaisedButton from 'material-ui/RaisedButton';

class ConstruirPerguntas extends Component {
	constructor(props) {
		super(props);

		this.state = {
			perguntas: []
		};

		this.handleChangeTipo = this.handleChangeTipo.bind(this);
		this.handleRemovePergunta = this.handleRemovePergunta.bind(this);
		this.handleChangeTitulo = this.handleChangeTitulo.bind(this);
		this.handleChangeOpcoes = this.handleChangeOpcoes.bind(this);
	}

	alertUpdate() {
		const { onChange } = this.props;
		onChange(this.state.perguntas);
	}
	handleChangeTipo(index, value) {
		const { perguntas } = this.state;

		perguntas[index].tipo = value;

		this.setState({
			perguntas
		});
		this.alertUpdate();
	}

	handleChangeTitulo(index, value) {
		const { perguntas } = this.state;

		perguntas[index].titulo = value;

		this.setState({
			perguntas
		});
		this.alertUpdate();
	}

	handleChangeOpcoes(index, value) {
		const { perguntas } = this.state;

		perguntas[index].opcoes = value;
		this.setState({
			perguntas
		});
		this.alertUpdate();
	}

	handleRemovePergunta(index) {
		const { perguntas } = this.state;

		perguntas.splice(index, 1);

		this.setState({
			perguntas
		});
		this.alertUpdate();
	}

	handleAdicionarPergunta() {
		const { perguntas } = this.state;
		perguntas.push({
			titulo: '',
			tipo: 0
		});

		this.setState({
			perguntas
		});
		this.alertUpdate();
	}

	renderPerguntas(perguntas) {
		return perguntas.map((pergunta, i) => (
			<PerguntaItem
				key={i}
				index={i}
				{...pergunta}
				onChangeTipo={this.handleChangeTipo}
				onChangeTitulo={this.handleChangeTitulo}
				onChangeOpcoes={this.handleChangeOpcoes}
				onRemovePergunta={this.handleRemovePergunta}
				/>
		));
	}
	render() {
		const { perguntas } = this.state;

		return (
			<div>
				{this.renderPerguntas(perguntas)}

				<RaisedButton label="Adicionar Pergunta" primary={true} onClick={this.handleAdicionarPergunta.bind(this)} />
			</div>
		);
	}
}

ConstruirPerguntas.propTypes = {
	onChange: React.PropTypes.func
};

export default ConstruirPerguntas;

