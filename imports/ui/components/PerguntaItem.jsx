import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { TIPOS_PERGUNTA } from '/imports/api/perguntas/schema';
import RaisedButton from 'material-ui/RaisedButton';
import ConstruirOpcoes from './ConstruirOpcoes';
const PerguntaItem =
	({ index, tipo, titulo, opcoes, onChangeTipo, onChangeTitulo, onChangeOpcoes, onRemovePergunta }) => {

	const handleOnChangeOpcao = (novasOpcoes) => {
		console.log(novasOpcoes);
		onChangeOpcoes(index, novasOpcoes);
	};

  const renderOpcoes = () => {
    if (tipo === TIPOS_PERGUNTA.CHECKBOX || tipo === TIPOS_PERGUNTA.SELECT) {
    	return (
    		<ConstruirOpcoes onChange={handleOnChangeOpcao} />
    	);
    }
    return null;
  };

  return (
    <div>
      <SelectField value={tipo} onChange={(evt, idx, value) => onChangeTipo(index, value)}>
        <MenuItem value={TIPOS_PERGUNTA.TEXT} primaryText="Text" />
        <MenuItem value={TIPOS_PERGUNTA.CHECKBOX} primaryText="Checkbox" />
        <MenuItem value={TIPOS_PERGUNTA.SELECT} primaryText="Select" />
        <MenuItem value={TIPOS_PERGUNTA.RATE} primaryText="Rating" />
      </SelectField>

	    <TextField
	    	onChange={e => onChangeTitulo(index, e.target.value)}
	      hintText="Título"
	      value={titulo}
	    />

	    {renderOpcoes()}
	    <RaisedButton label="Remover" secondary={true} onClick={() => onRemovePergunta(index)} />
		</div>
  );
};
export default PerguntaItem;
