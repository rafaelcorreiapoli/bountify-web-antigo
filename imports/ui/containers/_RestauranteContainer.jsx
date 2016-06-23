import React from 'react';
import RestaurantePage from '/imports/ui/pages/RestaurantePage';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { createContainer } from 'meteor/react-meteor-data';


export default createContainer(({ params: { id } }) => {
  const restauranteHandle = Meteor.subscribe('restaurantes.single', { id });
  const loading = !restauranteHandle.ready();
  const restaurante = Restaurantes.findOne(id);
  return {
    loading,
    restaurante,
    restauranteId: id
  };
}, RestaurantePage);

