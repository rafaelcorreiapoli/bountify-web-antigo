import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const TIPOS_PERGUNTA = {
	TEXT: 'text',
	CHECKBOX: 'checkbox',
	SELECT: 'select',
	RATE: 'rate'
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
		type: String
	},
	config: {
		type: Object,
		blackbox: true
	}
});
