import React, { Component } from 'react';
import QuestionariosList from '/imports/ui/components/QuestionariosList';
import { Questionarios } from '/imports/api/questionarios/questionarios';
import { createContainer } from 'meteor/react-meteor-data';
import { setAtivo } from '/imports/api/questionarios/methods'
import NotificationSystem from 'react-notification-system'
class QuestionariosContainer extends Component {
  constructor(props) {
    super(props)

    this.handleOnSetAtivo = this.handleOnSetAtivo.bind(this)
  }

  handleOnSetAtivo({ _id, nome, ativa }) {
    const { notificationSystem } = this.refs
    setAtivo.call({questionarioId: _id}, (err, res) => {
      if (err) {
        console.log(err)
        notificationSystem.addNotification({
          message: `Algum erro ocorreu ${err.reason}.`,
          level: 'error'
        });
      } else {
        notificationSystem.addNotification({
          message: `Questionário ${nome} agora está ativo.`,
          level: 'success'
        });
      }
    })
  }

  render () {
    let { questionarios, restauranteId } = this.props
    let hiddenColumns = restauranteId ? ['restauranteId'] : [];
    return (
      <div className="ag-fresh" style={{height: 500, width: '100%'}}>
        <NotificationSystem ref="notificationSystem" />
        <QuestionariosList
          questionarios={questionarios}
          hiddenColumns={hiddenColumns}
          onSetAtivo={this.handleOnSetAtivo} />
      </div>
    )
  }
}


export default createContainer(({ restauranteId }) => {
  let handler
  let questionarios

  if (restauranteId) {
    handler = Meteor.subscribe('questionarios.porRestaurante', { restauranteId});
    questionarios = Questionarios.find({ restauranteId }).fetch();
  } else {
    handler = Meteor.subscribe('questionarios');
    questionarios = Questionarios.find().fetch();
  }

  questionariosReady = handler.ready();

  return {
    questionariosReady,
    questionarios
  };
}, QuestionariosContainer);
