import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Random } from 'meteor/random';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { Vouchers } from './vouchers';

export const escolherProduto = new ValidatedMethod({
  name: 'vouchers.escolherProduto',
  validate({ voucherId, produtoId }) {
    check(voucherId, String)
    check(produtoId, String)
  },
  run({ voucherId, produtoId }) {
    return Vouchers.update({
      _id: voucherId
    }, {
      $set: {
        produtoSelecionado: produtoId
      }
    })
  }
})
export const validar = new ValidatedMethod({
  name: 'vouchers.validar',
  validate({ token }) {
    check(token, String)
  },
  run({ token }) {
    Meteor._sleepForMs(2500)
    
    const voucher = Vouchers.findOne({
      token,
      utilizado: false
    })

    if (!voucher) {
      throw new Meteor.Error('vouchers.validar.tokenInvalido')
    }

    let result = Vouchers.update({
      _id: voucher._id
    }, {
      $set: {
        utilizado: true,
        utilizadoEm: new Date(),
        validadoPor: Meteor.userId()
      }
    })

    Meteor.users.update({
      _id: Meteor.userId()
    }, {
      $inc: {
        vouchersLidos: 1
      }
    })


    return {
      voucherId: voucher._id
    };
  }
})

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
