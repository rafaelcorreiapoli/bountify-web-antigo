import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { ProdutoSchema } from './schema';
import { Produtos } from './produtos';

export const insert = new ValidatedMethod({
	name: 'produtos.insert',
	validate: ProdutoSchema.validator(),
	run(data) {
		return Produtos.insert(data);
	}
});
