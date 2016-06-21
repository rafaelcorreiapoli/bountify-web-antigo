import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { RestauranteSchema } from './schema';
import { Restaurantes } from './restaurantes';

export const insert = new ValidatedMethod({
	name: 'restaurantes.insert',
	validate: RestauranteSchema.validator(),
	run(data) {
		return Restaurantes.insert(data);
	}
});
