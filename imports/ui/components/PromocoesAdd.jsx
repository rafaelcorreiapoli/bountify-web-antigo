import { insert } from '/imports/api/promocoes/methods';

import React from 'react';
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle } from 'formsy-material-ui/lib';

const PromocoesAdd = React.createClass({
  getInitialState() {
    return {
      canSubmit: false,
      snackOpen: false,
      snackMessage: ''
    };
  },
	errorMessages: {
    numericError: 'Por favor coloque um número válido',
    urlError: 'Por favor coloque uma URL válida',
    isDateError: 'Por favor coloque uma data válida'
  },

  styles: {
    paperStyle: {
      width: 400,
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
    console.log(this);
    data.restauranteId = this.props.restauranteId;
    insert.call(data, (err, res) => {
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

  render() {
    let {paperStyle, switchStyle, submitStyle, inputStyle } = this.styles;
    let { wordsError, numericError, urlError, isDateError } = this.errorMessages;
    return (
      <div>
  	    <Paper style={paperStyle}>
  	    	<h3>Nova Promoção</h3>
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
  	          hintText="Big mac + Batatinha"
  	          floatingLabelText="Nome"
  	        />
  	        <FormsyText
  	        	style={inputStyle}
  	          name="descricao"
  	          required
  	          hintText="Uma breve descrição"
  	          floatingLabelText="Descrição"
  	        />
  	        <FormsyDate
  	        	style={inputStyle}
  	          name="validoAte"
              required
  	          hintText="13/06/2016"
  	          floatingLabelText="Valido Até"
  	        />
            <FormsyText
              style={inputStyle}
              name="imagemUrl"
              validations="isUrl"
              validationError={urlError}
              required
              hintText="http://..."
              floatingLabelText="Imagem"
            />
  	        <RaisedButton
  	          style={submitStyle}
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

export default PromocoesAdd;
