import React from 'react';
import PromocaoPage from '/imports/ui/pages/PromocaoPage';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { createContainer } from 'meteor/react-meteor-data';


export default createContainer(({ params: { id } }) => {
  const promocaoHandle = Meteor.subscribe('promocoes.single', { id });
  const loading = !promocaoHandle.ready();
  const promocao = Promocoes.findOne(id);
  return {
    loading,
    promocao,
    promocaoId: id
  };
}, PromocaoPage);

