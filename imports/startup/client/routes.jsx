import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// route components
import AppContainer from '/imports/ui/containers/AppContainer';
import Contacts from '/imports/ui/pages/Contacts';
import Requests from '/imports/ui/pages/Requests';
import Home from '/imports/ui/pages/Home';
import SignIn from '/imports/ui/pages/SignIn';
import Guest from '/imports/ui/layouts/Guest';
import RestaurantesContainer from '/imports/ui/containers/RestaurantesContainer';
import RestaurantesAdd from '/imports/ui/pages/RestaurantesAdd';
import RestauranteContainer from '/imports/ui/containers/RestauranteContainer';
import PromocaoContainer from '/imports/ui/containers/PromocaoContainer';
import CupomContainer from '/imports/ui/containers/CupomContainer';

function requireAuth(nextState, replace) {
  if (!Meteor.userId()) {
    replace({
      pathname: '/sign-in',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

const AppRoutes = ({ browserHistory}) => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ Home } />
      <Route path="/sign-in" component={ SignIn } />
      <Route path="/contacts" component={ Contacts } onEnter={requireAuth} />
      <Route path="/requests" component={ Requests } onEnter={requireAuth} />
      <Route path="/restaurantes" component={ RestaurantesContainer } onEnter={requireAuth} />
      <Route path="/restaurantes/add" component={ RestaurantesAdd } onEnter={requireAuth} />
      <Route path="restaurante/:id" component = {RestauranteContainer} onEnter={requireAuth} />
      <Route path="promocao/:id" component = {PromocaoContainer} onEnter={requireAuth} />
      <Route path="cupom/:id" component = {CupomContainer} onEnter={requireAuth} />
    </Route>
  </Router>
)

AppRoutes.propTypes = {
  browserHistory: React.PropTypes.object
}

export default AppRoutes;
