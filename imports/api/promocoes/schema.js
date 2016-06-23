import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const PromocaoSchema = new SimpleSchema({
	restauranteId: {
		type: String
	},
	questionarioId: {
		type: String,
		optional: true
	},
	nome: {
		type: String
	},
	validoAte: {
		type: Date
	},
	descricao: {
		type: String
	},
	imagemUrl: {
		type: String
	},
	ativa: {
		type: Boolean,
		optional: true,
		autoValue: () => false
	}
});
