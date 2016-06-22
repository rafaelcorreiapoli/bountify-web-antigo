import React from 'react';
import PromocoesList from '/imports/ui/components/PromocoesList';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { createContainer } from 'meteor/react-meteor-data';


const PromocoesContainer = React.createClass({
  render () {
    let { promocoes } = this.props

    return (
      <div className="ag-fresh" style={{height: 500, width: '100%'}}>
        <PromocoesList promocoes={promocoes} />
      </div>
    )
  }
})


export default createContainer(({ restauranteId }) => {
  const handle = Meteor.subscribe('promocoes');
  const promocoesReady = handle.ready();
  const promocoes = Promocoes.find().fetch();
  return {
    promocoesReady,
    promocoes
  };
}, PromocoesContainer);
