import React, { Component } from 'react';
import OpcaoItem from './OpcaoItem';
import RaisedButton from 'material-ui/RaisedButton';

class ConstruirOpcoes extends Component {
	constructor(props) {
		super(props);

		this.state = {
			opcoes: []
		};

		this.handleChangeValor = this.handleChangeValor.bind(this);
		this.handleChangeTexto = this.handleChangeTexto.bind(this);
		this.handleRemoveOpcao = this.handleRemoveOpcao.bind(this);
		this.handleAdicionaOpcao = this.handleAdicionaOpcao.bind(this);
	}

	alertUpdate() {
		const { onChange } = this.props;
		onChange(this.state.opcoes);
	}

	handleChangeValor(index, value) {
		const { opcoes } = this.state;
		opcoes[index].valor = value;
		this.setState({
			opcoes
		});
		this.alertUpdate();
	}

	handleChangeTexto(index, value) {
		const { opcoes } = this.state;
		opcoes[index].texto = value;
		this.setState({
			opcoes
		});
		this.alertUpdate();
	}

	handleRemoveOpcao(index) {
		const { opcoes } = this.state;
		opcoes.splice(index, 1);
		this.setState({
			opcoes
		});
		this.alertUpdate();
	}

	handleAdicionaOpcao() {
		const { opcoes } = this.state;
		opcoes.push({
			texto: '',
			valor: ''
		});
		this.setState({
			opcoes
		});
		this.alertUpdate();
	}

	renderOpcoes(opcoes) {
		return opcoes.map((opcao, i) => (
			<OpcaoItem
				key={i}
				index={i}
				{...opcao}
				onChangeValor={this.handleChangeValor}
				onChangeTexto={this.handleChangeTexto}
				onRemoveOpcao={this.handleRemoveOpcao}
				/>
		));
	}
	render() {
		const { opcoes } = this.state;

		return (
			<div>
				{this.renderOpcoes(opcoes)}

				<RaisedButton label="Adicionar Opção" primary={true} onClick={this.handleAdicionaOpcao} />
			</div>
		);
	}
}

ConstruirOpcoes.propTypes = {
	onChange: React.PropTypes.func
};

export default ConstruirOpcoes;

