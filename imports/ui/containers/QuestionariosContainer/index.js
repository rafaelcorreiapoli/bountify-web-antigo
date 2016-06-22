import React from 'react';
import QuestionariosList from '/imports/ui/components/QuestionariosList';
import { Questionarios } from '/imports/api/questionarios/questionarios';
import { createContainer } from 'meteor/react-meteor-data';

const QuestionariosContainer = React.createClass({
  render () {
    let { questionarios } = this.props

    return (
      <div className="ag-fresh" style={{height: 500, width: '100%'}}>
        <QuestionariosList questionarios={questionarios} />
      </div>
    )
  }
})


export default createContainer(({ restauranteId }) => {
  const handler = Meteor.subscribe('questionarios');
  const questionariosReady = handler.ready();
  const questionarios = Questionarios.find().fetch();
  return {
    questionariosReady,
    questionarios
  };
}, QuestionariosContainer);
