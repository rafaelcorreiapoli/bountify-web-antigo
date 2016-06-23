import React from 'react';
import CupomPage from '/imports/ui/pages/CupomPage';
import { Cupons } from '/imports/api/cupons/cupons';
import { createContainer } from 'meteor/react-meteor-data';


export default createContainer(({ params: { id } }) => {
  const cupomHandler = Meteor.subscribe('cupons.single', { id });
  const loading = !cupomHandler.ready();
  const cupom = Cupons.findOne(id);
  return {
    loading,
    cupom,
    cupomId: id
  };
}, CupomPage);

