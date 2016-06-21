import { Meteor } from 'meteor/meteor';
import { Cupons } from '../cupons';
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

Meteor.publishComposite('cupons.single', function({ id }) {
  check(id, String);
  return {
    find() {
      return Cupons.find({
        _id: id
      });
    },
  };
});
