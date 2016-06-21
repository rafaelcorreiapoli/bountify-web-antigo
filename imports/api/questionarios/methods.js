import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { QuestionarioSchema } from './schema';
import { PerguntaSchema } from '../perguntas/schema';
import { Questionarios } from './questionarios';
import { Perguntas } from '../perguntas/perguntas';
import { check } from 'meteor/check';

export const insert = new ValidatedMethod({
	name: 'questionarios.insert',
	validate({questionario, perguntas}) {
		console.log(questionario);
		console.log(perguntas);
		check(questionario, QuestionarioSchema);
		check(perguntas, [PerguntaSchema.pick(['titulo', 'tipo', 'opcoes', 'opcoes.$', 'maxOpcoes'])]);
	},
	run({questionario, perguntas}) {
		let questionarioId = Questionarios.insert(questionario);
		console.log(questionarioId);
		perguntas.forEach(pergunta => {
			Perguntas.insert({
				questionarioId,
				...pergunta
			});
		});
	}
});
