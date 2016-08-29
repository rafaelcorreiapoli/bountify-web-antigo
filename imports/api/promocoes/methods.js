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

export const toggleAtiva = new ValidatedMethod({
	name: 'promocoes.toggleAtiva',
	validate({promocaoId}) {
		check(promocaoId, String)
	},
	run({promocaoId}) {
		let promocao = Promocoes.findOne(promocaoId)
		return Promocoes.update({
			_id: promocaoId
		}, {
			$set: {
				ativa: !promocao.ativa
			}
		})
	}
})
