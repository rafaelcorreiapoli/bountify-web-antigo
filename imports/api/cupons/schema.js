import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const CupomSchema = new SimpleSchema({
	restauranteId: {
		type: String
	},
	userId: {
		type: String
	},
	promocoesId: {
		type: [String]
	},
	token: {
		type: String
	},
	geradoEm: {
		type: Date
	},
	validoAte: {
		type: Date
	},
	ownerId: {
		type: String,
		optional: true
	}
});

