import React from 'react';
import PromocoesList from '/imports/ui/components/PromocoesList';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { createContainer } from 'meteor/react-meteor-data';


export default createContainer(({ restauranteId }) => {
  const promocoesHandler = Meteor.subscribe('promocoes');
  const loading = !promocoesHandler.ready();
  const promocoes = Promocoes.find().fetch();
  return {
    loading,
    promocoes
  };
}, PromocoesList);
