import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { RestauranteSchema } from './schema';
import { Restaurantes } from './restaurantes';

export const insert = new ValidatedMethod({
	name: 'restaurantes.insert',
	validate: RestauranteSchema.validator(),
	run(data) {
		Meteor.isServer && Meteor._sleepForMs(1000)
		console.log('ok!')
		return Restaurantes.insert(data);
	}
});
