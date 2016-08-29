/* @flow */

import React from 'react';
import { Promocoes } from '/imports/api/promocoes/promocoes';
import { createContainer } from 'meteor/react-meteor-data';
import ProdutosContainer from '../ProdutosContainer'
class PromocaoContainer extends React.Component {
  render () {
    const { promocao, promocaoId, promocaoReady } = this.props
    console.log(promocao)
    return (
      <div>
        {
          promocaoReady ?
            <div>
              <h3>{promocao.nome}</h3>
              <ProdutosContainer promocaoId={promocaoId} />
            </div>
          :
          <span>Loading...</span>
        }

      </div>
    )
  }
}

export default createContainer(({ params: { promocaoId } }) => {
  console.log(promocaoId)
  const handler = Meteor.subscribe('promocoes.single', { promocaoId });
  const promocaoReady = handler.ready();
  const promocao = Promocoes.findOne(promocaoId);
  return {
    promocaoReady,
    promocao,
    promocaoId
  };
}, PromocaoContainer);
