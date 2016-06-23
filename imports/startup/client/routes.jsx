import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// route components
import AppContainer from '/imports/ui/containers/AppContainer';
import Contacts from '/imports/ui/pages/Contacts';
import Requests from '/imports/ui/pages/Requests';
import Home from '/imports/ui/pages/Home';
import SignIn from '/imports/ui/pages/SignIn';
import Guest from '/imports/ui/layouts/Guest';
import RestaurantesContainer from '/imports/ui/containers/RestaurantesContainer';

import RestauranteContainer from '/imports/ui/containers/RestauranteContainer';
import PromocaoContainer from '/imports/ui/containers/PromocaoContainer';

import UsuariosContainer from '/imports/ui/containers/UsuariosContainer';
import VouchersContainer from '/imports/ui/containers/VouchersContainer';
import PromocoesContainer from '/imports/ui/containers/PromocoesContainer';
import QuestionariosContainer from '/imports/ui/containers/QuestionariosContainer';
import CuponsContainer from '/imports/ui/containers/CuponsContainer';
import RestaurantesAdd from '/imports/ui/containers/RestaurantesAdd';
import PromocoesAdd from '/imports/ui/containers/PromocoesAdd';
import QuestionariosAdd from '/imports/ui/containers/QuestionariosAdd';
import RestauranteRelations from '/imports/ui/components/RestauranteRelations'
import CupomContainer from '/imports/ui/containers/CupomContainer';
import { browserHistory} from 'react-router';

function requireAuth(nextState, replace) {
  if (!Meteor.userId()) {
    replace({
      pathname: '/sign-in',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

var routes =
  <Route path="/" component={AppContainer}>
    <IndexRoute component={ Home } />
    <Route path="/sign-in" component={ SignIn } />
    <Route path="/usuarios" component={ UsuariosContainer } onEnter={requireAuth} />
    <Route path="/vouchers" component={ VouchersContainer } onEnter={requireAuth} />
    <Route path="/promocoes" component={ PromocoesContainer } onEnter={requireAuth} />
    <Route path="/questionarios" component={ QuestionariosContainer } onEnter={requireAuth} />
    <Route path="/cupons" component={ CuponsContainer } onEnter={requireAuth} />

    <Route path="/restaurantes/add" component={ RestaurantesAdd } onEnter={requireAuth} />


    <Route path="/requests" component={ Requests } onEnter={requireAuth} />
    <Route path="/restaurantes" component={ RestaurantesContainer } onEnter={requireAuth} />

    <Route path="restaurantes/:id" component = {RestauranteContainer} onEnter={requireAuth}>
      <IndexRoute component={RestauranteRelations} />
      <Route path="promocoes/add" component={ PromocoesAdd } onEnter={requireAuth} />
      <Route path="questionarios/add" component={ QuestionariosAdd } onEnter={requireAuth} />
    </Route>


    <Route path="promocao/:id" component = {PromocaoContainer} onEnter={requireAuth} />
    <Route path="cupons/:id" component = {CupomContainer} onEnter={requireAuth} />
  </Route>

class AppRoutes extends Component {
  render() {
    return <Router history={browserHistory} routes={routes} />
  }
}


AppRoutes.propTypes = {
  browserHistory: React.PropTypes.object
}

export default AppRoutes;
