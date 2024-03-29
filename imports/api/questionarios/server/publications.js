import { Meteor } from 'meteor/meteor';
import { Questionarios } from '../questionarios';
import { Perguntas } from '/imports/api/perguntas/perguntas';
import { check } from 'meteor/check';

Meteor.publish('questionarios', function() {
	return Questionarios.find();
});



Meteor.publish('questionarios.porRestaurante', function({ restauranteId }) {
  check(restauranteId, String);
  return Questionarios.find({
    restauranteId
  });
});


Meteor.publishComposite('questionarios.single', function({ questionarioId }) {
  check(questionarioId, String);
  return {
    find() {
      return Questionarios.find({
        _id: questionarioId
      });
    },
    children: [{
      find(questionario) {
        const { _id } = questionario;
        return Perguntas.find({
          questionarioId: _id
        });
      }
    }]
  };
});
