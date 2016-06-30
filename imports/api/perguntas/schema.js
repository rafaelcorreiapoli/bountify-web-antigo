import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const TIPOS_PERGUNTA = {
	TEXT: 'text',
	CHECKBOX: 'checkbox',
	SELECT: 'select',
	RATE: 'rate',
	SLIDER: 'slider',
	IMAGE_SELECT: 'imageSelect'
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
	widget: {
		type: String
	},
	config: {
		type: Object,
		blackbox: true
	}
});
