import { Meteor } from 'meteor/meteor';
import { Promocoes } from '../promocoes';
import { Questionarios } from '../../questionarios/questionarios';
import { Perguntas } from '../../perguntas/perguntas';
import { Restaurantes } from '../../restaurantes/restaurantes';
import { check } from 'meteor/check';



Meteor.publishComposite('promocoes', function() {
  return {
    find() {
      return Promocoes.find();
    },
    children: [{
      find(promocao) {
        const { questionarioId } = promocao;
        return Questionarios.find({
          _id: questionarioId
        })
      }
    }, {
      find(promocao) {
        const { restauranteId } = promocao;
        return Restaurantes.find({
          _id: restauranteId
        })
      }
    }]
  };
});

Meteor.publishComposite('promocoes.porRestaurante', function({ restauranteId }) {
  check(restauranteId, String);
  return {
    find() {
      // Find top ten highest scoring posts
      return Restaurantes.find({
        _id: restauranteId
      }, {
        fields: {
          logoUrl: 1
        }
      });
    },
    children: [{
      find(restaurante) {
        const { _id } = restaurante;
        return Promocoes.find({
          restauranteId: _id
        });
      },
      children: [{
        find(promocao) {
          const { questionarioId } = promocao;
          return Questionarios.find({
            _id: questionarioId
          })
        }
      }]
    }]
  };
});


Meteor.publishComposite('promocoes.single', function({ id }) {
  check(id, String);
  return {
    find() {
      return Promocoes.find({
        _id: id
      });
    },
  };
});
