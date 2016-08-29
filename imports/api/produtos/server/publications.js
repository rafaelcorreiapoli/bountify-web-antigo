import { Meteor } from 'meteor/meteor';
import { Produtos } from '../../produtos/produtos';
import { check } from 'meteor/check';

Meteor.publishComposite('produtos.porPromocao', function({ promocaoId }) {
  check(promocaoId, String);
  return {
    find() {
      return Produtos.find({
        promocaoId
      });
    }
  };
});
