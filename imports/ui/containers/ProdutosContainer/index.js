import React, { Component } from 'react';
import ProdutosList from '/imports/ui/components/ProdutosList';
import ProdutosAdd from '/imports/ui/containers/ProdutosAdd';
import { Produtos } from '/imports/api/produtos/produtos';
import { createContainer } from 'meteor/react-meteor-data';



class ProdutosContainer extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    let { produtos, promocaoId } = this.props

    return (
      <div>
        <ProdutosList
          produtos={produtos}
        />
        <ProdutosAdd
          promocaoId={promocaoId}
        />
      </div>
    )
  }
}


export default createContainer(({ promocaoId }) => {
  console.log('promocaoId', promocaoId)
  const handler = Meteor.subscribe('produtos.porPromocao', { promocaoId});
  const produtosReady = handler.ready()
  const produtos = Produtos.find({ promocaoId }).fetch();
  return {
    produtosReady,
    produtos
  };
}, ProdutosContainer);
