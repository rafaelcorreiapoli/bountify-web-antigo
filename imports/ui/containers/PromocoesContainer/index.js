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
    this.handleOnPromocaoClick = this.handleOnPromocaoClick.bind(this)
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

  handleOnPromocaoClick({ _id}) {
    const { router } = this.context
    const { restauranteId } = this.props
    router.push(`/restaurante/${restauranteId}/promocao/${_id}`)
  }

  render () {
    let { promocoes, promocoesReady } = this.props

    return (
      <div className="ag-fresh" style={{height: 500, width: '100%'}}>
        <NotificationSystem ref="notificationSystem" />
        { promocoesReady ?
        <PromocoesList
           promocoes={promocoes}
           onPromocaoClick={this.handleOnPromocaoClick}
           onToggleAtiva={this.handleOnToggleAtiva} />
         :
         <span>Loading...</span>
        }
      </div>
    )
  }
}


PromocoesContainer.contextTypes =  {
  router: React.PropTypes.object
}


export default createContainer(({ restauranteId }) => {
  let handler
  let promocoes
  console.log(restauranteId);
  if (restauranteId) {
    handler = Meteor.subscribe('promocoes.porRestaurante', { restauranteId});
    promocoes = Promocoes.find({ restauranteId }).fetch();
  } else {
    handler = Meteor.subscribe('promocoes');
    promocoes = Promocoes.find().fetch();
  }

  promocoesReady = handler.ready();
  return {
    promocoesReady,
    promocoes
  };
}, PromocoesContainer);
