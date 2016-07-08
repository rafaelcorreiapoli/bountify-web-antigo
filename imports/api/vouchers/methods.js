import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Random } from 'meteor/random';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { Vouchers } from './vouchers';


// export const insert = new ValidatedMethod({
// 	name: 'vouchers.insert',
// 	validate({restauranteId}) {
// 		check(restauranteId, String);
// 	},
// 	run({restauranteId}) {
// 		const restaurante = Restaurantes.findOne(restauranteId);
// 		const promocoes = Promocoes.find({
// 			restauranteId,
// 			ativa: true
// 		}, {
// 			fields: {
// 				_id: 1
// 			}
// 		}).fetch();
// 		const promocoesId = _.pluck(promocoes, '_id');
//
// 		const questionarioId = restaurante.questionarioId;
// 		const userId = Meteor.userId();
// 		const geradoEm = new Date();
// 		const token = Random.hexString(10);
//
// 		const diasParaVencer = 10; // TODO
//
// 		const validoAte = moment(geradoEm).add(diasParaVencer, 'days').toDate();
// 		const utilizado = false;
//
// 		const newCupom = {
// 			restauranteId,
// 			userId,
// 			promocoesId,
// 			token,
// 			geradoEm,
// 			validoAte,
// 			utilizado
// 		};
//
//
// 		let id =  Cupons.insert(newCupom);
// 		return {
// 			id,
// 			token
// 		}
// 	}
// });
