import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { PromocaoSchema } from './schema';
import { Promocoes } from './promocoes';

export const insert = new ValidatedMethod({
	name: 'promocoes.insert',
	validate: PromocaoSchema.validator(),
	run(data) {
		return Promocoes.insert(data);
	}
});
