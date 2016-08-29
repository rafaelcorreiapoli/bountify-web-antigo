import { Meteor } from 'meteor/meteor';
import { Promocoes } from '../promocoes';
import { Questionarios } from '../../questionarios/questionarios';
import { Perguntas } from '../../perguntas/perguntas';
import { Restaurantes } from '../../restaurantes/restaurantes';
import { Produtos } from '/imports/api/produtos/produtos';
import { check } from 'meteor/check';


Meteor.publishComposite('promocoes.ativas', function() {
  return {
    find() {
      return Promocoes.find({ativa: true});
    },
    children: [{
      find(promocao) {
        const { restauranteId } = promocao
        return Restaurantes.find({
          _id: restauranteId
        })
      }
    }]
  }
})

Meteor.publishComposite('promocoes', function() {
  return {
    find() {
      return Promocoes.find();
    },
    children: [{
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


Meteor.publishComposite('promocoes.single', function({ promocaoId }) {
  check(promocaoId, String);
  return {
    find() {
      return Promocoes.find({
        _id: promocaoId
      });
    },
    children: [{
      find(promocao) {
        return Produtos.find({
          promocaoId: promocao._id
        })
      }
    }, {
      find(promocao) {
        return Restaurantes.find({
          _id: promocao.restauranteId
        })
      },
      children: [{
        find(restaurante) {
          return Questionarios.find({
            restauranteId: restaurante._id,
            ativo: true
          })
        }
      }]
    }],
  };
});
