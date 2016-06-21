import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const TIPOS_PERGUNTA = {
	TEXT: 0,
	CHECKBOX: 1,
	SELECT: 2,
	RATE: 3
};

export const PerguntaSchema = new SimpleSchema({
	questionarioId: {
		type: String
	},
	ordem: {
		type: Number,
		optional: true
	},
	titulo: {
		type: String
	},
	tipo: {
		type: Number
	},
	opcoes: {
		type: [Object],
		blackbox: true,
		optional: true
	},
	maxOpcoes: {
		type: Number,
		optional: true
	}
});

