import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const RestauranteSchema = new SimpleSchema({
	nome: {
		type: String
	},
	categoria: {
		type: String
	},
	nota: {
		type: Number,
		decimal: true
	},
	lat: {
		type: Number,
		decimal: true,
		optional: true
	},
	lng: {
		type: Number,
		decimal: true,
		optional: true
	},
	logoUrl: {
		type: String
	},
	questionarioId: {
		type: String
	}
});

