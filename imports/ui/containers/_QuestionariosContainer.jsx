import React from 'react';
import QuestionariosList from '/imports/ui/components/QuestionariosList';
import { Questionarios } from '/imports/api/questionarios/questionarios';
import { createContainer } from 'meteor/react-meteor-data';


export default createContainer(({ restauranteId }) => {
  const questionariosHandler = Meteor.subscribe('questionarios.porRestaurante', { restauranteId });
  const loading = !questionariosHandler.ready();
  const questionarios = Questionarios.find({ restauranteId}).fetch();
  return {
    loading,
    questionarios
  };
}, QuestionariosList);

