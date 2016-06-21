import { insert } from '/imports/api/questionarios/methods';

import React from 'react';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

import ConstruirPerguntas from './ConstruirPerguntas';

const QuestionariosAdd = React.createClass({
  getInitialState() {
    return {
      canSubmit: false,
      snackOpen: false,
      snackMessage: '',
      perguntas: []
    };
  },
	errorMessages: {
    numericError: 'Por favor coloque um número válido',
    urlError: 'Por favor coloque uma URL válida',
    isDateError: 'Por favor coloque uma data válida'
  },

  styles: {
    paperStyle: {
      width: 800,
      margin: 'auto',
      padding: 20,
    },
    inputStyle: {
    	width: '100%'
    },
    submitStyle: {
      marginTop: 32,
    },
  },

  enableButton() {
    this.setState({
      canSubmit: true,
    });
  },

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  },

  submitForm(data) {
    data.tempoMedio = Number(data.tempoMedio);
    data.restauranteId = this.props.restauranteId;
    const {perguntas } = this.state;
    
    insert.call({questionario: data, perguntas}, (err, res) => {
      let message;
      if (err) {
        message = `Algo errado aconteceu: ${err.toString()}`;
      } else {
        message = 'Promoção criada';
      }

      this.setState({
        snackOpen: true,
        snackMessage: message
      });
    });
  },

  notifyFormError(data) {
    console.error('Form error:', data);
  },

  handleRequestClose() {
    this.setState({
      snackOpen: false,
    });
  },

  handlePerguntasChange(perguntas) {
    console.log(perguntas);
    this.setState({
      perguntas
    });
  },

  render() {
    let {paperStyle, switchStyle, submitStyle, inputStyle } = this.styles;
    let { wordsError, numericError, urlError, isDateError } = this.errorMessages;
    return (
      <div>
  	    <Paper style={paperStyle}>
  	    	<h3>Novo Questionário</h3>
  	      <Formsy.Form
  	        onValid={this.enableButton}
  	        onInvalid={this.disableButton}
  	        onValidSubmit={this.submitForm}
  	        onInvalidSubmit={this.notifyFormError}
  	      >
  	        <FormsyText
  	        	style={inputStyle}
  	          name="nome"
  	          required
  	          hintText="Questionário para pesquisa de satisfação"
  	          floatingLabelText="Nome"
  	        />
  	        <FormsyText
  	        	style={inputStyle}
  	          name="tempoMedio"
  	          required
  	          hintText="5"
  	          floatingLabelText="Tempo médio (min)"
  	        />

            <ConstruirPerguntas onChange={this.handlePerguntasChange} />
            <br />
            <RaisedButton
              type="submit"
              label="Submit"
              disabled={!this.state.canSubmit}
            />
  	      </Formsy.Form>
  	    </Paper>
        <Snackbar
          open={this.state.snackOpen}
          message={this.state.snackMessage}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
});

export default QuestionariosAdd;
