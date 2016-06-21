import React from 'react';
import RestauranteShow from '/imports/ui/components/RestauranteShow';
import PromocoesContainer from '../containers/PromocoesContainer';
import QuestionariosContainer from '../containers/QuestionariosContainer';
import PromocoesAdd from '../components/PromocoesAdd';
import QuestionariosAdd from '../components/QuestionariosAdd';
import CuponsContainer from '../containers/CuponsContainer';
import GerarCupom from '../components/GerarCupom';

export default class RestaurantePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	let {restaurante, loading, restauranteId} = this.props;
    return (
      <div>
      	{loading ? 'Loading' : <RestauranteShow {...restaurante} />}
        <h2>Criar Promoção</h2>
        <PromocoesAdd restauranteId={restauranteId} />
        <h2>Criar Questionário</h2>
        <QuestionariosAdd restauranteId={restauranteId} />
        <h2>Promoções</h2>
        <PromocoesContainer restauranteId={restauranteId} />
        <h2>Questionários</h2>
        <QuestionariosContainer restauranteId={restauranteId} />
        <h2>Cupons</h2>
        <CuponsContainer restauranteId={restauranteId} />
        <h2> Gerar Cupom </h2>
        <GerarCupom restauranteId={restauranteId} />
      </div>
    );
  }
}
