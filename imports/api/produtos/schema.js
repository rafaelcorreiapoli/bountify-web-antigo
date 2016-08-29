import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Produtos } from './produtos'

export const ProdutoSchema = new SimpleSchema({
	restauranteId: {
		type: String,
		optional: true
	},
	promocaoId: {
		type: String
	},
	nome: {
		type: String
	},
	imagemUrl: {
		type: String
	},
	desconto: {
		type: Number,
		decimal: true
	},
	observacao: {
		type: String,
		optional: true
	}
});


export const attachSchema = () => {
    Produtos.attachSchema(ProdutoSchema)
};
