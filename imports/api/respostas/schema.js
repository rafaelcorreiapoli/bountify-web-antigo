import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const RespostaSchema = new SimpleSchema({
	questionarioId: {
		type: String
	},
	perguntaId: {
		type: String
	},
	promocaoId: {
		type: String
	},
	userId: {
		type: String
	},
	tipo: {
		type: String
	},
	conteudo: {
		type: Object,
		blackbox: true
	},
	data: {
		type: Date
	}
});
