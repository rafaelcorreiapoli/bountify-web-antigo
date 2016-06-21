import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { RespostaSchema } from './schema';
import { Respostas } from './respostas';
import { Perguntas } from '/imports/api/perguntas/perguntas';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { Questionarios } from '/imports/api/questionarios/questionarios';
import { TIPOS_PERGUNTA } from '/imports/api/perguntas/schema';

export const processarRespostas = new ValidatedMethod({
	name: 'respostas.processarRespostas',
	validate({respostas, promocaoId, questionarioId}) {
		check(respostas, [{
			perguntaId: String,
			val: Match.OneOf(Number, [Number], String, [String], Boolean, [Boolean]),
		}]);
		check(promocaoId, String);
		check(questionarioId, String);
	},
	run({respostas, promocaoId, questionarioId}) {
		let userId = Meteor.userId();
		let data = new Date();
		//
		//	Verificar se usuário já respondeu esse questionario para essa promoção
		//
		let questionarioJaRespondido = Questionarios.findOne({
			_id: questionarioId,
			'responderam.userId': userId,
			'responderam.promocaoId': promocaoId
		});

		if (questionarioJaRespondido) {
			throw new Meteor.Error('respostas.processarRespostas.questionarioJaRespondido');
		}

		//
		// Conferir se respondeu tudo que precisava
		//
		let respostasNecessarias = Perguntas.find({
			questionarioId
		}, {
			fields: {
				_id: 1
			}
		});
		respostasNecessarias.forEach((respostaNecessaria) => {
			let temResposta = respostas.find(resposta => resposta.perguntaId === respostaNecessaria._id);
			if (!temResposta) {
				throw new Meteor.Error('respostas.processarRespostas.respostaNaoEncontrada');
			}
		});

		//
		// Checar se a promocação existe e é consistente
		//
		let promocao = Promocoes.findOne(promocaoId);
		if (!promocao) throw new Meteor.Error('respostas.processarRespostas.promocaoNaoEncontrada');
		if (promocao.questionarioId !== questionarioId) {
			throw new Meteor.Error('respostas.processarResposta.questionarioInconsistente');
		}

		respostas.forEach((resposta) => {
			let { perguntaId, val } = resposta;

			//
			//	Checar se a pergunta realmente existe
			//
			let pergunta = Perguntas.findOne({
				_id: perguntaId,
				questionarioId: questionarioId
			});

			if (!pergunta) throw new Meteor.Error('respostas.processarRespostas.perguntaNaoEncontrada');
			let { tipo } = pergunta;


			//
			//	Transformar val em conteudo de resposta
			//
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
				default:
					throw new Meteor.Error('respostas.processarRespostas.tipoDesconhecido');
			}

			//
			//	Gerar objeto de resposta
			//

			const obj = {
				perguntaId,
				questionarioId,
				userId,
				tipo,
				conteudo,
				data,
				promocaoId
			};

			//
			//	Guardar no banco de dados
			//
			Respostas.insert(obj);
		});

		let questionarioRespondido = {
			userId,
			promocaoId,
			data
		};

		Questionarios.update({
			_id: questionarioId
		}, {
			$push: {
				responderam: questionarioRespondido
			}
		});
	}
});
