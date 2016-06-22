import React from 'react';
import CuponsList from '/imports/ui/components/CuponsList';
import { Cupons } from '/imports/api/cupons/cupons';
import { createContainer } from 'meteor/react-meteor-data';


export default createContainer(({ restauranteId }) => {
  const cuponsHandler = Meteor.subscribe('cupons.porRestaurante', { restauranteId });
  const loading = !cuponsHandler.ready();
  const cupons = Cupons.find({ restauranteId}).fetch();
  return {
    loading,
    cupons
  };
}, CuponsList);

