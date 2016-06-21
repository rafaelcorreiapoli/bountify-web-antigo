import React from 'react';
import RestaurantesPage from '/imports/ui/pages/RestaurantesPage';
import { Restaurantes } from '/imports/api/restaurantes/restaurantes';
import { createContainer } from 'meteor/react-meteor-data';

export default createContainer(({ params: { id } }) => {
  const restaurantesHandle = Meteor.subscribe('restaurantes');
  const loading = !restaurantesHandle.ready();
  const restaurantes = Restaurantes.find().fetch();
  return {
    loading,
    restaurantes
  };
}, RestaurantesPage);

