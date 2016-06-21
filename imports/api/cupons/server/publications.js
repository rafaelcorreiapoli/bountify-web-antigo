import { Meteor } from 'meteor/meteor';
import { Cupons } from '../cupons';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { check } from 'meteor/check';

Meteor.publishComposite('cupons.porRestaurante', function({ restauranteId }) {
  check(restauranteId, String);
  return {
    find() {
      return Cupons.find({
        restauranteId
      });
    }
  };
});

Meteor.publishComposite('cupons.meusCupons', function() {
  const userId = this.userId
  return {
    find() {
      return Cupons.find({
        ownerId: userId
      });
    },
  };
});


Meteor.publishComposite('cupons.single', function({ id }) {
  check(id, String);
  return {
    find() {
      return Cupons.find({
        _id: id
      });
    },
    children: [{
      find(cupom) {
        const { restauranteId } = cupom;
        return Restaurantes.find({
          _id: restauranteId
        }, {
          fields: {
            name: 1,
            logoUrl: 1
          }
        });
      }
    }]
  };
});
