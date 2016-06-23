import React, { Component } from 'react';
import PromocoesList from '/imports/ui/components/PromocoesList';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { createContainer } from 'meteor/react-meteor-data';
import { toggleAtiva } from '/imports/api/promocoes/methods'
import NotificationSystem from 'react-notification-system'
class PromocoesContainer extends Component {
  constructor(props) {
    super(props)
    this.handleOnToggleAtiva = this.handleOnToggleAtiva.bind(this)
  }

  handleOnToggleAtiva({ _id, nome, ativa }) {
    const { notificationSystem } = this.refs
    toggleAtiva.call({promocaoId: _id}, (err, res) => {
      if (err) {
        console.log(err)
        notificationSystem.addNotification({
          message: `Algum erro ocorreu ${err.reason}.`,
          level: 'error'
        });
      } else {
        notificationSystem.addNotification({
          message: `Promoção ${nome} agora está ${!ativa ? 'ativa' : 'inativa'}.`,
          level: 'success'
        });
      }
    })
  }
  render () {
    let { promocoes } = this.props

    return (
      <div className="ag-fresh" style={{height: 500, width: '100%'}}>
        <NotificationSystem ref="notificationSystem" />
        <PromocoesList
           promocoes={promocoes}
           onToggleAtiva={this.handleOnToggleAtiva} />
      </div>
    )
  }
}


export default createContainer(({ restauranteId }) => {
  const handle = Meteor.subscribe('promocoes');
  const promocoesReady = handle.ready();
  const promocoes = Promocoes.find().fetch();
  return {
    promocoesReady,
    promocoes
  };
}, PromocoesContainer);
