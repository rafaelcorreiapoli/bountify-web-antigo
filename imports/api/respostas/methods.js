import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { RespostaSchema } from './schema';
import { Respostas } from './respostas';
import { Perguntas } from '/imports/api/perguntas/perguntas';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { Cupons } from '/imports/api/cupons/cupons';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { Questionarios } from '/imports/api/questionarios/questionarios';
import { TIPOS_PERGUNTA } from '/imports/api/perguntas/schema';

export const processarRespostas = new ValidatedMethod({
	name: 'respostas.processarRespostas',
	validate({respostas, cupomId}) {
		check(respostas, [{
			perguntaId: String,
			val: Match.OneOf(Number, [Number], String, [String], Boolean, [Boolean]),
		}]);
		check(cupomId, String);
	},
	run({respostas, cupomId}) {
		let userId = Meteor.userId();
		console.log(userId)
		let data = new Date();

		// Checar cupom
		const cupom = Cupons.findOne({
			_id: cupomId,
			ownerId: userId,
			utilizado: false,
			validoAte: {
				$gte: data
			}
		})

		console.log(cupomId)
		console.log(cupom)
		if (!cupom) {
			throw new Meteor.Error('respostas.processarRespostas.cupomInvalido')
		}

		const { questionarioId, promocaoId } = cupom


		// Conferir se respondeu tudo que precisava
		const respostasNecessarias = Perguntas.find({
			questionarioId
		}, {
			fields: {
				_id: 1
			}
		});

		respostasNecessarias.forEach(respostaNecessaria => {
			const temResposta = respostas.find(resposta => resposta.perguntaId === respostaNecessaria._id);
			if (!temResposta) {
				throw new Meteor.Error('respostas.processarRespostas.respostasInsuficientes');
			}
		});

		respostas.forEach((resposta) => {
			let { perguntaId, val } = resposta;

			//	Checar se a pergunta realmente existe
			let pergunta = Perguntas.findOne({
				_id: perguntaId,
				questionarioId: questionarioId
			});

			if (!pergunta) {
				throw new Meteor.Error('respostas.processarRespostas.perguntaNaoEncontrada');
			}

			let { tipo } = pergunta;
			//	Transformar val em conteudo de resposta
			let conteudo;
			switch (tipo) {
				case (TIPOS_PERGUNTA.TEXT):
					conteudo = {
						text: val
					};
					break;
				case (TIPOS_PERGUNTA.CHECKBOX):
					conteudo = {
						array: val
					};
					break;
				case (TIPOS_PERGUNTA.SELECT):
					conteudo = {
						text: val
					};
					break;
				case (TIPOS_PERGUNTA.RATE):
					conteudo = {
						number: val
					};
					break;
				case (TIPOS_PERGUNTA.SLIDER):
					conteudo = {
						number: val
					};
					break;
				default:
					throw new Meteor.Error('respostas.processarRespostas.tipoDesconhecido');
			}

			//	Gerar objeto de resposta

			const obj = {
				perguntaId,
				questionarioId,
				userId,
				tipo,
				conteudo,
				data,
				promocaoId
			};

			//	Guardar no banco de dados
			Respostas.insert(obj);
		});

		const {_id } = cupom;
		Cupons.update({
			_id
		}, {
			$set: {
				utilizado: true,
				utilizadoEm: data
			}
		});
	}
});
