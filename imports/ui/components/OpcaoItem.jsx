import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { TIPOS_PERGUNTA } from '/imports/api/perguntas/schema';
import RaisedButton from 'material-ui/RaisedButton';

const OpcaoItem = ({ index, valor, texto, onChangeValor, onChangeTexto, onRemoveOpcao }) => {
  return (
    <div>
	    <TextField
	    	onChange={e => onChangeValor(index, e.target.value)}
	      hintText="Valor"
	      value={valor}
	    />
      <TextField
        onChange={e => onChangeTexto(index, e.target.value)}
        hintText="Texto"
        value={texto}
      />

	    <RaisedButton label="Remover" secondary={true} onClick={() => onRemoveOpcao(index)} />
		</div>
  );
};
export default OpcaoItem;
