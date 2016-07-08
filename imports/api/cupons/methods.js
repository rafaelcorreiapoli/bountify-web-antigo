import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Random } from 'meteor/random';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { Questionarios } from '/imports/api/questionarios/questionarios';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { Cupons } from './cupons';
import { moment } from 'meteor/momentjs:moment';

export const insert = new ValidatedMethod({
	name: 'cupons.insert',
	validate({restauranteId}) {
		check(restauranteId, String);
	},
	run({restauranteId}) {
		const restaurante = Restaurantes.findOne(restauranteId);
		const promocao = Promocoes.findOne({
			restauranteId,
			ativa: true
		}, {
			fields: {
				_id: 1
			}
		});
		const questionario = Questionarios.findOne({
			restauranteId,
			ativo: true
		}, {
			fields: {
				_id: 1
			}
		})
		const promocaoId = promocao._id
		const questionarioId = questionario._id
		const userId = Meteor.userId();
		const geradoEm = new Date();
		const token = Random.hexString(10);
		const diasParaVencer = 1; // TODO

		const validoAte = moment(geradoEm).add(diasParaVencer, 'days').toDate();
		const utilizado = false;

		const newCupom = {
			restauranteId,
			userId,
			promocaoId,
			questionarioId,
			token,
			geradoEm,
			validoAte,
			utilizado
		};

		console.log(newCupom)

		let id =  Cupons.insert(newCupom);
		return {
			id,
			token
		}
	}
});

export const claim = new ValidatedMethod({
	name: 'cupons.claim',
	validate({token}) {
		check(token, String);
	},
	run({token}) {
		const ownerId = Meteor.userId();
		const data = new Date();

		let cupom = Cupons.findOne({
			token
		});

		if (!cupom) {
			throw new Meteor.Error('cupons.claim.cupomNaoExiste');
		}
		if (cupom.ownerId) {
			if (cupom.ownerId === ownerId) {
				throw new Meteor.Error('cupons.claim.voceJaEDono');
			} else {
				throw new Meteor.Error('cupons.claim.cupomTemOutroDono');
			}
		}

		const { _id } = cupom;

		return Cupons.update({_id
		}, {
			$set: {
				ownerId,
				data
			}
		});
	}
});
